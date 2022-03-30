

function clickInc(buttonId) {
    switch(buttonId) {
        case "woodButton":
            liveWood++;
            liveDisplay('wood')
            break;

        case "foodButton":
            liveFood++;
            liveDisplay('food')
            break;

        case "stoneButton":
            liveStone++;
            liveDisplay('stone')
            break;

        case "coalButton":
            liveCoal++;
            liveDisplay('coal')
            break;

        case "goldButton":
            liveGold++;
            liveDisplay('gold')
            break;

        default:
            alert("Something went wrong :(")
    }
}

