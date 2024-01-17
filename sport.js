const navMenu = document.getElementById("mobilenav-Menu");
const navToggle = document.getElementById("nav-Toggle")
const navClose = document.getElementById("nav-Close")

if(navToggle){
    navToggle.addEventListener('click',()=>
    {
        console.log(navToggle)
        navMenu.classList.add("showMenu")
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove("showMenu")
      })
}