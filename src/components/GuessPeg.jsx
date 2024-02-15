export default function GuessPeg({ data }) {
  const colorEl = data.map((color, index) => {
    return (
      <div
        key={index}
        className="flex items-center p-2 rounded-md"
        aria-label={color.name}
      >
        <div
          className={`${color.bgColor} ${color.textColor} w-7 h-7 lg:w-10 lg:h-10 flex justify-center items-center text-sm lg:text-base font-bold rounded-full border border-black`}
        >
          {color.name[0].toUpperCase()}
        </div>
      </div>
    )
  })

  return <div className="flex lg:gap-1">{colorEl}</div>
}
