const board=document.querySelector('#board')
const colors=['#00FFFF','#00FFCC','#00FF99','#00FF66','#00FF33','#00FF00','#FF00CC','#3333FF','#FFFF00']
const SQUARES_NUMBERS=800

for (let i=0; i<SQUARES_NUMBERS; i++){
    const square=document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',setColor)
    square.addEventListener('mouseleave',removeColor)

    board.append(square)
}

function setColor(event){
    const element=event.target
    const color=getRandomColor()
    element.style.backgroundColor=color
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`
}

function removeColor(event){
    const element=event.target
    element.style.backgroundColor='#FFFF99'
    element.style.boxShadow=`0 0 2px #000`
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}