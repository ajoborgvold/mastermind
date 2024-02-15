import GuessesContainer from "./GuessesContainer"
import SecretCode from "./SecretCode"
import ColorOptions from "./ColorOptions"
import FeedbackExplained from "./FeedbackExplained"
import GuessCounter from "./GuessCounter"

export default function GameContainer() {
  return (
    <section className="w-full h-full flex-1 flex flex-col items-center gap-8 p-6">
      <SecretCode />
      <div className="flex-1 w-full h-full grid grid-cols-3">
        <div className="h-full flex flex-col justify-between items-start">
          <GuessCounter />
          <FeedbackExplained />
        </div>
        <GuessesContainer />
        <div className="ml-auto">
          <ColorOptions />
        </div>
      </div>
    </section>
  )
}