export default function GuessPeg({ data }) {
  const colorEl = data.map((color, index) => {
    return (
      <div
        key={index}
        className="flex items-center p-1 sm:p-2 rounded-sm"
        aria-label={color.name}
      >
        <div
          className={`${color.bgColor} ${color.textColor} w-7 h-7 sm:w-10 sm:h-10 flex justify-center items-center text-sm sm:text-base font-bold rounded-full border border-black`}
        >
          {color.name[0].toUpperCase()}
        </div>
      </div>
    )
  })

  return <div className="flex sm:gap-1">{colorEl}</div>
}
