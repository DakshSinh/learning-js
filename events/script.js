// document.getElementById('img1').onclick = () => {
//   alert("Hi")
// }

// Best approach

// document.getElementById('images').addEventListener('click', (e) => {
//   console.log('Best approach')
// }, false) // default false event bubbling

// document.getElementById('img3').addEventListener('click', (e) => {
//   console.log('Image 3 clicked')
//   e.stopPropagation()
// }, false)
// // true event catching & event propogation

document.getElementById("link").addEventListener('click', (e) => {
    e.preventDefault()
}, false)

// TODO
// imp events type, timestamp, default prevented
// target, toElement
// imp sourceElement, currentTarget
// clientX Y, screenX Y
// alt key, ctrl key, shift key, keyCode


// Remove image on click event
document.querySelector('#images').addEventListener('click', (e) => {
    console.log(e.target.tagName)
    let remover = e.target.parentNode
    remover.remove()
}, false)
