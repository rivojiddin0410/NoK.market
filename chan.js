const main = document.querySelector(" body")
const btn= document.querySelector(".btn")

function dt(){
    if( localStorage.getItem("theme") === "dark"){
        main.classList.add("dark")
    }else{
        main.classList.remove("dark")
    }
}
dt()


btn.addEventListener("click", ()=>{
    if(main.classList.contains("dark")) {
        main.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }else{
        main.classList.add("dark")
        localStorage.setItem("theme", "dark")

    }
})

let t = localStorage.getItem("girlfriend")
console.log(t);