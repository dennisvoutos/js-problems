function  repeat(word) {
    const arrWord = word.split('')
    const retVal =[]
    for(let i=0;i<arrWord.length;i++){
        retVal.push(arrWord[i])
        retVal.push(arrWord[i])
    }
    return (retVal.toString())
}
console.log(repeat("Hola Amor"));