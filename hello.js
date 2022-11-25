var examNumbers = [70, 80, 81, 95, 100];
var position = examNumbers.indexOf(50);
console.log(position);

examNumbers[4] = 93;
console.log(examNumbers);

examNumbers.push(909);
console.log(examNumbers);

console.log(examNumbers.length);

examNumbers.shift();
console.log(examNumbers);

examNumbers.unshift(210);
console.log(examNumbers);

examNumbers.delete(3);
console.log(examNumbers);

