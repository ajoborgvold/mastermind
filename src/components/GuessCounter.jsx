import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function GuessCounter() {
  const { allGuessesArray } = useContext(GameContext)

  return (
    <div className="bg-stone-700 text-stone-50 py-2 px-4 rounded-lg">
      <p>Used guesses: {allGuessesArray.length}</p>
      <p>Guesses left: {12 - allGuessesArray.length}</p>
    </div>
  )
}