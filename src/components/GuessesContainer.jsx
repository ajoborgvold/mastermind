import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import GuessFeedback from "./GuessFeedback"
import AllGuessPeg from "./AllGuessPeg"
import LatestGuessPeg from "./LatestGuessPeg"
import ButtonSmall from "./ButtonSmall"
import { FaCheck, FaDeleteLeft } from "react-icons/fa6"

export default function GuessesContainer() {
  const {
    latestGuessArray,
    checkLatestGuess,
    deleteLatestGuess,
    allGuessesArray,
  } = useContext(GameContext)

  const latestGuessEl = (
    <li className="h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-700 px-2 lg:px-6 rounded-md">
      <p className="w-6 lg:text-2xl">{allGuessesArray.length + 1}</p>
      <div className="flex gap-1 sm:gap-2">
        {latestGuessArray.map((guess, index) => (
          <LatestGuessPeg key={index} data={guess} index={index} />
        ))}
      </div>
      <div className="ml-auto flex gap-5 sm:gap-4">
        <ButtonSmall
          handleClick={deleteLatestGuess}
          aria="Delete the color added last."
        >
          <FaDeleteLeft />
        </ButtonSmall>
        <ButtonSmall handleClick={checkLatestGuess} aria="Submit your guess">
          <FaCheck />
        </ButtonSmall>
      </div>
    </li>
  )

  const allGuessesEl = allGuessesArray.map((round, index) => (
    <li
      key={index}
      className="h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-700 px-2 lg:px-6 rounded-md"
    >
      <p className="w-6 lg:text-2xl">{allGuessesArray.length - index}</p>
      <AllGuessPeg data={round} />
      <div className="ml-auto w-12 flex justify-center gap-1 flex-wrap">
        <GuessFeedback data={round} />
      </div>
    </li>
  ))

  return (
    <ul className="w-full flex flex-col gap-2">
      {latestGuessEl}
      {allGuessesArray.length > 0 && allGuessesEl}
    </ul>
  )
}
