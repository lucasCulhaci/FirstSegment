'use strict';

// Array Declaration
let wouldFinishThisAlone = new Array();
let mightContinuePlayingThis = new Array();
let willOnlyPlayThisWithAGroup = new Array();
let willNeverPlayThisAgain = new Array();

let myTopPicks = new Array();
let prettyGood = new Array();
let wouldntPlayThisAgain = new Array();

// COLUMN - WOULD FINISH THIS ALONE
wouldFinishThisAlone.push('The Midnight Walk');
wouldFinishThisAlone.push('BioShock 1 Remastered');
wouldFinishThisAlone.push('Hollow Knight: Silksong');
wouldFinishThisAlone.push('Max Payne');

// COLUMN - MIGHT CONTINUE PLAYING THIS
mightContinuePlayingThis.push('Warframe');
mightContinuePlayingThis.push('Undertale');
mightContinuePlayingThis.push('A Quiet Place');
mightContinuePlayingThis.push('Coffee Talk');
mightContinuePlayingThis.push('Blue Fire');
mightContinuePlayingThis.push('South Park: The Fractured But Whole');
mightContinuePlayingThis.push('The Last Spell');
mightContinuePlayingThis.push('Ultrakill');
mightContinuePlayingThis.push('Mortal Sin');
mightContinuePlayingThis.push('Hades');

// COLUMN - WILL ONLY PLAY THIS WITH A GROUP
willOnlyPlayThisWithAGroup.push('My Little Universe');
willOnlyPlayThisWithAGroup.push('League of Legends');

// COLUMN - WILL NEVER PLAY THIS AGAIN
willNeverPlayThisAgain.push('The Legend of Zelda: Breath of the Wild');
willNeverPlayThisAgain.push('Bloons TD 6');
willNeverPlayThisAgain.push('Minecraft: Dungeons');
willNeverPlayThisAgain.push('The Simpsons: Hit and Run');
willNeverPlayThisAgain.push('Untitled Goose');
willNeverPlayThisAgain.push('Casino Simulator');
willNeverPlayThisAgain.push('Car Mechanic Sim 21');
willNeverPlayThisAgain.push('Grand Theft Auto: Vice City');
willNeverPlayThisAgain.push('Mario + Rabbids: Kingdom Battle');
willNeverPlayThisAgain.push('Stray');
willNeverPlayThisAgain.push('Aladdin');
willNeverPlayThisAgain.push('Crash Bandicoot N. Sane Trilogy');
willNeverPlayThisAgain.push('Tempest');
willNeverPlayThisAgain.push('Bad Cheese');
willNeverPlayThisAgain.push('Black');
willNeverPlayThisAgain.push('Terarria');
willNeverPlayThisAgain.push('Super Mario Galaxy');

// COLUMN - MY TOP PICKS
myTopPicks.push('Hollow Knight');
myTopPicks.push('Cuphead');
myTopPicks.push('The Last of Us Remastered');
myTopPicks.push('The Last of Us II');
myTopPicks.push('Until Dawn');
myTopPicks.push('God of War III');
myTopPicks.push("Astro's Playroom");
myTopPicks.push('Jak 3');
myTopPicks.push('Daxter');
myTopPicks.push('Detroit Become Human');
myTopPicks.push('The First Tree');
myTopPicks.push('Portal');
myTopPicks.push('Portal 2');
myTopPicks.push('Inside');
myTopPicks.push('High on Life');
myTopPicks.push('South Park: The Stick of Truth');

// COLUMN - PRETTY GOOD
prettyGood.push('Rabi Ribi');
prettyGood.push('Uncharted: Golden Abyss');
prettyGood.push('Skate 3');
prettyGood.push('Little Nightmares');
prettyGood.push('Jak and Daxter: The Lost Frontier');
prettyGood.push('Viewfinder');
prettyGood.push('Infamous: Second Son');
prettyGood.push('State of Mind');
prettyGood.push('Buckshot Roulette');
prettyGood.push('Ratchet: Deadlocked');
prettyGood.push('Minecraft');
prettyGood.push('Grand Theft Auto V');
prettyGood.push('Ratchet & Clank: Rift Apart');
prettyGood.push('Ratchet & Clank');
prettyGood.push('Call of Duty: Advanced Warfare');
prettyGood.push('Call of Duty: Ghost');

