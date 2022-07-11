

let Wood_Cutter = {woodCost: 0, foodCost: 5, stoneCost: 0, coalCost: 0, goldCost: 5}
let Chef = {woodCost: 0, foodCost: 5, stoneCost: 0, coalCost: 0, goldCost: 5}
let Stone_Miner = {woodCost: 0, foodCost: 5, stoneCost: 0, coalCost: 0, goldCost: 5}
let Coal_Miner = {woodCost: 0, foodCost: 5, stoneCost: 0, coalCost: 0, goldCost: 5}
let Gold_Miner = {woodCost: 0, foodCost: 5, stoneCost: 0, coalCost: 0, goldCost: 5}
let House = {woodCost: 100, stoneCost: 50}



function materialCostCheck(button) {

    switch(button) {
        case "wood-idle":
            if (Wood_Cutter.woodCost > LIVE_WOOD || Wood_Cutter.foodCost > LIVE_FOOD || Wood_Cutter.stoneCost >
                LIVE_STONE || Wood_Cutter.coalCost > LIVE_COAL || Wood_Cutter.goldCost > LIVE_GOLD)
            {
                alert("You don't have enough materials :(")
            }
            else if (LIVE_POPULATION === POPULATION_CAP) {
                alert("Build more houses!")
            }
            else {
                materialSpend(Wood_Cutter.woodCost, Wood_Cutter.foodCost, Wood_Cutter.stoneCost,
                    Wood_Cutter.coalCost, Wood_Cutter.goldCost)
                idleTickUpgrade(1,0,0,0,0)
            }
            break;

        case "food-idle":
            if (Chef.woodCost > LIVE_WOOD || Chef.foodCost > LIVE_FOOD || Chef.stoneCost > LIVE_STONE ||
            Chef.coalCost > LIVE_COAL || Chef.goldCost > LIVE_GOLD)
            {
                alert("You don't have enough materials :(")
            }
            else if (LIVE_POPULATION === POPULATION_CAP) {
                alert("Build more houses!")
            }
            else {
                materialSpend(Chef.woodCost, Chef.foodCost, Chef.stoneCost,
                    Chef.coalCost, Chef.goldCost)
                idleTickUpgrade(0,1,0,0,0)
            }
            break;

        case "stone-idle":
            if (Stone_Miner.woodCost > LIVE_WOOD || Stone_Miner.foodCost > LIVE_FOOD ||
                Stone_Miner.stoneCost > LIVE_STONE || Stone_Miner.coalCost > LIVE_COAL ||
                Stone_Miner.goldCost > LIVE_GOLD)
            {
                alert("You don't have enough materials :(")
            }
            else if (LIVE_POPULATION === POPULATION_CAP) {
                alert("Build more houses!")
            }
            else {
                materialSpend(Stone_Miner.woodCost, Stone_Miner.foodCost, Stone_Miner.stoneCost,
                    Stone_Miner.coalCost, Stone_Miner.goldCost)
                idleTickUpgrade(0,0,1,0,0)
            }
            break;

        case "coal-idle":
            if (Coal_Miner.woodCost > LIVE_WOOD || Coal_Miner.foodCost > LIVE_FOOD || Coal_Miner.stoneCost > LIVE_STONE ||
                Coal_Miner.coalCost > LIVE_COAL || Coal_Miner.goldCost > LIVE_GOLD)
            {
                alert("You don't have enough materials :(")
            }
            else if (LIVE_POPULATION === POPULATION_CAP) {
                alert("Build more houses!")
            }
            else {
                materialSpend(Coal_Miner.woodCost, Coal_Miner.foodCost, Coal_Miner.stoneCost,
                    Coal_Miner.coalCost, Coal_Miner.goldCost)
                idleTickUpgrade(0,0,0,1,0)
            }
            break;

        case "gold-idle":
            if (Gold_Miner.woodCost > LIVE_WOOD || Gold_Miner.foodCost > LIVE_FOOD || Gold_Miner.stoneCost > LIVE_STONE ||
                Gold_Miner.coalCost > LIVE_COAL || Gold_Miner.goldCost > LIVE_GOLD)
            {
                alert("You don't have enough materials :(")
            }
            else if (LIVE_POPULATION === POPULATION_CAP) {
                alert("Build more houses!")
            }
            else {
                materialSpend(Gold_Miner.woodCost, Gold_Miner.foodCost, Gold_Miner.stoneCost,
                    Gold_Miner.coalCost, Gold_Miner.goldCost)
                idleTickUpgrade(0,0,0,0,1)
            }
            break;

        case "population-house":
            if (House.woodCost > LIVE_WOOD || House.stoneCost > LIVE_STONE)
            {
                alert("You don't have enough materials :(")
            } else {
                materialSpend(House.woodCost, 0, House.stoneCost, 0, 0)
                populationUpgrade(1)
            }


    }
}