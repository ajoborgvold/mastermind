export default function ButtonSmall({ handleClick, aria, children }) {
  return (
    <button
      className="hover:bg-stone-50 hover:text-stone-950 focus:bg-stone-50 focus:text-stone-950 sm:text-xl font-semibold py-1 px-3 sm:py-2 md:px-4 lg:px-5 border border-stone-50 rounded-lg"
      onClick={handleClick}
      aria-label={aria}
    >
      {children}
    </button>
  )
}
