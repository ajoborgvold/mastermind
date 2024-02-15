import { useContext } from "react"
import ButtonLarge from "./ButtonLarge"
import { GameContext } from "../context/GameContext"

export default function StartGame() {
  const { setIsGameOn } = useContext(GameContext)

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-20">
      <h1 className="text-7xl tracking-widest uppercase">
        Mastermind
      </h1>
      <ButtonLarge
        textContent="Start game!"
        handleClick={() => setIsGameOn(true)}
      />
    </div>
  )
}
