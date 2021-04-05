//Designer PDF Viewer
function designerPdfViewer(h, word) {

  let u = 97,
      c = [],
      m = 0

  for (let i = word.length; i-- > 0;) {

    let co = word.charCodeAt(i) - u

    if (c.indexOf(co) == -1) {
      c.push(co)

      if (h[co] > m)
        m = h[co]
    }
  }

  return m * word.length
}