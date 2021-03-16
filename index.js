function distanceFromHqInBlocks(distance){
    let hq = 42
    if (distance > hq) {
        return distance - hq
    } else if (distance < hq) {
        return hq - distance
    }
}

distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(distance){
    let hq = 42
    if (distance > hq) {
        return (distance - hq) * 264
    } else if (distance < hq) {
        return (hq - distance) * 264
    }
}

distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(block1, block2){
    if (block1 > block2){
        return (block1 - block2) * 264 
    } else if (block1 < block2){
        return (block2 - block1) * 264
    }
}

distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)
debugger;

function calculatesFarePrice(start, destination){
    if ((destination - start) * 264 >= 2000 && (start - destination)*264 < 2500){
        return 25
    } else if ((start - destination) * 264 < 400) {
        return 0
    } else if ((start - destination) * 264 > 400 && (start - destination)*264 < 2000){
        return ((start - destination) * 264 - 400) * .02
    } else if ((start - destination)* 264 >= 2500){
        return 'cannot travel that far'
    }
}

calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)