import OptionPeg from "./OptionPeg"

export default function ColorOptions() {
  return (
    <div className="flex flex-col gap-4 bg-stone-700 text-stone-50 p-4 rounded-lg">
      <p className="font-semibold tracking-wide">Color options:</p>
      <OptionPeg />
    </div>
  )
}