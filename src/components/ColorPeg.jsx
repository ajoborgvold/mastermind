import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function ColorPeg({ data, showColorName, flexSetting, handleClick }) {
  const colorEl = data.map((color, index) => {
    return (
      <button
        key={index}
        className="flex gap-2 items-center p-1 hover:bg-slate-700 focus:bg-slate-700 hover:text-slate-50 focus:text-slate-50"
        onClick={() => handleClick(color.name)}
      >
        <div
          className={`bg-${color.bgColor} text-${color.textColor} w-10 h-10 flex justify-center items-center font-bold rounded-full border border-black`}
        >
          {color.name[0].toUpperCase()}
        </div>
        {showColorName && color.name}
      </button>
    )
  })

  return (
    <div className={`${flexSetting} gap-1 border border-slate-950`}>
      {colorEl}
    </div>
  )
}
