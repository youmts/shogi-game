import React from 'react'
import * as koma from '../lib/koma'
import styles from './game.module.css'

const gameWidth = 735
const gameHeight = 800

const komaAreaX = 25
const komaAreaY = 21

const komaWidth = 76
const komaHeight = 83.5

let komaIdMax = 0

type Koma = {
  id: number
  type: koma.KomaType
  x: number // 0-8
  y: number // 0-8
  isAlly: boolean
}

function KomaPiece(props: { koma: Koma }) {
  const { koma } = props
  const left = komaAreaX + koma.x * komaWidth
  const top = komaAreaY + koma.y * komaHeight
  const transform = koma.isAlly
    ? ''
    : `rotate(180, ${left + komaWidth * 0.5}, ${top + komaHeight * 0.5 + 2})`

  // TODO: delete this
  function handleClick() {
    alert(`clicked! : ${koma.type.image}`)
  }

  return (
    <image
      href={koma.type.image}
      x={left}
      y={top}
      width={komaWidth}
      height={komaHeight}
      transform={transform}
      onClick={handleClick}
    />
  )
}

function ShogiBan(props: { width: number; height: number }) {
  const komaList: Koma[] = [
    { id: komaIdMax++, type: koma.Fuhyo, x: 0, y: 0, isAlly: true },
    { id: komaIdMax++, type: koma.Fuhyo, x: 1, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Kyosha, x: 2, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Keima, x: 3, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Ginsho, x: 4, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Kinsho, x: 5, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Kakugyo, x: 6, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Hisha, x: 7, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Gyokusho, x: 8, y: 0, isAlly: false },
    { id: komaIdMax++, type: koma.Osho, x: 8, y: 8, isAlly: false },
    { id: komaIdMax++, type: koma.Fuhyo, x: 7, y: 8, isAlly: true },
  ]

  const komaItems = komaList.map((koma) => (
    <KomaPiece key={koma.id} koma={koma} />
  ))

  return (
    <>
      <image
        href="/images/shogi_ban.png"
        x="0"
        y="0"
        width={props.width}
        height={props.height}
      />
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
        xmlns="http://www.w3.org/2000/svg"
      >
        <ShogiBan width={gameWidth} height={gameHeight} />
      </svg>
    </div>
  )
}
