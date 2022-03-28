let choices = document.querySelectorAll('.choice'); 

choices.forEach((el) => {
    el.addEventListener("click", (elem)=>{
        removeActive()
        elem.target.classList.toggle('js-active')
        let choice = elem.target.innerHTML.toLowerCase() 
        let linkCssTag = document.querySelector('[rel="stylesheet"]')
        if(choice !== "user agent stylesheet"){
            linkCssTag.setAttribute("href",`./1-${choice}.css`)
        }else{
            linkCssTag.setAttribute("href","")
        }
    })
})

function removeActive(){
    choices.forEach((el) => {
        el.classList.remove('js-active')
    })
}
