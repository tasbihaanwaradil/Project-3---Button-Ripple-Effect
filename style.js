const btnElement = document.querySelector(".btn");

btnElement.addEventListener("mouseover", (event)=>{
    const x = (event.pageX - btnElement.offsetLeft)
    const y = (event.pageY - btnElement.offsetTop)

    btnElement.getElementsByClassName.setProperty("--xPos" , x + "px")
    btnElement.getElementsByClassName.setProperty("-yPos" , y + "px")

})