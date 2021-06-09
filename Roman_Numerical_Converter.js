/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
How to Convert to Roman Numerals
Break the number into Thousands, Hundreds, Tens and Ones, and write down each in turn.



Forming Numbers - The Rules
When a symbol appears after a larger (or equal) symbol it is added

Example: VI = V + I = 5 + 1 = 6
Example: LXX = L + X + X = 50 + 10 + 10 = 70
But if the symbol appears before a larger symbol it is subtracted

Example: IV = V − I = 5 − 1 = 4
Example: IX = X − I = 10 − 1 = 9

Example: Convert 1984 to Roman Numerals.
roman 1984
Break 1984 into 1000, 900, 80 and 4, then do each conversion

1000 = M
900 = CM
80 = LXXX
4 = IV
1000 + 900 + 80 + 4 = 1984, so 1984 = MCMLXXXIV

*/



function convertToRoman(num) {
    let result= "";
    const arr1 = {M:1000,CM:900, D:500,CD:400, C:100, XC:90,L:50, XL: 40, X:10, IX:9, V:5, IV:4, I:1};
    let i;
  if ( num < 1 || num >3999){
    return undefined}
    else {
      for( let k in arr1){
      i = Math.floor(num /arr1[k]);
      if(i >= 0){
        for ( let j=0; j<i; j++){
          result +=k;
        }
      }
      num = num % arr1[k];
    }
    }
  return result
  }
  
  console.log(convertToRoman(83));