import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"
import { colorData } from "../data/colorData"
import GuessesContainer from "./GuessesContainer"
import Button from "./Button"
import SecretCode from "./SecretCode"
import ColorOptions from "./ColorOptions"
import FeedbackExplained from "./FeedbackExplained"
import GuessCounter from "./GuessCounter"
import GameResult from "./GameResult"

export default function GameContainer() {
  const { isGameOn, setIsGameOn, codeArray, selectColor, allGuessesArray, isGameOver, hasPlayerWon, startNewGame } =
    useContext(GameContext)

  return (
    <main className="w-full h-full flex-1 flex">
      {!isGameOn && !isGameOver && (
        <Button
          textContent="Start game!"
          handleClick={() => setIsGameOn(true)}
          style="mx-auto my-auto"
        />
      )}
      {isGameOn && !isGameOver && (
        <section className="w-screen flex flex-col items-center gap-8 p-6">
          <SecretCode />
          <div className="w-full flex justify-between items-start">
            <GuessCounter />
            <GuessesContainer />
            <ColorOptions />
          </div>
          <FeedbackExplained />
        </section>
      )}
      {isGameOver && (
        <GameResult />
      )}
    </main>
  )
}
