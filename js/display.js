woodDisplay = document.getElementById('wood-display')
foodDisplay = document.getElementById('food-display')
stoneDisplay = document.getElementById('stone-display')
coalDisplay = document.getElementById('coal-display')
goldDisplay = document.getElementById('gold-display')
idleWoodDisplay = document.getElementById('wood-passive-label')
idleFoodDisplay = document.getElementById('food-passive-label')
idleStoneDisplay = document.getElementById('stone-passive-label')
idleCoalDisplay = document.getElementById('coal-passive-label')
idleGoldDisplay = document.getElementById('gold-passive-label')
populationDisplay = document.getElementById('population-label')
populationCapDisplay = document.getElementById('population-cap-label')

function liveDisplay(display) {

    switch(display) {
        case "wood":
            woodDisplay.innerHTML = LIVE_WOOD.toString();
            break;

        case "food":
            foodDisplay.innerHTML = LIVE_FOOD.toString();
            break;

        case "stone":
            stoneDisplay.innerHTML = LIVE_STONE.toString();
            break;

        case "coal":
            coalDisplay.innerHTML = LIVE_COAL.toString();
            break;

        case "gold":
            goldDisplay.innerHTML = LIVE_GOLD.toString();
            break;

        case "all":
            woodDisplay.innerHTML = LIVE_WOOD.toString();
            idleWoodDisplay.innerHTML = IDLE_WOOD.toString();
            foodDisplay.innerHTML = LIVE_FOOD.toString();
            idleFoodDisplay.innerHTML = IDLE_FOOD.toString();
            stoneDisplay.innerHTML = LIVE_STONE.toString();
            idleStoneDisplay.innerHTML = IDLE_STONE.toString();
            coalDisplay.innerHTML = LIVE_COAL.toString();
            idleCoalDisplay.innerHTML = IDLE_COAL.toString();
            goldDisplay.innerHTML = LIVE_GOLD.toString();
            idleGoldDisplay.innerHTML = IDLE_GOLD.toString();
            populationDisplay.innerHTML = LIVE_POPULATION.toString();
            populationCapDisplay.innerHTML = POPULATION_CAP.toString();
            break;

        default:
            alert("Something went wrong :(");
    }
}