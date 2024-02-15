export default function FeedbackExplained() {
  return (
    <div className="mt-auto flex flex-col lg:flex-row gap-4 lg:gap-8 bg-stone-700 py-2 px-4 rounded-lg">
      <p className="font-semibold tracking-wide">Feedback explained:</p>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center bg-black text-white text-xs lg:text-sm border border-stone-950 rounded-full">
          P
        </div>
        <p>= Position & color correct</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center bg-white text-black text-xs lg:text-sm border border-stone-950 rounded-full">
          C
        </div>
        <p>= Color correct, position not correct</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 lg:w-5 lg:h-5 flex justify-center items-center text-xs lg:text-sm border border-stone-50 rounded-full">
          N
        </div>
        <p>= No color match</p>
      </div>
    </div>
  )
}
