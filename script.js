'use strict';

let wouldFinishThisAlone = new Array();
let mightContinuePlayingThis = new Array();
let willOnlyPlayThisWithAGroup = new Array();
let willNeverPlayThisAgain = new Array();

wouldFinishThisAlone.push('The Midnight Walk');
wouldFinishThisAlone.push('BioShock 1 Remastered');

mightContinuePlayingThis.push('Warframe');
mightContinuePlayingThis.push('Undertale');
mightContinuePlayingThis.push('A Quiet Place');
mightContinuePlayingThis.push('Coffee Talk');
mightContinuePlayingThis.push('Blue Fire');
mightContinuePlayingThis.push('South Park: The Fractured But Whole');
mightContinuePlayingThis.push('The Last Spell');

willOnlyPlayThisWithAGroup.push('My Little Universe');

willNeverPlayThisAgain.push('The Legend of Zelda: Breath of the Wild');
willNeverPlayThisAgain.push('Bloons TD 6');
willNeverPlayThisAgain.push('Minecraft: Dungeons');
willNeverPlayThisAgain.push('The Simpsons: Hit and Run');
willNeverPlayThisAgain.push('Untitled Goose');
willNeverPlayThisAgain.push('Casino Simulator');
willNeverPlayThisAgain.push('Car Mechanic Sim 21');
willNeverPlayThisAgain.push('Grand Theft Auto: Vice City');
willNeverPlayThisAgain.push('Mario + Rabbids: Kingdom Battle');

let allTheIndexes = [
  wouldFinishThisAlone.length,
  mightContinuePlayingThis.length,
  willOnlyPlayThisWithAGroup.length,
  willNeverPlayThisAgain.length,
];
let longestIndex = 0;

for (let index = 0; index < allTheIndexes.length; index++) {
  if (allTheIndexes[index] > longestIndex) {
    longestIndex = allTheIndexes[index];
  }
}

// console.log(wouldFinishThisAlone);
// console.log(mightContinuePlayingThis);
// console.log(willOnlyPlayThisWithAGroup);
// console.log(willNeverPlayThisAgain);
// console.log(longestIndex);
