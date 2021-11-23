function ShogiBan(props: {width: number, height: number}) {
  return (
    <svg version="1.1"
      baseProfile="full"
      width={props.width} height={props.height}
      xmlns="http://www.w3.org/2000/svg">
      <image href="/images/shogi_ban.png" x="0" y="0" width={props.width} height={props.height} />
    </svg>
  )
}

export default function Game() {
  const width: number = 735
  const height: number = 800

  return (
    <ShogiBan width={width} height={height} />
  )
}