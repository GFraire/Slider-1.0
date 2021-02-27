let elementCheck = document.querySelector("#check-dark-mode")

elementCheck.addEventListener("click", e => {
  if(elementCheck.checked) {
    addNightMode()
  } 
  else {
    removeNightMode()
  }
})

function addNightMode() {
  getTagElement("header").forEach(elem => elem.classList.add("dark-mode")) 
  getTagElement("a").forEach(elem => elem.classList.add("dark-mode")) 
  getTagElement("p").forEach(elem => elem.classList.add("dark-mode")) 
  getTagElement("body").forEach(elem => elem.classList.add("dark-mode")) 
  getTagElement("h2").forEach(elem => elem.classList.add("dark-mode")) 
  getTagElement("section").forEach(elem => elem.classList.add("dark-mode")) 
}

function removeNightMode() {
  getTagElement("header").forEach(elem => elem.classList.remove("dark-mode")) 
  getTagElement("a").forEach(elem => elem.classList.remove("dark-mode")) 
  getTagElement("p").forEach(elem => elem.classList.remove("dark-mode")) 
  getTagElement("body").forEach(elem => elem.classList.remove("dark-mode")) 
  getTagElement("h2").forEach(elem => elem.classList.remove("dark-mode")) 
  getTagElement("section").forEach(elem => elem.classList.remove("dark-mode")) 
}

function getTagElement(tag) {
  let tagName = document.querySelectorAll(tag)
  return tagName
}