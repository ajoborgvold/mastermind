import { useContext } from "react"
import GameContainer from "./components/GameContainer"
import GameResult from "./components/GameResult"
import { GameContext } from "./context/GameContext"
import StartGame from "./components/StartGame"

export default function App() {
  const { isGameOn, isGameOver } = useContext(GameContext)

  return (
    <main className="h-full min-h-screen flex flex-col justify-center bg-stone-950 text-stone-50">
      {!isGameOn && !isGameOver && <StartGame />}
      {isGameOn && !isGameOver && <GameContainer />}
      {isGameOver && <GameResult />}
    </main>
  )
}
