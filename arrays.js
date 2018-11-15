var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return addElementToBeginningOfArray.unshift
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray(element, array)
}
function addElementToEndOfArray(array, element) {
  return addElementToEndOfArray.push
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  return destructivelyAddElementToBeginningOfArray.push
}
