//Library Fine
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2)
    return 10000
  else if (y2 > y1)
    return 0
  else if (m1 > m2)
    return 500 * ((m1 - m2) + ((y1 - y2) * 12))
  else if (m2 > m1)
    return 0
  else if (d1 > d2)
    return 15 * (d1 - d2)
  else
    return 0
}