function pigLatin(sentance) {
    const words = sentance.split(' ')
    for(let i in words){
        let wordArray = words[i].split('')
        wordArray += wordArray.shift()
        words[i] = wordArray + 'ay'
        console.log(words[i]);
    }
}
pigLatin("Creative mind")