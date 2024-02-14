import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import GuessFeedback from "./GuessFeedback"
import GuessPeg from "./GuessPeg"

export default function GuessesContainer() {
  const { allGuessesArray } = useContext(GameContext)

  const guessesEl = allGuessesArray.map((round, index) => (
    <div key={index} className="flex items-center bg-stone-700 px-2 rounded-md">
      <GuessPeg data={round} />
      <div className="w-16 flex gap-1 flex-wrap pl-4">
        <GuessFeedback data={round} />
      </div>
    </div>
  ))

  return (
    <div className="flex flex-col gap-2 text-stone-50">
      {allGuessesArray.length > 0 ? guessesEl : <p>No guesses yet</p>}
    </div>
  )
}
