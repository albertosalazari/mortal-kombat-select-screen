import React from "react"

export function Fighter({ id, name, imgList, onCharacterChoice, selected }) {
  function handleFighterChoice() {
    onCharacterChoice(id)
  }

  const select = selected ? true : false

  return (
    <li className="fighter__li">
      <button disabled={select} onClick={handleFighterChoice} className={`fighter__button ${select}`}>
        <img className="fighter__image" src={imgList} alt={`icone do ${name}`} />
      </button>
    </li>
  )
}
