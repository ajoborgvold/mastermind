import { useContext } from "react"
import { GameContext } from "../context/GameContext"
import GuessFeedback from "./GuessFeedback"
import GuessPeg from "./GuessPeg"
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
      <div className="flex sm:gap-1">
        {latestGuessArray.map((guess, index) => (
          <GuessPeg key={index} data={[guess]} />
        ))}
      </div>
      {latestGuessArray.length === 4 && (
        <div className="ml-auto flex gap-3 sm:gap-4">
          <ButtonSmall
            handleClick={deleteLatestGuess}
            aria="Remove all four colors"
          >
            <FaDeleteLeft />
          </ButtonSmall>
          <ButtonSmall handleClick={checkLatestGuess} aria="Submit your guess">
            <FaCheck />
          </ButtonSmall>
        </div>
      )}
    </li>
  )

  const allGuessesEl = allGuessesArray.map((round, index) => (
    <li
      key={index}
      className="h-11 sm:h-14 flex items-center gap-2 lg:gap-4 bg-stone-700 px-2 lg:px-6 rounded-md"
    >
      <p className="w-6 lg:text-2xl">{allGuessesArray.length - index}</p>
      <GuessPeg data={round} />
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
