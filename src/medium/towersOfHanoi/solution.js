function towersOfHanoi(numofDiscs) {
    const res = (Math.pow(2,numofDiscs) -1) 
    console.log("A towers of hanoi game with "+ numofDiscs +" discs needs a minimum of "+ res + " moves to complete");
}
towersOfHanoi(10)