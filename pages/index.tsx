import type { NextPage } from 'next'
import Head from 'next/head'
import Game from '../components/game'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shogi-game</title>
        <meta name="description" content="shogi-game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
    </>
  )
}

export default Home
