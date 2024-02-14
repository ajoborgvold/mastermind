// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import { useContext } from "react"
// import "./App.css"
import Header from "./components/Header"
import GameContainer from "./components/GameContainer"
// import { GameContext } from "./context/GameContext"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-950">
      {/* <Header /> */}
      <GameContainer />
    </div>
  )
}

export default App
