'use strict';

// Array Declaration

// [GAME] MEMBER VARIABLES
let wouldFinishThisGame = new Array();
let mightContinuePlayThisGame = new Array();
let willOnlyPlayThisGameWithAGroup = new Array();
let willNeverPlayThisGameAgain = new Array();

let myTopPickGames = new Array();
let prettyGoodGames = new Array();
let wouldntPlayThisGameAgain = new Array();

// [ANIME] MEMBER VARIABLES
let wouldFinishThisAnime = new Array();
let mightContinueWatchingThisAnime = new Array();
let willOnlyWatchThisAnimeWithAGroup = new Array();
let willNeverPlayThisAnimeAgain = new Array();

let finishedAnime = new Array();
let myTopPickAnime = new Array();
let prettyGoodAnime = new Array();
let wouldntWatchThisAnimeAgain = new Array();

// [CARTOON] MEMBER VARIABLES

let wouldFinishThisCartoon = new Array();
let mightContinueWatchingThisCartoon = new Array();
let willOnlyWatchThisCartoonWithAGroup = new Array();
let willNeverWatchThisCartoonAgain = new Array();

let myTopPickCartoons = new Array();
let prettyGoodCartoons = new Array();
let wouldntWatchThisCartoonAgain = new Array();

// [GAME] COLUMN - WOULD FINISH THIS ALONE
wouldFinishThisGame.push('The Midnight Walk');
wouldFinishThisGame.push('BioShock 1 Remastered');
wouldFinishThisGame.push('Hollow Knight: Silksong');
wouldFinishThisGame.push('Max Payne');
wouldFinishThisGame.push('Watch Dogs');
wouldFinishThisGame.push('Warframe');

// [GAME] COLUMN - MIGHT CONTINUE PLAYING THIS

mightContinuePlayThisGame.push('Undertale');
mightContinuePlayThisGame.push('A Quiet Place');
mightContinuePlayThisGame.push('Coffee Talk');
mightContinuePlayThisGame.push('Blue Fire');
mightContinuePlayThisGame.push('South Park: The Fractured But Whole');
mightContinuePlayThisGame.push('The Last Spell');
mightContinuePlayThisGame.push('Ultrakill');
mightContinuePlayThisGame.push('Mortal Sin');

// [GAME] COLUMN - WILL ONLY PLAY THIS WITH A GROUP
willOnlyPlayThisGameWithAGroup.push('My Little Universe');
willOnlyPlayThisGameWithAGroup.push('League of Legends');

// [GAME] COLUMN - WILL NEVER PLAY THIS AGAIN
willNeverPlayThisGameAgain.push('The Legend of Zelda: Breath of the Wild');
willNeverPlayThisGameAgain.push('Bloons TD 6');
willNeverPlayThisGameAgain.push('Minecraft: Dungeons');
willNeverPlayThisGameAgain.push('The Simpsons: Hit and Run');
willNeverPlayThisGameAgain.push('Untitled Goose');
willNeverPlayThisGameAgain.push('Casino Simulator');
willNeverPlayThisGameAgain.push('Car Mechanic Sim 21');
willNeverPlayThisGameAgain.push('Grand Theft Auto: Vice City');
willNeverPlayThisGameAgain.push('Mario + Rabbids: Kingdom Battle');
willNeverPlayThisGameAgain.push('Stray');
willNeverPlayThisGameAgain.push('Aladdin');
willNeverPlayThisGameAgain.push('Crash Bandicoot N. Sane Trilogy');
willNeverPlayThisGameAgain.push('Tempest');
willNeverPlayThisGameAgain.push('Bad Cheese');
willNeverPlayThisGameAgain.push('Black');
willNeverPlayThisGameAgain.push('Terarria');
willNeverPlayThisGameAgain.push('Super Mario Galaxy');
willNeverPlayThisGameAgain.push('Skul: The Hero Slayer');
willNeverPlayThisGameAgain.push('Hades');

// [GAME] COLUMN - MY TOP PICKS
myTopPickGames.push('Hollow Knight');
myTopPickGames.push('Cuphead');
myTopPickGames.push('The Last of Us Remastered');
myTopPickGames.push('The Last of Us II');
myTopPickGames.push('Until Dawn');
myTopPickGames.push('God of War III');
myTopPickGames.push("Astro's Playroom");
myTopPickGames.push('Jak 3');
myTopPickGames.push('Daxter');
myTopPickGames.push('Detroit Become Human');
myTopPickGames.push('The First Tree');
myTopPickGames.push('Portal');
myTopPickGames.push('Portal 2');
myTopPickGames.push('Inside');
myTopPickGames.push('High on Life');
myTopPickGames.push('South Park: The Stick of Truth');

