import React from "react"
import { Character } from "../components/character"

export default function Home() {
  return (
    <div className="fight__scope">
      <img className="fight__logo" src="logo.png" alt="logo do mortal kombat" />
      <h1 className="fight__title">choose your fighter</h1>
      <Character />
    </div>
  )
}
//
