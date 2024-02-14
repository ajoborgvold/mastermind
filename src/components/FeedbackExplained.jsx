export default function FeedbackExplained() {
  return (
    <div className="mt-auto flex flex-col gap-4 bg-stone-700 text-stone-50 py-2 px-4 rounded-lg">
      <p className="font-semibold tracking-wide">Feedback explained:</p>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex justify-center items-center bg-black text-white border  border-stone-950 rounded-full">
          P
        </div>
        <p>= Position & color correct</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex justify-center items-center bg-white text-black border border-stone-950 rounded-full">
          C
        </div>
        <p>= Color correct, position not correct</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 flex justify-center items-center bg-stone-400 border border-stone-950  rounded-full"></div>
        <p>= No color match</p>
      </div>
    </div>
  )
}