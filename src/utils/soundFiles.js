// const allNotes = [
//   'A4', 'A5', 'A6', 'A7', 'Ab4', 'Ab5', 'Ab6', 'Ab7',
//   'B4', 'B5', 'B6', 'B7', 'Bb4', 'Bb5', 'Bb6', 'Bb7',
//   'C5', 'C6', 'C7', 'C8',
//   'D5', 'D6', 'D7', 'Db5', 'Db6', 'Db7',
//   'E5', 'E6', 'E7', 'Eb5', 'Eb6', 'Eb7',
//   'F4', 'F5', 'F6', 'F7',
//   'G4', 'G5', 'G6', 'G7', 'Gb4', 'Gb5', 'Gb6', 'Gb7'
// ];

const titanicTheme_Notes = [
  'E5', 'E5', 'E5', 'E5', 'Eb5', 'E5',
  'E5', 'Eb5', 'E5', 'Gb5', 'Ab5', 'Gb5',
  'E5', 'E5', 'E5', 'E5', 'Eb5', 'E5', 'E5', 'B5'
];

const letItBe_Notes = [
  'E6', 'D6', 'C6',
  'E6', 'G6', 'A6',
  'G6', 'E6', 'C6',
  'A5', 'G5', 'E6',
  'E6', 'E6', 'F6', 'E6', 'E6', 'D6',
  'E6', 'D6', 'D6', 'C6',
];

const cityOfStars_Notes = [
  'B5', 'Db5', 'D5', 'Gb5',
  'Ab5', 'A5', 'Gb5', 'Ab5', 'E5', 'Gb5', 'Db5',
];

const cantHelpFallingInLove_Notes = [
  'C5', 'G5', 'C5', 'D5', 'E5', 'F5', 'E5', 'D5',
  'G5', 'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'E5', 'D5', 'C5',
];

const laVieEnRose_Notes = [
  'D6', 'Db6', 'B5', 'A5', 'Gb5', 'D6', 'Db6',
  'B5', 'A5', 'Gb5', 'D6', 'Db6', 'B5',
  'A5', 'Gb5', 'Db5', 'D5', 'Db6', 'B5', 'A5',
  'E6', 'D6', 'Db6', 'B5', 'G5', 'D6', 'Db6',
  'B5', 'A5', 'G5', 'E5', 'Db6', 'B5',
  'A5', 'G5', 'Eb5', 'E5', 'Db6','B5', 'A5',
];

const megalovania_Notes = [
  'D5', 'D5', 'D6', 'A5', 'Ab5', 'G5', 'F5', 'D5', 'F5', 'G5',
  'C5', 'C5', 'D6', 'A5', 'Ab5', 'G5', 'F5', 'D5', 'F5', 'G5',
  'B4', 'B4', 'D6', 'A5', 'Ab5', 'G5', 'F5', 'D5', 'F5', 'G5',
  'Bb4', 'Bb4', 'D6', 'A5', 'Ab5', 'G5', 'F5', 'D5', 'F5', 'G5',
];

const getSoundFiles = (notes) => {
  const mySoundFiles = [];
  for (let i = 0; i < notes.length; i++) {
    mySoundFiles[i] = require('../assets/sounds/Xylophone/Xylophone.hardrubber.ff.' + notes[i] + '.stereo.mp3');
  }
  return mySoundFiles;
}

// export const getRandomSound = () => {
//   const allSoundFiles = getSoundFiles(allNotes);
//   let randomI = Math.floor(Math.random() * allSoundFiles.length);
//   return allSoundFiles[randomI];
// }

export const titanicTheme = getSoundFiles(titanicTheme_Notes);
export const letItBe = getSoundFiles(letItBe_Notes);
export const cityOfStars = getSoundFiles(cityOfStars_Notes);
export const cantHelpFallingInLove = getSoundFiles(cantHelpFallingInLove_Notes);
export const laVieEnRose = getSoundFiles(laVieEnRose_Notes);
export const megalovania = getSoundFiles(megalovania_Notes);

export const getRandomSong = () => {
  const songs = [titanicTheme, letItBe, cityOfStars, cantHelpFallingInLove, laVieEnRose, megalovania];
  let randomI = Math.floor(Math.random() * songs.length);
  return songs[randomI];
}
