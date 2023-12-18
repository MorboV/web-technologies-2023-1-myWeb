console.log('Задание1')

function pickPropArray(odjarray, prop) {
    return odjarray.reduce((x, obj) => {
     
      if (obj.hasOwnProperty(prop)) {
        x.push(obj[prop]);
      }
      return x;
    }, []);
  }
  
  const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 }, 
  ];
  
  const result = pickPropArray(students, 'name');
  console.log(result); 
  console.log(' ')


  console.log('Задание 2')

  function createCounter() {
    let count = 0; 
  
    return function () {
      count += 1;
      console.log(count);
    }
  }
  
  const counter1 = createCounter();
  counter1(); 
  counter1(); 
  
  const counter2 = createCounter();
  counter2(); 
  counter2(); 
  console.log(' ')

  console.log('Задание 3')

  function spinWords(words) {
    return words.split(' ').map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    }).join(' ');
  }
  
  const result1 = spinWords("Привет от Legacy");
  console.log(result1); 
  
  const result2 = spinWords("This is a test");
  console.log(result2); 
  console.log(' ')

  console.log('Задание 4')

  function twoSum(nums, target) {
    const numInd = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      let compl = target - nums[i];
  
      if (numInd.has(compl)) {
        return [numInd.get(compl), i];
      }
  
      numInd.set(nums[i], i);
    }
  }
  
  // Test case
  const nums = [2, 7, 11, 15];
  const target = 9;
  const x = twoSum(nums, target);
  console.log(x); 
  console.log(' ')

  console.log('Задание5')

  function findLongestRow(strs) {
    if (strs.length === 0) return "";

    let longestRow = "";
    const x = strs[0];
    for (let i = 0; i < x.length; i++) {
        for (let j = i + 2; j <= x.length; j++) {
            let a = x.substring(i, j);
            let b = strs.every(str => str.includes(a));
            if (b && a.length > longestRow.length) {
                longestRow = a;
            }
        }
    }
    return longestRow;
  }

// Test Cases
const test1 = ["цветок", "поток", "хлопок"];
const test2 = ["собака", "гоночная машина", "машина"];

console.log('Test 1:', findLongestRow(test1)); 
console.log('Test 2:', findLongestRow(test2));
