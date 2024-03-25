import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function LatestGuessPeg({ data, index }) {
  const { handleLatestGuessPegClick } = useContext(GameContext)

  // const colorEl = data.map((color, index) => {
    return (
      <div
        key={index}
        className="flex items-center p-1 sm:p-2 rounded-sm cursor-pointer hover:bg-stone-300"
        aria-label={data.name ? data.name : "?"}
        onClick={() => handleLatestGuessPegClick(data.name, index)}
      >
        <div
          className={`${data.bgColor} ${data.textColor} w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black`}
        >
          {data.name ? data.name[0].toUpperCase() : "?"}
        </div>
      </div>
    )
  // })

  // return <div className="flex gap-1 sm:gap-2">{colorEl}</div>
}
