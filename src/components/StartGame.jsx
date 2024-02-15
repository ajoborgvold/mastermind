import { useContext } from "react"
import Button from "./Button"
import { GameContext } from "../context/GameContext"

export default function StartGame() {
  const { setIsGameOn } = useContext(GameContext)

  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-20">
      <h1 className="text-stone-50 text-7xl tracking-widest uppercase">
        Mastermind
      </h1>
      <Button
        textContent="Start game!"
        handleClick={() => setIsGameOn(true)}
        // style="mx-auto my-auto"
      />
    </div>
  )
}