// COLUMN - WOULDN'T PLAY THIS AGAIN
wouldntPlayThisAgain.push("Assassin's Creed");
wouldntPlayThisAgain.push('Call of Duty: Black Ops: Declassified');
wouldntPlayThisAgain.push('Sonic Forces');
wouldntPlayThisAgain.push('New Super Mario Bros. U.');
wouldntPlayThisAgain.push('Knack');
wouldntPlayThisAgain.push('Pocket Mini Golf');
wouldntPlayThisAgain.push('Goat Simulator');
wouldntPlayThisAgain.push('Ratatouille');
wouldntPlayThisAgain.push('PlayStation All-Stars');
wouldntPlayThisAgain.push('Moto Rush GT');
wouldntPlayThisAgain.push('Uncharted 4');
wouldntPlayThisAgain.push('Nidhogg');
wouldntPlayThisAgain.push('Erica');
wouldntPlayThisAgain.push('Sackboy: A Big Adventure');
wouldntPlayThisAgain.push('Tekken 7');

/// FIRST TABLE /// ---------------- /// ---------------- ///

if (true) {
  // ALL THE INDEXES
  let allTheIndexes = [
    wouldFinishThisAlone.length,
    mightContinuePlayingThis.length,
    willOnlyPlayThisWithAGroup.length,
    willNeverPlayThisAgain.length,
  ];
  let longestIndex = 0;

  // Longest length between all the Arrays
  for (let index = 0; index < allTheIndexes.length; index++) {
    if (allTheIndexes[index] > longestIndex) {
      longestIndex = allTheIndexes[index];
    }
  }

  // Sorting the Arrays
  wouldFinishThisAlone.sort();
  mightContinuePlayingThis.sort();
  willOnlyPlayThisWithAGroup.sort();
  willNeverPlayThisAgain.sort();

  const tableBody = document.getElementById('tableBody');

  // Inserting data into the table
  for (let row = 0; row < longestIndex; row++) {
    let firstColumn = '';
    let secondColumn = '';
    let thirdColumn = '';
    let fourthColumn = '';

    if (wouldFinishThisAlone[row] === undefined) {
      firstColumn = '';
    } else {
      firstColumn = wouldFinishThisAlone[row];
    }

    if (mightContinuePlayingThis[row] === undefined) {
      secondColumn = '';
    } else {
      secondColumn = mightContinuePlayingThis[row];
    }

    if (willOnlyPlayThisWithAGroup[row] === undefined) {
      thirdColumn = '';
    } else {
      thirdColumn = willOnlyPlayThisWithAGroup[row];
    }

    if (willNeverPlayThisAgain[row] === undefined) {
      fourthColumn = ' ';
    } else {
      fourthColumn = willNeverPlayThisAgain[row];
    }

    tableBody.insertAdjacentHTML(
      'beforeend',
      `          
          <tr>
            <td>${firstColumn}</td>
            <td>${secondColumn}</td>
            <td>${thirdColumn}</td>
            <td>${fourthColumn}</td>
          </tr>`
    );
  }
}

/// ---------------- /// ---------------- /// FIRST TABLE ///

/// SECOND TABLE /// ---------------- /// ---------------- ///

if (true) {
  // ALL THE INDEXES
  let allTheIndexes = [
    myTopPicks.length,
    prettyGood.length,
    wouldntPlayThisAgain.length,
  ];
  let longestIndex = 0;

  // Longest length between all the Arrays
  for (let index = 0; index < allTheIndexes.length; index++) {
    if (allTheIndexes[index] > longestIndex) {
      longestIndex = allTheIndexes[index];
    }
  }

  // Sorting the Arrays
  myTopPicks.sort();
  prettyGood.sort();
  wouldntPlayThisAgain.sort();

  const tableBody = document.getElementById('tableBodyFinished');

  // Inserting data into the table
  for (let row = 0; row < longestIndex; row++) {
    let firstColumn = '';
    let secondColumn = '';
    let thirdColumn = '';

    if (myTopPicks[row] === undefined) {
      firstColumn = '';
    } else {
      firstColumn = myTopPicks[row];
    }

    if (prettyGood[row] === undefined) {
      secondColumn = '';
    } else {
      secondColumn = prettyGood[row];
    }

    if (wouldntPlayThisAgain[row] === undefined) {
      thirdColumn = '';
    } else {
      thirdColumn = wouldntPlayThisAgain[row];
    }

    tableBody.insertAdjacentHTML(
      'beforeend',
      `          
          <tr>
            <td>${firstColumn}</td>
            <td>${secondColumn}</td>
            <td>${thirdColumn}</td>
          </tr>`
    );
  }
}

/// ---------------- /// ---------------- /// SECOND TABLE ///
