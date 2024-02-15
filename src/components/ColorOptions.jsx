import OptionPeg from "./OptionPeg"

export default function ColorOptions() {
  return (
    <div className="flex flex-col items-center gap-2 lg:gap-4 bg-stone-700 p-1 lg:py-2 lg:px-4 rounded-lg">
      <p className="text-center font-semibold tracking-wide">Color options:</p>
      <OptionPeg />
    </div>
  )
}
