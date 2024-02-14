import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import GuessFeedback from "./GuessFeedback"
import GuessPeg from "./GuessPeg"

export default function GuessesContainer() {
  const { latestGuessArray, checkLatestGuess, allGuessesArray } =
    useContext(GameContext)

  const latestGuessEl = (
    <div className="h-14 w-96 flex items-center gap-4 bg-stone-700 px-4 rounded-md">
      <p className="text-2xl">{allGuessesArray.length + 1}</p>
      <div className="flex gap-1">
        {latestGuessArray.map((guess, index) => (
          <GuessPeg key={index} data={[guess]} />
        ))}
      </div>
      {latestGuessArray.length === 4 && (
        <button
          className="hover:bg-stone-50 hover:text-stone-950 focus:bg-stone-50 focus:text-stone-950 font-semibold py-1 px-2 border border-stone-50 rounded-lg"
          onClick={checkLatestGuess}
        >
          Check
        </button>
      )}
    </div>
  )

  const allGuessesEl = allGuessesArray.map((round, index) => (
    <div
      key={index}
      className="flex items-center gap-4 bg-stone-700 px-4 rounded-md"
    >
      <p className="text-2xl">{allGuessesArray.length - index}</p>
      <GuessPeg data={round} />
      <div className="w-12 ml-auto flex justify-center gap-1 flex-wrap">
        <GuessFeedback data={round} />
      </div>
    </div>
  ))

  return (
    <div className="flex flex-col gap-2 text-stone-50">
      {latestGuessEl}
      {allGuessesArray.length > 0 && allGuessesEl}
    </div>
  )
}
