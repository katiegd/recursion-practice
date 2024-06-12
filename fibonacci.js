// iterative version of fib function

function fibs(num) {
  let array = [0, 1];
  for (let i = 2; i < num; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array.slice(0, num);
}

console.log(fibs(8));

// recursive version of fib function
function fibsRecursive(num) {
  if (num === 0) return [];
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  let array = fibsRecursive(num - 1);
  let nextFib = array[array.length - 1] + array[array.length - 2];
  array.push(nextFib);
  return array;
}

console.log(fibsRecursive(8));
