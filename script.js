'use strict';

// Array Declaration
let wouldFinishThisAlone = new Array();
let mightContinuePlayingThis = new Array();
let willOnlyPlayThisWithAGroup = new Array();
let willNeverPlayThisAgain = new Array();

// COLUMN - WOULD FINISH THIS ALONE
wouldFinishThisAlone.push('The Midnight Walk');
wouldFinishThisAlone.push('BioShock 1 Remastered');

// COLUMN - MIGHT CONTINUE PLAYING THIS
mightContinuePlayingThis.push('Warframe');
mightContinuePlayingThis.push('Undertale');
mightContinuePlayingThis.push('A Quiet Place');
mightContinuePlayingThis.push('Coffee Talk');
mightContinuePlayingThis.push('Blue Fire');
mightContinuePlayingThis.push('South Park: The Fractured But Whole');
mightContinuePlayingThis.push('The Last Spell');

// COLUMN - WILL ONLY PLAY THIS WITH A GROUP
willOnlyPlayThisWithAGroup.push('My Little Universe');

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
