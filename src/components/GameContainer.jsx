import GuessesContainer from "./GuessesContainer"
import ColorOptions from "./ColorOptions"
import FeedbackExplained from "./FeedbackExplained"
import GuessCounter from "./GuessCounter"

export default function GameContainer() {
  return (
    <section className="w-full h-full flex-1 flex flex-col items-center gap-8 p-4 lg:p-6">
      <GuessCounter />
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 flex flex-col items-center gap-10">
        <ColorOptions />
        <GuessesContainer />
      </div>
      <FeedbackExplained />
    </section>
  )
}
