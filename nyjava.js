const kort = document.querySelectorAll(".kort")

kort.forEach(function (elm) {
    elm.addEventListener("click", () => {
        console.log("kortet ble klikket")
        elm.classList.add("filp")
    })
})

