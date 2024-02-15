export default function GuessPeg({ data }) {
  const colorEl = data.map((color, index) => {
    return (
      <div key={index} className="flex gap-2 items-center p-2 rounded-md" aria-label={color.name}>
        <div
          className={`${color.bgColor} ${color.textColor} w-10 h-10 flex justify-center items-center font-bold rounded-full border border-black`}
        >
          {color.name[0].toUpperCase()}
        </div>
      </div>
    )
  })

  return <div className="flex gap-1">{colorEl}</div>
}
