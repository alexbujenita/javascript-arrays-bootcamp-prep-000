var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return  [element, ...array];

}

function destructivelyAddElementToBeginningOfArray(a, e) {
  return a.unshift(e);
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, i) {
  return array[i];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(a) {
  return a.pop();
}

function removeElementFromEndOfArray(a) {
a.slice(0, a.length - 1);
  return a;
}
