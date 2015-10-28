function nextGreatest(num) {
  // num to string - use numStr for counting in for loops
  var numStr = num.toString();
  // numStr to array - use numArr for splicing
  var numArr = numStr.split('');

  // sorted number for testing
  var sortedNum = numStr.split('').sort();

  if (sortedNum.join("") === numStr) {
    return "No greater number";
  }

  var allCombos = [];

  for (var i=0; i<numStr.length; i++) {
    // take away the current index number
    numArr.splice(i, 1);
    for (var j=0; j<numStr.length; j++) {

      // add the number at the current index i of the numArr to the numArr array at current index j
      numArr.splice(j, 0, numStr[i]);

      // push and join new numArr array to allCombos
      allCombos.push(numArr.join(""));

      // take away the current index number added to numArr
      numArr.splice(j, 1);
    }
    // reset numArr to it's original form
    numStr = num.toString();
    numArr = numStr.split('');
  }
  // console.log(allCombos);

  // sort all combos
  var sortedCombos = allCombos.sort();

  // return if number is greater then num
  for (var k=0; k<allCombos.length; k++) {
    if (sortedCombos[k] > num) {
      return parseInt(sortedCombos[k]);
    }
  }
  
}

module.exports = {
  nextGreatest: nextGreatest
};
