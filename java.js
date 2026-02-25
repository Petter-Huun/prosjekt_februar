let symboler = ["🍎","🍌","🍇","🍒","🍊","🍉","🍍","🥝"];
let kort = [];
let forsteKort = null;
let laas = false;
let trekk = 0;

function bland(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startSpill() {
    const brett = document.getElementById("spillbrett");
    brett.innerHTML = "";
    trekk = 0;
    document.getElementById("status").textContent = "Trekk: 0";
    forsteKort = null;
    laas = false;

    kort = [...symboler, ...symboler];
    bland(kort);

    kort.forEach((symbol, indeks) => {
        const div = document.createElement("div");
        div.classList.add("kort");
        div.dataset.symbol = symbol;
        div.dataset.indeks = indeks;
        div.textContent = "?";
        div.onclick = snuKort;
        brett.appendChild(div);
    });
}

function snuKort(e) {
    if (laas) return;

    const klikketKort = e.target;

    if (klikketKort.classList.contains("funnet") || klikketKort === forsteKort) {
        return;
    }

    klikketKort.textContent = klikketKort.dataset.symbol;

    if (!forsteKort) {
        forsteKort = klikketKort;
        return;
    }

    trekk++;
    document.getElementById("status").textContent = "Trekk: " + trekk;

    if (forsteKort.dataset.symbol === klikketKort.dataset.symbol) {
        forsteKort.classList.add("funnet");
        klikketKort.classList.add("funnet");
        forsteKort = null;
        sjekkVinn();
    } else {
        laas = true;
        setTimeout(() => {
            forsteKort.textContent = "?";
            klikketKort.textContent = "?";
            forsteKort = null;
            laas = false;
        }, 800);
    }
}

function sjekkVinn() {
    const alleKort = document.querySelectorAll(".kort");
    const funnet = document.querySelectorAll(".funnet");

    if (alleKort.length === funnet.length) {
        document.getElementById("status").textContent =
            "Gratulerer! Du vant på " + trekk + " trekk ";
    }
}

startSpill();