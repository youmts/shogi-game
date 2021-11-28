export type KomaType = {
  image: string
}

export const Fuhyo: KomaType = { image: '/images/syougi14_fuhyou.png' }
export const Kyosha: KomaType = { image: '/images/syougi12_kyousya.png' }
export const Keima: KomaType = { image: '/images/syougi10_keima.png' }
export const Ginsho: KomaType = { image: '/images/syougi08_ginsyou.png' }
export const Kinsho: KomaType = { image: '/images/syougi07_kinsyou.png' }
export const Kakugyo: KomaType = { image: '/images/syougi05_gakugyou.png' }
export const Hisha: KomaType = { image: '/images/syougi03_hisya.png' }
export const Gyokusho: KomaType = { image: '/images/syougi02_gyokusyou.png' }
export const Osho: KomaType = { image: '/images/syougi01_ousyou.png' }

export const 口n = null
export const 歩b = { type: Fuhyo, isAlly: true }
export const 香b = { type: Kyosha, isAlly: true }
export const 桂b = { type: Keima, isAlly: true }
export const 銀b = { type: Ginsho, isAlly: true }
export const 金b = { type: Kinsho, isAlly: true }
export const 角b = { type: Kakugyo, isAlly: true }
export const 飛b = { type: Hisha, isAlly: true }
export const 王b = { type: Osho, isAlly: true }
export const 玉b = { type: Gyokusho, isAlly: true }

export const 歩a = { type: Fuhyo, isAlly: false }
export const 香a = { type: Kyosha, isAlly: false }
export const 桂a = { type: Keima, isAlly: false }
export const 銀a = { type: Ginsho, isAlly: false }
export const 金a = { type: Kinsho, isAlly: false }
export const 角a = { type: Kakugyo, isAlly: false }
export const 飛a = { type: Hisha, isAlly: false }
export const 王a = { type: Osho, isAlly: false }
export const 玉a = { type: Gyokusho, isAlly: false }
