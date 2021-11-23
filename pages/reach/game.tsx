import * as koma from "../../lib/koma"

type Koma = {
  type: koma.KomaType,
  x: number // 0-8
  y: number // 0-8
  isAlly: boolean
}

function ShogiBan(props: {width: number, height: number}) {
  const komaList: Koma[] = [
    { type: koma.Fuhyo, x: 0, y: 0, isAlly: true},
    { type: koma.Fuhyo, x: 1, y: 0, isAlly: false},
    { type: koma.Osho, x: 8, y: 8, isAlly: false},
    { type: koma.Fuhyo, x: 7, y: 8, isAlly: true},
  ]

  const komaAreaX: number = 25
  const komaAreaY: number = 21

  const komaWidth: number = 76
  const komaHeight: number = 83.5

  var komaItems = komaList.map(
    (koma, index) => {
      const left = komaAreaX + koma.x * komaWidth
      const top = komaAreaY + koma.y * komaHeight
      const transform = koma.isAlly ? "" : `rotate(180, ${left + komaWidth * 0.5 }, ${top + komaHeight * 0.5 + 2 })`
      return (
        // TODO: not use index
        <image key={index} href={koma.type.image}
          x={left}
          y={top}
          width={komaWidth} height={komaHeight}
          transform={transform}
        />
      )
    }
  )

  return (
    <svg version="1.1"
      baseProfile="full"
      width={props.width} height={props.height}
      xmlns="http://www.w3.org/2000/svg">
      <image href="/images/shogi_ban.png" x="0" y="0" width={props.width} height={props.height} />
      {komaItems}
    </svg>
  )
}

export default function Game() {
  const width: number = 735
  const height: number = 800

  return (
    <>
      <ShogiBan width={width} height={height} />
    </>
  )
}