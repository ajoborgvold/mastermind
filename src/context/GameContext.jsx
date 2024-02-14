import { createContext, useEffect, useState } from "react"
import { colorData } from "../data/colorData"

const GameContext = createContext()

function GameContextProvider({ children }) {
  const [isGameOn, setIsGameOn] = useState(false)
  const [codeArray, setCodeArray] = useState([])
  const [latestGuessArray, setLatestGuessArray] = useState([])
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
    if (latestGuessArray.length === 4) {
      const udpatedGuessArray = [...latestGuessArray]

      for (let i = 0; i < udpatedGuessArray.length; i++) {
        if (
          !udpatedGuessArray[i].feedback &&
          udpatedGuessArray[i].name === codeArray[i].name
        ) {
          const updatedGuessItem = {
            ...udpatedGuessArray[i],
            feedback: { name: "index match", code: 1 },
          }

          udpatedGuessArray.splice(i, 1, updatedGuessItem)

          setLatestGuessArray((prevGuessArray) => {
            const newGuessArray = [...prevGuessArray]
            newGuessArray[i] = updatedGuessItem
            return newGuessArray
          })
        }
      }

      for (let i = 0; i < udpatedGuessArray.length; i++) {
        if (!udpatedGuessArray[i].feedback) {
          const colorMatch = codeArray.find(
            (color) => color.name === udpatedGuessArray[i].name
          )
          const updatedGuessItem = colorMatch
            ? {
                ...udpatedGuessArray[i],
                feedback: { name: "color match", code: 2 },
              }
            : {
                ...udpatedGuessArray[i],
                feedback: { name: "no match", code: 3 },
            }
          
          udpatedGuessArray.splice(i, 1, updatedGuessItem)
          
          setLatestGuessArray((prevGuessArray) => {
            const newGuessArray = [...prevGuessArray]
            newGuessArray[i] = updatedGuessItem
            return newGuessArray
          })
        }
      }
          
      setAllGuessesArray((prevAllGuessesArray) => [
        udpatedGuessArray,
        ...prevAllGuessesArray,
      ])
      setLatestGuessArray([])
    }
  }, [latestGuessArray, codeArray])

  useEffect(() => {
    if (allGuessesArray.length) {
      const isCodeCracked = allGuessesArray[0].every(guess => guess.feedback.name === "index match")

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
    if (latestGuessArray.length < 4) {
        setLatestGuessArray((prevLatestGuessArray) => [
            ...prevLatestGuessArray,
            targetColor,
          ])
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
        allGuessesArray,
        isGameOver,
        hasPlayerWon,
        startNewGame
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
