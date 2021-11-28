import React from 'react'
import { nonNullable } from '../lib/non_nullable'
import {
  口n,
  歩a,
  香a,
  桂a,
  銀a,
  金a,
  角a,
  飛a,
  王a,
  玉a,
  歩b,
  香b,
  桂b,
  銀b,
  金b,
  角b,
  飛b,
  王b,
  玉b,
} from '../lib/koma'
import * as koma from '../lib/koma'

import styles from './game.module.css'

const gameWidth = 735
const gameHeight = 800

const komaAreaX = 25
const komaAreaY = 21

const komaWidth = 76
const komaHeight = 83.5

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

type Koma = {
  id: number
  type: koma.KomaType
  x: number // 0-8
  y: number // 0-8
  isAlly: boolean
}

function ShogiBan(props: { width: number; height: number }) {
  /* prettier-ignore */
  const komaList: ({type: koma.KomaType, isAlly: boolean} | null)[][] = [
    [口n, 飛a, 口n, 金a, 口n, 口n, 口n, 口n, 香a],
    [口n, 口n, 口n, 口n, 口n, 口n, 金a, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 角b, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
    [口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n, 口n],
  ]

  let komaIdMax = 0

  const komaItems = komaList
    .flatMap((ks, y) =>
      ks.map((k, x) =>
        k == null
          ? null
          : {
              id: komaIdMax++,
              x: x,
              y: y,
              ...k,
            },
      ),
    )
    .filter(nonNullable)
    .map((koma) => <KomaPiece key={koma.id} koma={koma} />)

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
