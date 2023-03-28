function convertToKhmerNumber(number) {
  const khmerNums = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"];
  let result = "";
  const numString = number.toString();
  for (let i = 0; i < numString.length; i++) {
    //digit store the value of input number for ex: 123
    //parseInt(numString.charAt(0)) = 1, => digit=1
    //parseInt(numString.charAt(1)) = 2, => digit=2
    //parseInt(numString.charAt(2)) = 3, => digit=3
    const digit = parseInt(numString.charAt(i));
    result += khmerNums[digit];
  }
  return result;
}

//in nodejs every file need to be export in order to allow the other file to use it
export { convertToKhmerNumber };