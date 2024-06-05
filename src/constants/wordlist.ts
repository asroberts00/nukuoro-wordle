import { CONFIG } from './config'

export const WORDS = [
  'aadea',
  'aagai',
  'aahee',
  'aamia',
  'aamua',
  'aasii',
  'aausa',
  'abulu',
  'adaau',
  'agina',
  'ahine',
  'ahulu',
  'aladi',
  'alava',
  'alelo',
  'aligi',
  'alili',
  'aloha',
  'alohi',
  'amaau',
  'angia',
  'aoaoa',
  'aonga',
  'baasi',
  'baaua',
  'babaa',
  'badai',
  'badii',
  'baeao',
  'bagua',
  'baguu',
  'baibu',
  'baieu',
  'bakau',
  'balia',
  'baluu',
  'bangi',
  'basaa',
  'beagi',
  'beaha', 
  'bebea',
  'beluu',
  'bidoa'
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
