/*A digital root is the recursive sum of all the digits
 in a number. Given n, take the sum of the digits of n. 
 If that value has more than one digit, continue reducing
  in this way until a single-digit number is produced. 
  This is only applicable to the natural numbers.*/

function digital_root(n) {
  return (n - 1) % 9 + 1;
}
//==================================================
function digital_root(n) {
    if (n < 10){
    return n;

    }else{
        n.toString().split("").forEach( function(value){
            var iValue = parseInt(value);
            return total += iValue;
        });
        return digital_root(total);
    }
 }
//=================================================
function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}