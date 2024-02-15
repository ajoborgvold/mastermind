export default function ButtonLarge({ textContent, handleClick}) {
  return (
    <button
      className="bg-green-800 text-green-50 hover:bg-green-50 focus:bg-green-50 hover:text-green-800 focus:text-green-800 text-3xl font-semibold tracking-wider py-4 px-8 rounded"
      onClick={handleClick}
    >
      {textContent}
    </button>
  )
}