
window.onload = (function() {

    setInterval(function() {
            LIVE_WOOD += IDLE_WOOD
            LIVE_FOOD += IDLE_FOOD
            LIVE_STONE += IDLE_STONE
            LIVE_COAL += IDLE_COAL
            LIVE_GOLD += IDLE_GOLD
            LIVE_POPULATION = (IDLE_WOOD + IDLE_FOOD + IDLE_STONE + IDLE_COAL + IDLE_GOLD)
            liveDisplay('all')
    }, 1000)
})

