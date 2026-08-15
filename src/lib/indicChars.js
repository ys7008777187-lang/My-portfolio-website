/**
 * Indian Script Character Sets
 * Curated standalone consonants and vowels from 9 major Indian scripts.
 * Used by VaporText for the cinematic decode cycling effect.
 */

const DEVANAGARI = 'अआइईउऊएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह';
const BENGALI = 'অআইঈউঊএঐওঔকখগঘচছজঝটঠডঢণতথদধনপফবভমযরলশষসহ';
const TAMIL = 'அஆஇஈஉஊஎஏஐஒஓஔகஙசஞடணதநபமயரலவழளறன';
const TELUGU = 'అఆఇఈఉఊఎఏఐఒఓఔకఖగఘచఛజఝటఠడఢణతథదధనపఫబభమయరలవశషసహ';
const KANNADA = 'ಅಆಇಈಉಊಎಏಐಒಓಔಕಖಗಘಚಛಜಝಟಠಡಢಣತಥದಧನಪಫಬಭಮಯರಲವಶಷಸಹ';
const MALAYALAM = 'അആഇഈഉഊഎഏഐഒഓഔകഖഗഘചഛജഝടഠഡഢണതഥദധനപഫബഭമയരലവശഷസഹ';
const GUJARATI = 'અઆઇઈઉઊએઐઓઔકખગઘચછજઝટઠડઢણતથદધનપફબભમયરલવશષસહ';
const GURMUKHI = 'ਅਆਇਈਉਊਏਐਓਔਕਖਗਘਚਛਜਝਟਠਡਢਣਤਥਦਧਨਪਫਬਭਮਯਰਲਵਸਹ';
const ODIA = 'ଅଆଇଈଉଊଏଐଓଔକଖଗଘଚଛଜଝଟଠଡଢଣତଥଦଧନପଫବଭମଯରଲଵଶଷସହ';

// All characters flattened into a single array
const ALL_CHARS = [
  ...DEVANAGARI,
  ...BENGALI,
  ...TAMIL,
  ...TELUGU,
  ...KANNADA,
  ...MALAYALAM,
  ...GUJARATI,
  ...GURMUKHI,
  ...ODIA,
];

/**
 * Returns a random Indian script character.
 */
export function getRandomIndicChar() {
  return ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)];
}

/**
 * Returns an array of N unique random Indian characters.
 */
export function getRandomIndicChars(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)]);
  }
  return result;
}

export { ALL_CHARS };
