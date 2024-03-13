import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function GuessCounter() {
  const { allGuessesArray } = useContext(GameContext)

  return (
    <div className="self-start bg-stone-700 py-2 px-4 rounded-lg">
      <p className="lg:text-xl tracking-wide">
        Attempts left: {12 - allGuessesArray.length}
      </p>
    </div>
  )
}
