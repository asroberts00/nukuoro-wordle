import { CONFIG } from './config'

export const VALIDGUESSES = [
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
  'bidoa',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
