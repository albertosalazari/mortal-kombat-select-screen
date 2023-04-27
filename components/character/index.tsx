import React from "react"
import LUTADORES from "../../constants/lutadores.json"
import { Fighter, Selected } from ".."
import { useState } from "react"

function isEmpty(fighter) {
  return !Object.keys(fighter).length
}

export function Character() {
  const [fighter1, setFighter1] = useState({} as any)
  const [fighter2, setFighter2] = useState({} as any)

  function handleCharacterChoice(idFighter) {
    const fighter = LUTADORES.find((lutador) => lutador.id === idFighter)

    if (isEmpty(fighter1)) {
      setFighter1(fighter)
    }
    if (isEmpty(fighter2) && !isEmpty(fighter1)) {
      setFighter2(fighter)
    }
  }

  function handleRemoveFighter(idFighter) {
    const fighter = {}
    if (idFighter === fighter1.id) {
      setFighter1(fighter)
    }
    if (idFighter === fighter2.id) {
      setFighter2(fighter)
    }
  }

  const lutadores = LUTADORES.map((lutador) => (
    <Fighter
      key={lutador.id}
      id={lutador.id}
      name={lutador.nome}
      imgList={lutador.imagemListagem}
      onCharacterChoice={handleCharacterChoice}
      selected={lutador.id === fighter1.id || lutador.id === fighter2.id}
    />
  ))

  return (
    <div className="character__layout">
      <Selected id={fighter1.id} fighterSelected={fighter1} onRemoveFighter={handleRemoveFighter} isFighter2={false} />
      <div className="character__container">
        <ul className="character__ul">{lutadores}</ul>
      </div>
      <Selected id={fighter2.id} fighterSelected={fighter2} onRemoveFighter={handleRemoveFighter} isFighter2={true} />
    </div>
  )
}
