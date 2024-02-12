import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import ColorPeg from "./ColorPeg"
import { colorData } from "../data/colorData"

export default function GameContainer() {
  const { isGameOn, setIsGameOn, codeArray, selectColor } =
    useContext(GameContext)

  return (
    <main className="w-full flex">
      {!isGameOn ? (
        <button
          className="order-first self-start bg-green-800 text-green-50 py-2 px-4 rounded"
          onClick={() => setIsGameOn(true)}
        >
          Start game!
        </button>
      ) : (
        <section className="w-screen flex flex-col items-center gap-4">
          <ColorPeg data={codeArray} showColorName={false} flexSetting="flex" />
          <ColorPeg
            data={colorData}
            showColorName={true}
            flexSetting="ml-auto flex flex-col"
            handleClick={selectColor}
          />
        </section>
      )}
    </main>
  )
}
