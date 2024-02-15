import { useContext } from "react"
import { GameContext } from "../context/GameContext"

export default function ButtonSmall({ handleClick, aria, children }) {

  return (
    <button
      className="hover:bg-stone-50 hover:text-stone-950 focus:bg-stone-50 focus:text-stone-950 font-semibold py-1 px-2 border border-stone-50 rounded-lg"
      onClick={handleClick}
      aria-label={aria}
    >
      {children}
    </button>
  )
}