let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("where");
console.log(index);

// match()
let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match("ain"));
console.log(text1.match(/ain/g));
console.log(text1.match(/ain/gi));
