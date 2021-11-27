import React from "react"
import * as koma from "../../lib/koma"
import styles from "./game.module.css"

const gameWidth: number = 735
const gameHeight: number = 800

const komaAreaX: number = 25
const komaAreaY: number = 21

const komaWidth: number = 76
const komaHeight: number = 83.5

type Koma = {
  type: koma.KomaType,
  x: number // 0-8
  y: number // 0-8
  isAlly: boolean
}


function KomaPiece(props: {koma: Koma}) {
    const {koma} = props
    const left = komaAreaX + koma.x * komaWidth
    const top = komaAreaY + koma.y * komaHeight
    const transform = koma.isAlly ? "" : `rotate(180, ${left + komaWidth * 0.5 }, ${top + komaHeight * 0.5 + 2 })`

    // TODO: delete this
    function handleClick(event: React.MouseEvent<SVGElement, MouseEvent>) {
      alert(`clicked! : ${koma.type.image}`)
    }

    return (
      // TODO: not use index
      <image href={koma.type.image}
        x={left}
        y={top}
        width={komaWidth} height={komaHeight}
        transform={transform}
        onClick={handleClick}
      />
    )
}

function ShogiBan(props: {width: number, height: number}) {
  const komaList: Koma[] = [
    { type: koma.Fuhyo, x: 0, y: 0, isAlly: true},
    { type: koma.Fuhyo, x: 1, y: 0, isAlly: false},
    { type: koma.Osho, x: 8, y: 8, isAlly: false},
    { type: koma.Fuhyo, x: 7, y: 8, isAlly: true},
  ]

  var komaItems = komaList.map(
    (koma, index) => <KomaPiece key={index} koma={koma} />
  )

  return (
    <>
      <image href="/images/shogi_ban.png" x="0" y="0" width={props.width} height={props.height} />
      {komaItems}
    </>
  )
}

export default function Game() {

  const viewBox = `0 0 ${gameWidth} ${gameHeight}`

  return (
    <div className={styles.svg_container}>
      <svg
        className={styles.svg_content}
        version="1.1"
        baseProfile="full"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg">
        <ShogiBan width={gameWidth} height={gameHeight} />
      </svg>
    </div>
  )
}