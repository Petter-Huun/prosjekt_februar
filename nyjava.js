const kort = document.querySelectorAll(".kort")

kort.forEach(elm => {
    elm.addEventListener("click", () => {
        console.log("kortet ble klikket")
        elm.classList.add("flip")
    })
})

