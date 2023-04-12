function milesTravelled(timeInMinutes, speed) {
    const timeInHours = timeInMinutes/60
    return Math.round(timeInHours * speed)
}