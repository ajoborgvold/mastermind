import { createContext, useEffect, useState } from "react"
import { colorData } from "../data/colorData"

const GameContext = createContext()

function GameContextProvider({ children }) {
  const [isGameOn, setIsGameOn] = useState(false)
  const [codeArray, setCodeArray] = useState([])

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

  function selectColor(colorName) {
    console.log(colorName)
  }

  return (
    <GameContext.Provider
      value={{
        isGameOn,
        setIsGameOn,
        codeArray,
        selectColor
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export { GameContext, GameContextProvider }
