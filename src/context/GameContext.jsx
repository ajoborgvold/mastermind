import { createContext, useEffect, useState } from "react"
import { colorData, emptyPeg } from "../data/colorData"

const GameContext = createContext()

function GameContextProvider({ children }) {
  const [isGameOn, setIsGameOn] = useState(false)
  const [codeArray, setCodeArray] = useState([])
  const [latestGuessArray, setLatestGuessArray] = useState([
    emptyPeg,
    emptyPeg,
    emptyPeg,
    emptyPeg,
  ])
  const [allGuessesArray, setAllGuessesArray] = useState([])
  const [hasPlayerWon, setHasPlayerWon] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    if (isGameOn) {
      const randomColorArray = []
      for (let i = 0; i < 4; i++) {
        const num = Math.floor(Math.random() * 6)
        const color = colorData.find((color) => color.number === num)
        randomColorArray.push(color)
      }

      setCodeArray(randomColorArray)
    }
  }, [isGameOn])

  useEffect(() => {
    if (allGuessesArray.length) {
      const isCodeCracked = allGuessesArray[0].every(
        (guess) => guess.feedback.name === "index match"
      )

      if (allGuessesArray.length === 12 && !isCodeCracked) {
        setHasPlayerWon(false)
        setIsGameOver(true)
        setIsGameOn(false)
      } else if (allGuessesArray.length < 13 && isCodeCracked) {
        setHasPlayerWon(true)
        setIsGameOver(true)
        setIsGameOn(false)
      } else if (allGuessesArray.length < 13 && !isCodeCracked) {
        setHasPlayerWon(false)
      }
    }
  }, [allGuessesArray])

  function selectColor(colorName) {
    const targetColor = colorData.find((color) => color.name === colorName)
    const allColorsSelected = latestGuessArray.every(
      (color) => color.name !== "?"
    )
    // console.log(allColorsSelected)

    if (!allColorsSelected) {
      const firstNoValueIndex = latestGuessArray.findIndex(
        (color) => color.name === "?"
      )
      // console.log(firstNoValueIndex)
      const updatedGuessArray = [...latestGuessArray]
      updatedGuessArray[firstNoValueIndex] = targetColor
      // console.log(updatedGuessArray)
      setLatestGuessArray(updatedGuessArray)
      // setLatestGuessArray(prevGuessArray => {
      //   prevGuessArray[firstNoValueIndex] = targetColor
      // })
    }

    // if (latestGuessArray.length < 4) {
    //   setLatestGuessArray((prevLatestGuessArray) => [
    //     ...prevLatestGuessArray,
    //     targetColor,
    //   ])
    // }
  }

  // console.log(latestGuessArray)
  function handlePegClick(colorName, index) {
    const targetColor = colorData.find((color) => color.name === colorName)
    const updatedGuessArray = [...latestGuessArray]

    if (updatedGuessArray.length === 0 || index >= updatedGuessArray.length) {
      for (let i = updatedGuessArray.length; i <= index; i++) {
        updatedGuessArray.push(null)
      }
    }

    updatedGuessArray[index] = targetColor
    console.log(updatedGuessArray)
    // setLatestGuessArray(updatedGuessArray)
  }

  function deleteLatestGuess() {
    if (latestGuessArray.length) {
      const updatedGuessArray = [...latestGuessArray]
      const firstValueIndex = updatedGuessArray
        .slice()
        .reverse()
        .findIndex((color) => color.name !== "?")

      if (firstValueIndex !== -1) {
        updatedGuessArray[updatedGuessArray.length - 1 - firstValueIndex] =
          emptyPeg
        setLatestGuessArray(updatedGuessArray)
      }
    }
  }

  function checkLatestGuess() {
    if (latestGuessArray.length === 4) {
      const updatedGuessArray = [...latestGuessArray]
      const updatedCodeArray = [...codeArray]

      for (let i = 0; i < updatedGuessArray.length; i++) {
        if (
          !updatedGuessArray[i].feedback &&
          updatedGuessArray[i].name === codeArray[i].name
        ) {
          updatedGuessArray[i] = {
            ...updatedGuessArray[i],
            feedback: { name: "index match", code: 1 },
          }
          updatedCodeArray[i] = { ...updatedCodeArray[i], feedback: "matched" }
        }
      }

      for (let i = 0; i < updatedGuessArray.length; i++) {
        if (!updatedGuessArray[i].feedback) {
          const colorMatchIndex = updatedCodeArray.findIndex(
            (color) =>
              !color.feedback && color.name === updatedGuessArray[i].name
          )

          if (colorMatchIndex !== -1) {
            updatedGuessArray[i] = {
              ...updatedGuessArray[i],
              feedback: { name: "color match", code: 2 },
            }
            updatedCodeArray[colorMatchIndex] = {
              ...updatedCodeArray[colorMatchIndex],
              feedback: "matched",
            }
          } else {
            updatedGuessArray[i] = {
              ...updatedGuessArray[i],
              feedback: { name: "no match", code: 3 },
            }
          }
        }
      }

      setAllGuessesArray((prevAllGuessesArray) => [
        updatedGuessArray,
        ...prevAllGuessesArray,
      ])
      setLatestGuessArray([emptyPeg, emptyPeg, emptyPeg, emptyPeg])
    }
  }

  function startNewGame() {
    setHasPlayerWon(false)
    setIsGameOver(false)
    setAllGuessesArray([])
    setIsGameOn(true)
  }

  return (
    <GameContext.Provider
      value={{
        isGameOn,
        setIsGameOn,
        codeArray,
        selectColor,
        handlePegClick,
        deleteLatestGuess,
        checkLatestGuess,
        latestGuessArray,
        allGuessesArray,
        isGameOver,
        hasPlayerWon,
        startNewGame,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
