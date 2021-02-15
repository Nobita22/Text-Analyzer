let charCount = document.getElementById("char"),
    wordCount = document.getElementById("word"),
    sentence = document.getElementById("sentence"),
    spaces = document.getElementById("spaces"),
    punctuation = document.getElementById("punctuation");

const textArea = document.querySelector(".text-entry textarea"),
    processBtn = document.getElementById("process-btn");

let UIValues = [charCount,
    wordCount,
    sentence,
    spaces,
    punctuation
];

function init() {
    UIValues.forEach(value => value.innerHTML = '0');

}

processBtn.addEventListener("click", () => {
    let text = textArea.value;
    charCount.innerHTML = text.length;
    wordCount.innerHTML = findWord(text);
});

function findWord(text) {
    let tempText = text.replace(/[.,!%&*;:'"-()]/g, "");
    tempText = tempText.replace(/[\r]/g, "").split(/\n/);

    let tempList = [];
    tempText.forEach(word => tempList.push(word.split(" ")));
    console.log(tempList);

}
