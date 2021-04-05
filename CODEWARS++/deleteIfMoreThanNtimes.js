/*
Delete occurrences of an element if it occurs more than n times in an array

Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering. For example if N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].

deleteNth ([1,1,1,1],2) // return [1,1]s
  deleteNth ([20,37,20,21],1) // return [20,37,21]
*/
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
//=================================================
unction deleteNth(arr,n){
    if (!arr) { return null; }
    if (n < 1) { return []; }
    
    var result = [];
    var itemCounts = {};
    for (var index = 0; index < arr.length; index++){
        var item = arr[index];
        var count = itemCounts[item] || 0;
        if (count < n) {
            result.push(item);
            itemCounts[item] = count + 1;
        }
    }
    
    return result;
}