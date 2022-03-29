woodDisplay = document.getElementById('wood-display')
stoneDisplay = document.getElementById('stone-display')
coalDisplay = document.getElementById('coal-display')
goldDisplay = document.getElementById('gold-display')
idleWoodDisplay = document.getElementById('wood-passive-label')
idleStoneDisplay = document.getElementById('stone-passive-label')
idleCoalDisplay = document.getElementById('coal-passive-label')
idleGoldDisplay = document.getElementById('gold-passive-label')

function liveDisplay(display) {

    switch(display) {
        case "wood":
            woodDisplay.innerHTML = liveWood.toString();
            break;

        case "stone":
            stoneDisplay.innerHTML = liveStone.toString();
            break;

        case "coal":
            coalDisplay.innerHTML = liveCoal.toString();
            break;

        case "gold":
            goldDisplay.innerHTML = liveGold.toString();
            break;

        case "all":
            woodDisplay.innerHTML = liveWood.toString();
            idleWoodDisplay.innerHTML = idleWood.toString();
            stoneDisplay.innerHTML = liveStone.toString();
            idleStoneDisplay.innerHTML = idleStone.toString();
            coalDisplay.innerHTML = liveCoal.toString();
            idleCoalDisplay.innerHTML = idleCoal.toString();
            goldDisplay.innerHTML = liveGold.toString();
            idleGoldDisplay.innerHTML = idleGold.toString();
            break;

        default:
            alert("Something went wrong :(")
    }
}