/*You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number) 
Outlier means a person or thing differing from all members of a particular group*/
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
//================================================
function findOutlier(integers){
   var evens = [];
   var odds = [];
   for (var i = 0; i < integers.length; i++) 
   {
       if ((integers[i] % 2) == 0) 
       {
           evens.push(integers[i]);
       } 
       else 
       {
           odds.push(integers[i]);
       }
   }
   var elen = evens.length;
   var olen = odds.length;

   if (elen > olen)
   {
       return odds[0];
   } 
   else 
   {
       return evens[0];
   }