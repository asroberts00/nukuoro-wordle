import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'b',
  'p',
  'd',
  't',
  'g',
  'k',
  'm',
  'n',
  'l',
  'v',
  's',
  'h',
  'a',
  'e',
  'i',
  'o',
  'u',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
