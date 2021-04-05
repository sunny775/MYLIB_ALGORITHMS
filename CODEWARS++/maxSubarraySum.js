/*The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
Okay! So we want to find a subarray such that when we add up its elements, it will be the largest of any other sum of any other subarray 
*/
/*Kadane's Algorithm*/
var maxSequence = function(arr){
  let currentSum=0;
  let maxSum=0;
  
  for(i=0;i<arr.length;i++){
  	var currentNum=arr[i];
  	currentSum= Math.max((currentSum+currentNum),0);
  	maxSum=Math.max(currentSum,maxSum);
  }
  return maxSum;
}