
function saveProgress() {
    localStorage.setItem('wood', LIVE_WOOD.toString());
    localStorage.setItem('idleWood', IDLE_WOOD.toString());

    localStorage.setItem('food', LIVE_FOOD.toString());
    localStorage.setItem('idleFood', IDLE_FOOD.toString());

    localStorage.setItem('stone', LIVE_STONE.toString());
    localStorage.setItem('idleStone', IDLE_STONE.toString());

    localStorage.setItem('coal', LIVE_COAL.toString());
    localStorage.setItem('idleCoal', IDLE_COAL.toString());

    localStorage.setItem('gold', LIVE_GOLD.toString());
    localStorage.setItem('idleGold', IDLE_GOLD.toString());

    localStorage.setItem('population', LIVE_POPULATION.toString());
    localStorage.setItem('populationCap', POPULATION_CAP.toString());
    location.reload()
}