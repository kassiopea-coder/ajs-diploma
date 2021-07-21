/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  
  // random types of char (0 - allowedTypes.length)
  const rand = Math.floor(Math.random() * allowedTypes.length);
  const genCharacter = Object.create(allowedTypes[rand]);
  // random char`s level (1 - maxLevel)
  genCharacter.level = Math.floor(1 + Math.random() * maxLevel);
  yield genCharacter;
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  const team = [];
  for (let i = 0; i < characterCount; i+=1) {
     team.push(characterGenerator(allowedTypes, maxLevel).next().value);
  }
  return team;
}