// [GAME] COLUMN - PRETTY GOOD
prettyGoodGames.push('Rabi Ribi');
prettyGoodGames.push('Uncharted: Golden Abyss');
prettyGoodGames.push('Skate 3');
prettyGoodGames.push('Little Nightmares');
prettyGoodGames.push('Jak and Daxter: The Lost Frontier');
prettyGoodGames.push('Viewfinder');
prettyGoodGames.push('Infamous: Second Son');
prettyGoodGames.push('State of Mind');
prettyGoodGames.push('Buckshot Roulette');
prettyGoodGames.push('Ratchet: Deadlocked');
prettyGoodGames.push('Minecraft');
prettyGoodGames.push('Grand Theft Auto V');
prettyGoodGames.push('Ratchet & Clank: Rift Apart');
prettyGoodGames.push('Ratchet & Clank');
prettyGoodGames.push('Call of Duty: Advanced Warfare');
prettyGoodGames.push('Call of Duty: Ghost');

// [GAME] COLUMN - WOULDN'T PLAY THIS AGAIN
wouldntPlayThisGameAgain.push("Assassin's Creed");
wouldntPlayThisGameAgain.push('Call of Duty: Black Ops: Declassified');
wouldntPlayThisGameAgain.push('Sonic Forces');
wouldntPlayThisGameAgain.push('New Super Mario Bros. U.');
wouldntPlayThisGameAgain.push('Knack');
wouldntPlayThisGameAgain.push('Pocket Mini Golf');
wouldntPlayThisGameAgain.push('Goat Simulator');
wouldntPlayThisGameAgain.push('Ratatouille');
wouldntPlayThisGameAgain.push('PlayStation All-Stars');
wouldntPlayThisGameAgain.push('Moto Rush GT');
wouldntPlayThisGameAgain.push('Uncharted 4');
wouldntPlayThisGameAgain.push('Nidhogg');
wouldntPlayThisGameAgain.push('Erica');
wouldntPlayThisGameAgain.push('Sackboy: A Big Adventure');
wouldntPlayThisGameAgain.push('Tekken 7');
wouldntPlayThisGameAgain.push('Worms Reloaded');

// [ANIME] COLUMN - WILL NEVER WATCH THIS ANIME AGAIN
willNeverPlayThisAnimeAgain.push('Dragon Ball');

// [ANIME] COLUMN - TOP PICK ANIME
myTopPickAnime.push('Naruto');
myTopPickAnime.push('Naruto: Shippuden');
myTopPickAnime.push('Kakegurui');
myTopPickAnime.push('Kakegurui xx');
myTopPickAnime.push('Jujutsu Kaisen');
myTopPickAnime.push('Jujutsu Kaisen Season 2');
myTopPickAnime.push('Chainsaw Man');
myTopPickAnime.push('Tokyo Ghoul Season 1');

// [ANIME] COLUMN - PRETTY GOOD ANIME
prettyGoodAnime.push('Boruto: Naruto Next Generations');
prettyGoodAnime.push('Tokyo Ghoul √A Season 2');
prettyGoodAnime.push('Fullmetal Alchemist: Brotherhood');
prettyGoodAnime.push('Ghost Stories');
prettyGoodAnime.push('NARUTO Spin-Off: Rock Lee & His Ninja Pals');

// [ANIME] COLUMN - WOULDN'T WATCH THIS ANIME AGAIN
wouldntWatchThisAnimeAgain.push('Tsuredure Children');

// [CARTOON] COLUMN - WOULD FINISH THIS ALONE
wouldFinishThisCartoon.push('Boondocks');
// [CARTOON] COLUMN - MY TOP PICKS
myTopPickCartoons.push('South Park, Season[3 - 27]');
myTopPickCartoons.push('Regular Show, Season[1 - 8]');

// TABLE - GAMES
createTable(
  'tableForGamesTested',
  wouldFinishThisGame,
  mightContinuePlayThisGame,
  willOnlyPlayThisGameWithAGroup,
  willNeverPlayThisGameAgain
);

createTable(
  'tableForGamesFinished',
  myTopPickGames,
  prettyGoodGames,
  wouldntPlayThisGameAgain
);

// TABLE - ANIME

createTable(
  'tableForAnimeTested',
  wouldFinishThisAnime,
  mightContinueWatchingThisAnime,
  willOnlyWatchThisAnimeWithAGroup,
  willNeverPlayThisAnimeAgain
);

createTable(
  'tableForAnimeFinished',
  myTopPickAnime,
  prettyGoodAnime,
  wouldntWatchThisAnimeAgain
);

createTable(
  'tableForCartoonTested',
  wouldFinishThisCartoon,
  mightContinueWatchingThisCartoon,
  willOnlyWatchThisCartoonWithAGroup,
  willNeverWatchThisCartoonAgain
);

createTable(
  'tableForCartoonFinished',
  myTopPickCartoons,
  prettyGoodCartoons,
  wouldntWatchThisCartoonAgain
);

function createTable(tableName, ...columns) {
  // Copy and sort columns
  const allTheIndexes = columns.map((col) => [...col].sort());

  // Find the longest array length
  const maxRows = Math.max(...allTheIndexes.map((arr) => arr.length));

  // Get the table body element
  const tableBody = document.getElementById(tableName);

  // Build and insert rows
  for (let row = 0; row < maxRows; row++) {
    const rowHTML = `<tr>${allTheIndexes
      .map((col) => `<td>${col[row] ?? ''}</td>`)
      .join('')}</tr>`;
    tableBody.insertAdjacentHTML('beforeend', rowHTML);
  }
}
