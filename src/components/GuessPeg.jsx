import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function GuessPeg({ data }) {
  const { handlePegClick } = useContext(GameContext)

  // console.log(data)

  const colorEl = data.map((color, index) => {
    return (
      <li
        key={index}
        className="flex items-center p-1 sm:p-2 rounded-sm cursor-pointer hover:bg-stone-300"
        aria-label={color.name ? color.name : "?"}
        onClick={() => handlePegClick(color.name, index)}
      >
        <div
          className={`${color.bgColor} ${color.textColor} w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black`}
        >
          {color.name ? color.name[0].toUpperCase() : "?"}
        </div>
      </li>
    )
  })

  return <ul className="flex sm:gap-1">{colorEl}</ul>
}
