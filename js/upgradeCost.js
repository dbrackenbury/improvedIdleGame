
function upgradeCostCheck(woodCost, foodCost, stoneCost, coalCost, goldCost, woodInc, foodInc, stoneInc, coalInc, goldInc) {

    if (woodCost > liveWood || stoneCost > liveStone || coalCost > liveCoal || goldCost > liveGold) {
        alert("You do not have enough materials!")
    }
    else {
        liveWood -= woodCost;
        liveFood -= foodCost;
        liveStone -= stoneCost;
        liveCoal -= coalCost;
        liveGold -= goldCost;
        idleInc(woodInc, foodInc, stoneInc, coalInc, goldInc)
    }
}