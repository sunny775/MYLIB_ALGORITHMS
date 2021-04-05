//The Hurdle Race
function hurdleRace(k, height) {
  return Math.max(Math.max(...height) - k, 0)
}