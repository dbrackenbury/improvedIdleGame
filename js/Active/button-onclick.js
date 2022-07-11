
function clickInc(buttonId) {
    switch(buttonId) {
        case "woodButton":
            LIVE_WOOD++;
            liveDisplay('wood')
            break;

        case "foodButton":
            LIVE_FOOD++;
            liveDisplay('food')
            break;

        case "stoneButton":
            LIVE_STONE++;
            liveDisplay('stone')
            break;

        case "coalButton":
            LIVE_COAL++;
            liveDisplay('coal')
            break;

        case "goldButton":
            LIVE_GOLD++;
            liveDisplay('gold')
            break;

        case "popButton":
            POPULATION_CAP += 9;
            liveDisplay('pop_cap')
            break;

        default:
            alert("Something went wrong :(")
    }
}

