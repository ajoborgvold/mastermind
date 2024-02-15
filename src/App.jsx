import { useContext } from "react"
import GameContainer from "./components/GameContainer"
import GameResult from "./components/GameResult"
import { GameContext } from "./context/GameContext"
import StartGame from "./components/StartGame"

export default function App() {
  const { isGameOn, isGameOver } = useContext(GameContext)

  return (
    <main className="min-h-screen flex flex-col bg-stone-950">
      {!isGameOn && !isGameOver && (
        <StartGame />
      )}
      {isGameOn && !isGameOver && <GameContainer />}
      {isGameOver && <GameResult />}
    </main>
  )
}