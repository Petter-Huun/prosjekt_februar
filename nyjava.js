const kort = document.querySelectorAll(".kort")

let kort1 = null
let kort2 = null 

kort.forEach(elm => {
    elm.addEventListener("click", () => {
        console.log("kortet ble klikket")
        elm.classList.add("flip")

        if (kort1 === null) {
            kort1 = elm 
        } else if (kort2 === null) {
            kort2 = elm 

            setTimeout(sjekkKort, 1000)
        }
    })
})

function sjekkKort() {
    let bilde1 = kort1.querySelector(".bak").classList[1]
    let bilde2 = kort2.querySelector(".bak").classList[1]

    if (bilde1 !== bilde2) {
        kort1.classList.remove("flip")
        kort2.classList.remove("flip")
    }

    kort1 = null
    kort2 = null
}



