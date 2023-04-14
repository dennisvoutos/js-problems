const latinToArabic = {
    I:1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D:500,
    m: 1000
}

function romanNumerals(roman) {
    let arabicNumeral =0
    for(let i=0;i<roman.length ;i++){
        
        const currentRoman = latinToArabic[roman[i]]
        const nextRoman = latinToArabic[roman[i+1]]
        if(currentRoman < nextRoman){
            arabicNumeral -=currentRoman
        } else {
            arabicNumeral += currentRoman
        }
    }
    return arabicNumeral
}
console.log(romanNumerals('XXVII'));