function insertWord(sentence, word, position) {
    var splitter = " ";
    var arr = sentence.split(splitter);
    var res = [];
    for(var i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        if (i === position) {
            res.push(word);
        }
    }
    return res.join(splitter);
}

console.log(insertWord('I am cool', 'very', 1));
console.log(insertWord('Anabolick kochka', "super", 0));