export default function ColorPeg({
  data,
  showColorName,
  flexSetting,
  handleClick,
}) {
  const colorEl = data.map((color, index) => {
    return (
      <button
        key={index}
        className="flex gap-2 items-center p-2 hover:bg-stone-300 focus:bg-stone-300 hover:text-stone-950 focus:text-stone-950 rounded-md"
        onClick={handleClick && (() => handleClick(color.name))}
      >
        <div
          className={`bg-${color.bgColor} text-${color.textColor} w-10 h-10 flex justify-center items-center font-bold rounded-full border border-black`}
        >
          {color.name[0].toUpperCase()}
        </div>
        {showColorName && color.name}
      </button>
    )
  })

  return (
    <div className={`${flexSetting} gap-1`}>
      {colorEl}
    </div>
  )
}
