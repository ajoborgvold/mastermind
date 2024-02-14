import { useContext } from "react"
import Button from "./Button"
import { GameContext } from "../context/GameContext"
import GuessPeg from "./GuessPeg"

export default function GameResult() {
  const { codeArray, hasPlayerWon, allGuessesArray, startNewGame } = useContext(GameContext)

  return (
    <section className="w-screen flex flex-col justify-center items-center gap-10 text-stone-50">
      <h1 className="text-4xl">You {hasPlayerWon ? "won!" : "lost!"}</h1>
      <div className="flex flex-col items-center gap-2 bg-stone-700 text-stone-50 py-2 px-4 rounded-lg">
        <p>Secret color code:</p>
        <GuessPeg data={codeArray} />
      </div>
      {hasPlayerWon ? (
        <p>You cracked the code in {allGuessesArray.length} attempts</p>
      ) : (
        <div className="flex flex-col items-center gap-2 bg-stone-700 py-2 px-4 rounded-lg">
          <p>Your last guess was:</p>
          <GuessPeg data={allGuessesArray[0]} />
        </div>
      )}
      <Button textContent="Play again" handleClick={startNewGame} />
    </section>
  )
}