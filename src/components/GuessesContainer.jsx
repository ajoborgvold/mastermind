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
    <div className="h-14 flex items-center gap-2 lg:gap-4 bg-stone-700 px-4 rounded-md">
      <p className="lg:text-2xl">{allGuessesArray.length + 1}</p>
      <div className="flex lg:gap-1">
        {latestGuessArray.map((guess, index) => (
          <GuessPeg key={index} data={[guess]} />
        ))}
      </div>
      {latestGuessArray.length === 4 && (
        <>
          <ButtonSmall handleClick={checkLatestGuess} aria="Submit your guess">
            <FaCheck />
          </ButtonSmall>
          <ButtonSmall
            handleClick={deleteLatestGuess}
            aria="Remove all four colors"
          >
            <FaDeleteLeft />
          </ButtonSmall>
        </>
      )}
    </div>
  )

  const allGuessesEl = allGuessesArray.map((round, index) => (
    <div
      key={index}
      className="flex items-center gap-2 lg:gap-4 bg-stone-700 px-4 rounded-md"
    >
      <p className="lg:text-2xl">{allGuessesArray.length - index}</p>
      <GuessPeg data={round} />
      <div className="w-12 ml-auto flex justify-center gap-1 flex-wrap">
        <GuessFeedback data={round} />
      </div>
    </div>
  ))

  return (
    <div className="flex flex-col gap-2 px-12">
      {latestGuessEl}
      {allGuessesArray.length > 0 && allGuessesEl}
    </div>
  )
}
