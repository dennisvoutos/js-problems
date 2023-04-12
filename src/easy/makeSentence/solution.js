function makeSentence(sentence) {
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1) // capitalize the first letter
    if(sentence.charAt(sentence.length-1) !== '!'|| sentence.charAt(sentence.length-1) !== '.'){
        sentence += '.'
    }
    
    return(sentence)
}
console.log(makeSentence("my name is Dennis"))
