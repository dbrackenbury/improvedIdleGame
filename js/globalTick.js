let liveWood = 0;
let liveStone = 0;
let liveCoal = 0;
let liveGold = 0;
let idleWood = 1;
let idleStone = 1;
let idleCoal = 1;
let idleGold = 1;
let fixedWood;
let fixedStone;
let fixedCoal;
let fixedGold;




window.onload = (function() {

    setInterval(function() {
            liveWood += idleWood
            liveStone += idleStone
            liveCoal += idleCoal
            liveGold += idleGold
            liveDisplay('all')
    }, 100)
})

