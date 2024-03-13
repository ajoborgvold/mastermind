import { useContext } from "react"
import ButtonLarge from "./ButtonLarge"
import { GameContext } from "../context/GameContext"
import SecretCode from "./SecretCode"

export default function StartGame() {
  const { setIsGameOn } = useContext(GameContext)

  return (
    <div className="h-full flex-1 flex flex-col justify-center items-center gap-10 lg:gap-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-widest uppercase">
        Mastermind
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p className="sm:text-lg md:text-xl">Can you crack the secret code?</p>
        <SecretCode />
        <p className="sm:text-lg md:text-xl">You'll get 12 attempts</p>
      </div>
      <ButtonLarge
        textContent="Start game!"
        handleClick={() => setIsGameOn(true)}
      />
    </div>
  )
}
