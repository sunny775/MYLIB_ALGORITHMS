//Fraudulent Activity Notification
function activityNotifications(expenditure, d) {
  let notification = 0;
  const length = expenditure.length;
  const largestAmount = 200;
  const amountCounts = Array(largestAmount + 1).fill(0);
  const medianIndex = parseInt(d / 2);
  for (let i = 0; i < d; i += 1) {
    amountCounts[expenditure[i]] += 1;
  }
  for (let i = d; i < length; i += 1) {
    let leftCount = 0;
    let leftIndex;
    let rightCount = 0;
    let rightIndex;
    for (let j = 0; j < largestAmount + 1; j += 1) {
      if (amountCounts[j] > 0) {
        leftCount += amountCounts[j];
      }
      if (leftCount > medianIndex) {
        leftIndex = j;
        break;
      }
    }
    for (let j = largestAmount; j >= 0; j -= 1) {
      if (amountCounts[j] > 0) {
        rightCount += amountCounts[j];
      }
      if (rightCount > medianIndex) {
        rightIndex = j;
        break;
      }
    }
    if (expenditure[i] >= leftIndex + rightIndex) {
      notification += 1;
    }
    amountCounts[expenditure[i - d]] -= 1;
    amountCounts[expenditure[i]] += 1;
  }
  return notification;
}