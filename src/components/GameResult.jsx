import { useContext } from "react"
import ButtonLarge from "./ButtonLarge"
import { GameContext } from "../context/GameContext"
import ResultGuessPeg from "./ResultGuessPeg"

export default function GameResult() {
  const { codeArray, hasPlayerWon, allGuessesArray, startNewGame } =
    useContext(GameContext)

  return (
    <section className="flex-1 w-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-4xl">You {hasPlayerWon ? "won!" : "lost!"}</h1>
      <div className="flex flex-col items-center gap-2 bg-stone-700 py-2 px-4 rounded-lg">
        <p>Secret color code:</p>
        <ResultGuessPeg data={codeArray} />
      </div>
      {hasPlayerWon ? (
        <p>You cracked the code in {allGuessesArray.length} attempts</p>
      ) : (
        <div className="flex flex-col items-center gap-2 bg-stone-700 py-2 px-4 rounded-lg">
          <p>Your last guess was:</p>
          <ResultGuessPeg data={allGuessesArray[0]} />
        </div>
      )}
      <ButtonLarge textContent="Play again" handleClick={startNewGame} />
    </section>
  )
}
