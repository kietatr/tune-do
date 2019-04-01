const allNotes = [
  'A4', 'A5', 'A6', 'A7', 'Ab4', 'Ab5', 'Ab6', 'Ab7',
  'B4', 'B5', 'B6', 'B7', 'Bb4', 'Bb5', 'Bb6', 'Bb7',
  'C5', 'C6', 'C7', 'C8',
  'D5', 'D6', 'D7', 'Db5', 'Db6', 'Db7',
  'E5', 'E6', 'E7', 'Eb5', 'Eb6', 'Eb7',
  'F4', 'F5', 'F6', 'F7',
  'G4', 'G5', 'G6', 'G7', 'Gb4', 'Gb5', 'Gb6', 'Gb7'
];

const titanicThemeNotes = [
  'E5', 'E5', 'E5', 'E5', 'Eb5', 'E5',
  'E5', 'Eb5', 'E5', 'Gb5', 'Ab5', 'Gb5',
  'E5', 'E5', 'E5', 'E5', 'Eb5', 'E5', 'E5', 'B5'
];

const letItBeNotes = [
  'E6', 'D6', 'C6',
  'E6', 'G6', 'A6',
  'G6', 'E6', 'C6',
  'A5', 'G5', 'E6',
  'E6', 'E6', 'F6', 'E6', 'E6', 'D6',
  'E6', 'D6', 'D6', 'C6',
];

const getSoundFiles = (notes) => {
  const mySoundFiles = [];
  for (let i = 0; i < notes.length; i++) {
    mySoundFiles[i] = require('../assets/sounds/Xylophone.hardrubber.ff.' + notes[i] + '.stereo.mp3');
  }
  return mySoundFiles;
}

export const getRandomSound = () => {
  const allSoundFiles = getSoundFiles(allNotes);
  let randomI = Math.floor(Math.random() * allSoundFiles.length);
  return allSoundFiles[randomI];
}

export const titanicTheme = getSoundFiles(titanicThemeNotes);
export const letItBe = getSoundFiles(letItBeNotes);

export const getRandomSong = () => {
  const titanicTheme = getSoundFiles(titanicThemeNotes);
  const letItBe = getSoundFiles(letItBeNotes);

  const songs = [titanicTheme, letItBe];
  let randomI = Math.floor(Math.random() * songs.length);
  return songs[randomI];
}
