let counterContainer = document.querySelector(".counts");
let hali = document.querySelector(".hali");
let hebat = document.querySelector(".hebat");
let ijm = document.querySelector(".ijm");
let dwr = document.querySelector(".dwr");
let mis = document.querySelector(".misIcon");
hebat.innerHTML = "33";

window.onload = function () {
    if (window.localStorage.getItem("ijm")) {
        ijm.innerHTML = window.localStorage.getItem("ijm");
    }
    if (window.localStorage.getItem("dwr")) {
        dwr.innerHTML = window.localStorage.getItem("dwr");
    }
    if (window.localStorage.getItem("hali")) {
        hali.innerHTML = window.localStorage.getItem("hali");
    }
};

mis.onclick = function () {
    // The Coloraize
    let coArry = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
    let hexcolor = [];
    for (let i = 0; i < 6; i++) {
        hexcolor.push(coArry[Math.floor(Math.random() * coArry.length)]);
    }
    let fainalColor = `#${hexcolor.join("")}`;
    // mis.style.backgroundColor = fainalColor;
    let contArray = [...counterContainer.children];
    contArray.forEach((el) => {
        el.style.backgroundColor = fainalColor;
    });
    //Setting Counters counts To Local Storage
    window.localStorage.setItem("ijm", +ijm.innerHTML + 1);
    if (+hali.innerHTML === +hebat.innerHTML) {
        window.localStorage.setItem("hali", "1");
        window.localStorage.setItem("dwr", +dwr.innerHTML + 1);
    } else {
        window.localStorage.setItem("hali", +hali.innerHTML + 1);
    }
    //Getting Counters counts From Local Storage
    if (window.localStorage.getItem("ijm")) {
        ijm.innerHTML = window.localStorage.getItem("ijm");
    }
    if (window.localStorage.getItem("dwr")) {
        dwr.innerHTML = window.localStorage.getItem("dwr");
    }
    if (window.localStorage.getItem("hali")) {
        hali.innerHTML = window.localStorage.getItem("hali");
    }
};

document.querySelector("button").onclick = function () {
    document.querySelector(".sure").style.cssText = "display: block";
    document.querySelector(".container").style.cssText = "opacity: 0.4";
};
document.querySelector(".yes").onclick = function () {
    window.localStorage.clear();
    ijm.innerHTML = "0";
    hali.innerHTML = "0";
    dwr.innerHTML = "0";
    document.querySelector(".sure").style.cssText = "display: none";
    document.querySelector(".container").style.cssText = "opacity: 1";
};
document.querySelector(".no").onclick = function () {
    document.querySelector(".sure").style.cssText = "display: none";
    document.querySelector(".container").style.cssText = "opacity: 1";
};


mis.addEventListener("click", () => {
  document.querySelector('.misIcon div').classList.add('transform')
  setTimeout(() => {
    document.querySelector('.misIcon div').classList.remove('transform')
  }, 100)
})

// PWA
if ("serviceWorker" in navigator) {
  let regserServce =  async () => {
    let reg = await navigator.serviceWorker.register('/sw.js')
    console.log(reg, 'vtvrt' )
    
  }
  regserServce()
}
