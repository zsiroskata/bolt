function szamol() {
    let nev = document.getElementById("nev").value;
    let term =  document.getElementById("termek").value;
    let szamSzoveg = document.getElementById("szam").value;
    let kiiras = document.getElementById("kiiras")
    let nevkiirat = document.getElementById("nevkiirat")
    

    eredmeny  = parseInt( term )* parseInt(szamSzoveg) ;


    kiiras.innerText = `Fizetendő: ${eredmeny} ft`
    nevkiirat.innerText = `Vevő : ${nev}`


}

console.log("hello");