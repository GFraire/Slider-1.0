let imgs = [
  "./images/Manarola.png",
  "./images/mount-fuji.jpg",
  "./images/seigantoji-pagoda.jpeg",
  "./images/shutterstock.jpg",
  "./images/Taj-mahal.jpg",
  "./images/waterfalls.jpg"
]

function prevImage(index) {
  let prevtIndex = index - 1 
  let innerHTML = `<img src="${imgs[prevtIndex]}">`
  return innerHTML
}

function nextImage(index) {
  let nextIndex = index + 1 
  let innerHTML = `<img src="${imgs[nextIndex]}">`
  return innerHTML
}

//Recebe o valor atual no Obj imgs
function getElementAtual() {
  let valueAtual = elemPhoto.innerHTML.split('"')[1]
  return valueAtual
}

let elemPhoto = document.querySelector(".photo-slider")

elemPhoto.innerHTML = `<img src="${imgs[0]}">`

let prev = document.querySelector("#prev-image")
let next = document.querySelector("#next-image")

prev.addEventListener("click", e => {
  if(imgs.indexOf(getElementAtual()) == 0) {
    elemPhoto.innerHTML = `<img src="${imgs[5]}">`
  }
  else {
    elemPhoto.innerHTML = prevImage(imgs.indexOf(getElementAtual()))
  }
})

next.addEventListener("click", e => {
  if(imgs.indexOf(getElementAtual()) == imgs.length - 1) {
    elemPhoto.innerHTML = `<img src="${imgs[0]}">`
  }
  else {
    elemPhoto.innerHTML = nextImage(imgs.indexOf(getElementAtual()))
  }
})