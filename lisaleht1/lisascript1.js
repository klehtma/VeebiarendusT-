// MINA (andreas) TEGIN SELLE
function formatsioon(formatsioon) {
    let mängijad = document.querySelectorAll(".mängija") // Valib kõik elemendid klassiga 'mängija'
    let positsioonid = {"4-3-3": ["v","k1","k2","k3","k4","p1","p2","p3","r1","r2","r3"],
                        "4-4-2": ["v","k1","k2","k3","k4","p1","p2","p3","p4","r1","r2"],
                        "4-2-3-1": ["v","k1","k2","k3","k4","p1","p2","p3","p4","p5","r1"],
                        "5-4-1": ["v","k1","k2","k3","k4","k5","p1","p2","p3","p4","r1"],
                        "3-5-2": ["v","k1","k2","k3","p1","p2","p3","p4","p5","r1","r2"],
                        "1-1-1-1-1-1-1-1-1-1": ["v","k1","k2","k3","p1","p2","p3","p4","r1","r2","r3"]
                        } // Valib vastava formatsiooni mehed, et 4-3-3 on 4 kaitsjat, 3 poolkaitsjat ja 3 ründajat
    mängijad.forEach((mängija, i) => {
        // Vahetab uue formatsiooni vanaga ära
        mängija.classList.replace(mängija.classList[1],positsioonid[formatsioon][i]+"_"+formatsioon)
    });
}

// Mängija peale klikkimisel näitab vastava positsiooni teksti
document.querySelectorAll(".mängija").forEach(mängija => {
    mängija.addEventListener("click", () => {
        // Positsiooni täht on klassi (nt "k1_4-3-3") esimene märk (sel juhul 'k')
        let täht = mängija.classList[1][0];

        // Peidab kõik tekstiblokid
        document.querySelectorAll(".info").forEach(blokk => {
            blokk.classList.remove("aktiivne");
        });

        // Näitab selle positsiooni oma (kui see olemas on)
        let sihtmärk = document.querySelector("." + täht + "_tekst");
        if (sihtmärk) {
            sihtmärk.classList.add("aktiivne");
        }
    });
});