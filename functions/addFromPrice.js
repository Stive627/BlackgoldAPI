function addFromPrice(){
    let goodrandomNumber
    while(goodrandomNumber % 5 !== 0){
        const firstRandom = Math.random()*40 + 10
        goodrandomNumber = Math.floor(firstRandom)
    }
    return goodrandomNumber*10
}
module.exports = addFromPrice