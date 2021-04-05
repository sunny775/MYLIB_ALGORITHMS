//Hash Tables
function checkMagazine(magazine, note) {
  const magazineWords = {};
  for (let i = 0; i < magazine.length; i += 1) {
    if (!magazineWords[magazine[i]]) {
      magazineWords[magazine[i]] = 1;
    } else {
      magazineWords[magazine[i]] += 1;
    }
  }
  for (let i = 0; i < note.length; i += 1) {
    if (!magazineWords[note[i]]) {
      console.log('No');
      return;
    } else {
      magazineWords[note[i]] -= 1;
    }
  }
  console.log('Yes');
}
