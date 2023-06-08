const fiveNumbers = array => {
  const randomNumber = Math.floor(Math.random() * array.length);
  console.log(randomNumber);
};
fiveNumbers([1, 2, 3, 4, 5]);

const sumAverageMinor = array => {
  const sum = array[0] + array[1] + array[2];
  const average = sum / 3;
  const minor = Math.min(array[0], array[1], array[2]);
  console.log(
    `La suma de los números es: ${sum}, el promedio es: ${average} y el minimo es: ${minor}`
  );
};
sumAverageMinor([1, 2, 3]);

const arrayInlcudesNumber = array => {
  const randonNumber = Math.floor(Math.random() * 11);
  if (array.includes(randonNumber)) {
    console.log(
      `El número ${randonNumber} se encuentra en la lista y está en la posición ${array.indexOf(
        randonNumber
      )}`
    );
  } else console.log(`El número ${randonNumber} no se encuentra en la lista`);
};

arrayInlcudesNumber([1, 2, 3, 4, 5]);

const multiplyArray = number => {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  return number * randomNumber;
};

const evenOdd = array => {
  const even = [];
  const odd = [];

  if (multiplyArray(array[0]) % 2 === 0) {
    even.push(array[0]);
  } else {
    odd.push(array[0]);
  }
  if (multiplyArray(array[1]) % 2 === 0) {
    even.push(array[1]);
  } else {
    odd.push(array[1]);
  }
  if (multiplyArray(array[2]) % 2 === 0) {
    even.push(array[2]);
  } else {
    odd.push(array[2]);
  }
  if (multiplyArray(array[3]) % 2 === 0) {
    even.push(array[3]);
  } else {
    odd.push(array[3]);
  }
  if (multiplyArray(array[4]) % 2 === 0) {
    even.push(array[4]);
  } else {
    odd.push(array[4]);
  }

  console.log(
    `Array de Pares: ${even}. Arrays de Impares: ${odd}. Array usuario: ${array}`
  );
};

evenOdd([1, 2, 3, 4, 5]);

const dniLetter = dni => {
  const letters = [
    'T',
    'R',
    'W',
    'A',
    'G',
    'M',
    'Y',
    'F',
    'P',
    'D',
    'X',
    'B',
    'N',
    'J',
    'Z',
    'S',
    'Q',
    'V',
    'H',
    'L',
    'C',
    'K',
    'E'
  ];
  const letter = letters[dni % 23];
  console.log(`${dni}${letter}`);
};
dniLetter(70266293);

const firstLetterLastLetterUppercase = array => {
  const firstLastLetters = [];
  firstLastLetters.push(array[0].charAt(0).toUpperCase());
  firstLastLetters.push(array[0].charAt(array[0].length - 1).toUpperCase());
  firstLastLetters.push(array[1].charAt(0).toUpperCase());
  firstLastLetters.push(array[1].charAt(array[1].length - 1).toUpperCase());
  firstLastLetters.push(array[2].charAt(0).toUpperCase());
  firstLastLetters.push(array[2].charAt(array[2].length - 1).toUpperCase());
  console.log(firstLastLetters);
};
firstLetterLastLetterUppercase(['hola', 'mundo', 'sheila']);
