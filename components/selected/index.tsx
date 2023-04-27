import React from "react"

export function Selected({ id, fighterSelected, onRemoveFighter, isFighter2 }) {
  function handleRemoveFighter() {
    onRemoveFighter(id)
  }

  const rotateChar = isFighter2 ? "selected__rotate" : ""

  if (!!Object.keys(fighterSelected).length) {
    return (
      <div className="selected__div selected__layout">
        <h3 className="selected__name">{fighterSelected.nome}</h3>
        <img className={`selected__image ${rotateChar}`} src={fighterSelected.imagemDetalhe} alt="" />
        <button onClick={handleRemoveFighter} className="selected__button">
          remover
        </button>
      </div>
    )
  } else {
    return <div className="selected__div"></div>
  }
}

Selected.defaultProps = {
  id: -1,
  fighterSelected: {},
}
