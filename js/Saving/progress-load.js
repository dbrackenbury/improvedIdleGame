
function loadProgress() {
    if (localStorage.getItem('wood') === null) {
        /* CURRENT COUNTS */
        LIVE_WOOD = 0;
        LIVE_FOOD = 0;
        LIVE_STONE = 0;
        LIVE_COAL = 0;
        LIVE_GOLD = 0;

        /* IDLE TICK PER SECOND*/
        IDLE_WOOD = 0;
        IDLE_FOOD = 0;
        IDLE_STONE = 0;
        IDLE_COAL = 0;
        IDLE_GOLD = 0;

        /* POPULATION */
        LIVE_POPULATION = 0;
        POPULATION_CAP = 9;
        location.reload()
    } else {
        LIVE_WOOD = parseInt(localStorage.getItem('wood'))
        IDLE_WOOD = parseInt(localStorage.getItem('idleWood'))

        LIVE_FOOD = parseInt(localStorage.getItem('food'))
        IDLE_FOOD = parseInt(localStorage.getItem('idleFood'))

        LIVE_STONE = parseInt(localStorage.getItem('stone'))
        IDLE_STONE = parseInt(localStorage.getItem('idleStone'))

        LIVE_COAL = parseInt(localStorage.getItem('coal'))
        IDLE_COAL = parseInt(localStorage.getItem('idleCoal'))

        LIVE_GOLD = parseInt(localStorage.getItem('gold'))
        IDLE_GOLD = parseInt(localStorage.getItem('idleGold'))

        LIVE_POPULATION = parseInt(localStorage.getItem('population'))
        POPULATION_CAP = parseInt(localStorage.getItem('populationCap'))
    }
}