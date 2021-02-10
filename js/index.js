// Your code goes here
const changeBG = document.querySelector('body');

document.addEventListener('keydown', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeBG.style.backgroundColor = '#' + randomColor;
    
})
document.addEventListener('keyup', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeBG.style.backgroundColor = "#" + randomColor;
    // event.stopPropagation()
})
document.addEventListener('keyup', function(event){
    
    changeBG.style.backgroundColor = "green"
    
})
const changeH1 = document.querySelector('header h1');

changeH1.addEventListener('mouseover', function(event){
    changeH1.textContent = "Crazy Color Bus"
})
changeH1.addEventListener('mouseout', function(event){
    changeH1.textContent = "Fun Bus"
})
Array.from(document.links).forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault()
    })
})
const deleteImg = document.querySelectorAll('img');


deleteImg[0].addEventListener('dblclick', function(event){
    deleteImg[0].style.opacity = 0
})
deleteImg[1].addEventListener('dblclick', function(event){
    deleteImg[1].style.opacity = 0
})
deleteImg[2].addEventListener('dblclick', function(event){
    deleteImg[2].style.opacity = 0
})
deleteImg[3].addEventListener('dblclick', function(event){
    deleteImg[3].style.opacity = 0
})

const restoreImg = document.querySelectorAll('img')

restoreImg[0].addEventListener('mousedown', function(event){
    restoreImg[0].style.opacity = 100
})
restoreImg[1].addEventListener('mousedown', function(event){
    restoreImg[1].style.opacity = 100
})
restoreImg[2].addEventListener('mousedown', function(event){
    restoreImg[2].style.opacity = 100
})
restoreImg[3].addEventListener('mousedown', function(event){
    restoreImg[3].style.opacity = 100
})

const changeP = document.querySelectorAll('p')

changeP[0].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[0].style.color = '#' + randomColor
})
changeP[1].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[1].style.color = '#' + randomColor
})
changeP[2].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[2].style.color = '#' + randomColor
})
changeP[3].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[3].style.color = '#' + randomColor
})
changeP[4].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[4].style.color = '#' + randomColor
})
changeP[5].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[5].style.color = '#' + randomColor
})
changeP[6].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[6].style.color = '#' + randomColor
})
changeP[7].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[7].style.color = '#' + randomColor
})
changeP[8].addEventListener('contextmenu', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeP[8].style.color = '#' + randomColor
})
const changeH2Color = document.querySelectorAll('h2')

changeH2Color[0].addEventListener('mouseenter', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeH2Color[0].style.color = '#' + randomColor
})
changeH2Color[1].addEventListener('mouseenter', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeH2Color[1].style.color = '#' + randomColor
})
changeH2Color[2].addEventListener('mouseenter', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeH2Color[2].style.color = '#' + randomColor
})
changeH2Color[3].addEventListener('mouseenter', function(event){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    changeH2Color[3].style.color = '#' + randomColor
})
const changeH2Back = document.querySelectorAll('h2')
changeH2Back[0].addEventListener('mouseleave', function(event){
    changeH2Back[0].style.color = 'black'
})
changeH2Back[1].addEventListener('mouseleave', function(event){
    changeH2Back[1].style.color = 'black'
})
changeH2Back[2].addEventListener('mouseleave', function(event){
    changeH2Back[2].style.color = 'black'
})
changeH2Back[3].addEventListener('mouseleave', function(event){
    changeH2Back[3].style.color = 'black'
})

const setDefaultBG = document.querySelector('body')
setDefaultBG.addEventListener('click', function(event){
    setDefaultBG.style.backgroundColor = "white"
})

