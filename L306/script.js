let question = prompt('shesayvani studentebis raodenoba');
let i = 0;
let myArray = [];
while (i < question) {
    let words = prompt('sheiyvanet saxeli');
    myArray.push(words);
    i++;
    
}
let newWord = '';
console.log(myArray)
if (question == i) {
    newWord =  prompt('vis edzebt?');
}

let lastArray = []
for (var j = 0; j < myArray.length; j++) {
    if (myArray[j].indexOf(newWord) != -1){
        lastArray.push(myArray[j])
    }
}

