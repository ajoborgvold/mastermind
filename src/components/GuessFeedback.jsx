export default function GuessFeedback({ data }) {
  const sortedData = [...data].sort((a, b) => a.feedback.code - b.feedback.code)

  const feedbackEl = sortedData.map((item, index) => {
    const textContent =
      item.feedback.code === 1 ? "P" : item.feedback.code === 2 ? "C" : ""
    const style =
      item.feedback.code === 1
        ? "bg-black text-white"
        : item.feedback.code === 2
        ? "bg-white text-black"
        : "bg-stone-400"

    return (
      <div
        key={index}
        className={`h-5 w-5 flex justify-center items-center border border-stone-950 rounded-full ${style}`}
      >
        {textContent}
      </div>
    )
  })

  return <>{feedbackEl}</>
}
