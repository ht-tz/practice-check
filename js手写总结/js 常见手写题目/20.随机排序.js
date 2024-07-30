function getRandom(min, max) {
    // max - min+1 [0,max-min+1]
    return Math.floor(Math.random() * [max - min + 1]) + min
}


