const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
// const loading = document.getElementById("loading")
const container = document.getElementsByClassName("container")

let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan saya 8bot, siapa nama kamu ?",
        `Halo ${data?.nama}, berapa usia kamu ?`,
        `Ohh ${data?.usia}, hobi kamu apa ya ?`,
        `Waaw sama dong aku juga hobi ${data?.hobi}, btw punya pacar ga ?`,
        `Ohh ${data?.pacar}, yauda kalo gitu. udahan ya `,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert(`Di isi dulu ya ${userData[0]}`)
    init++
    if (init === 1){
        botDelay({ nama: jawaban.value })
    } else if (init === 2){
        botDelay({ usia: jawaban.value })
    } else if (init === 3){
        botDelay({ hobi: jawaban.value })
    } else if (init === 4){
        botDelay({ pacar: jawaban.value })
    } else if (init === 5){
        finising()
    } else {
        botEnd()       
    }   
}

function botDelay(jawabanUser) {
    // loading.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        // loading.style.display = "none"
        container[0].style.filter = "none"
    }, [1000])
    userData.push(jawaban.value)
    jawaban.value = ''
}

function finising() {
    pertanyaan.innerHTML = `Thank u ya ${userData[0]} sudah mampir`
    jawaban.value = 'Siap terimakasih'
}

function botEnd() {
    alert(
        `Makasih ya ${userData[0]} sudah berkunjung, ${userData[0]} akan kembali ke halaman utama`
        )
    window.location.reload()
}