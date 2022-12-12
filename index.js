// Code your solution in this file!
function distanceFromHqInBlocks(pickupBlock) {
//     if (pickupBlock >= 42 ) {
//         return pickupBlock - 42
// }   else {
//         return 42 - pickupBlock
// }
    return Math.abs(pickupBlock - 42)
}

function distanceFromHqInFeet(start) {
//     return Math.abs((start - 42)*264)
// 
    return distanceFromHqInBlocks(start) * 264
}   

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264)
}

function calculatesFarePrice(start,destination) {
    const totalDistance = distanceTravelledInFeet(start,destination)
    if (totalDistance <= 400) {
        return 0
    }
    else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * .02
    } 
    else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far' }
}
