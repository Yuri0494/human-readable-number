module.exports = function toReadable (number) {
    let res = ""
  let a = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  let b = [
    '', '', 'twenty', 'thirty', 'forty',
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  let g = [
    '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
    'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'
  ];

  if(number === 0) {
        return "zero"
  }

  if(number < 20) {
        return a[number]
  }

  if(number >= 20 && number < 100) {
        return b[(number - number%10) /10] + " " + a[number%10]
  }

  if(number >= 100 && number < 1000) {
        res = a[(number - number%100) /100] + " hundred ";
        if((number%100) < 20) {
            return res + a[number%100]
        } else {
            return res + b[(number%100 - (number%100)%10) / 10] + " " + a[number%10]
        }
  }   
   
}
