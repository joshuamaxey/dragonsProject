const Dragon = require("./classes/dragon");
const FriendlyDragon = require("./classes/friendly-dragon")
const EvilDragon = require("./classes/evil-dragon")

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"],
  "Bastian"
)

const smaug = new EvilDragon(
  "Smaug",
  "black",
  ["take over your mountain kingdom", "steal all your dwarven gold", "burn down your floating village"],
  "Dwarf King"
)

console.log(falkor);
console.log(smaug);

falkor.hasLifeGoals();
smaug.dontInviteThemOverForDinner();

console.log(falkor.breathesFire());
console.log(smaug.breathesFire());

console.log(falkor.helpsPeople());
console.log(smaug.burnsNemesis());

console.log(Dragon.getDragons(falkor, smaug))

module.exports.alldragons = alldragons;

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
} catch {
  module.exports = null;
}
