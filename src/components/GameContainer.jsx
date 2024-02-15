import GuessesContainer from "./GuessesContainer"
import SecretCode from "./SecretCode"
import ColorOptions from "./ColorOptions"
import FeedbackExplained from "./FeedbackExplained"
import GuessCounter from "./GuessCounter"

export default function GameContainer() {
  return (
    <section className="w-full h-full flex-1 flex flex-col items-center gap-8 p-4 lg:p-6">
      <GuessCounter />
      <SecretCode />
      <div className="flex flex-col items-center gap-10 lg:w-full">
        <ColorOptions />
        <GuessesContainer />
      </div>
      <FeedbackExplained />
    </section>
  )
}
