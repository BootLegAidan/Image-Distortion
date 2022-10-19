let imgC = document.getElementById('imgConvert')
let imgCtx = imgC.getContext('2d')
let img = document.getElementsByTagName('img')[0]

img.src = './images/dwai.webp'


img.onload = () => {
  let imgRes = lineNum - 2
  imgC.width = imgRes
  imgC.height = imgRes
  imgCtx.drawImage(img,0,0,imgRes,imgRes)
  for (let i = 0; i < imgRes; i++) {
    for (let j = 0; j < imgRes; j++) {
      imgPixels.push({x:i+1,y:j+1,color:getColor(i,j)})
    }
  }
}



function getColor(x,y){
let data = imgCtx.getImageData(x, y, 1, 1).data
let color = [
  [data[0], data[1], data[2], data[3]],
  `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`,
  Math.round((data[0] + data[1] + data[2]) / 3),
  `rgba(${(Math.round((data[0] + data[1] + data[2]) / 3) + ',').repeat(3)}255)`
  ]
  let hexColor = `rgb(${data[0].toString(10)},${data[1].toString(10)},${data[2].toString(10)})`
  console.log(hexColor)
  return hexColor
}
