let count = 0

const increaseButton = document.getElementById("increase")

let contador = document.getElementById("values")
contador.textContent = count
 

increaseButton.addEventListener("click", () => {
    count += 1
    console.log(`El count se incremento a ${count}`)
    contador.textContent = count
})

const decreaseButton = document.getElementById("decrease")

decreaseButton.addEventListener("click", () => {
    count -= 1
    contador.textContent = count
    console.log(`El count se decremento a ${count}`)
})

const resetButton = document.getElementById("reset")

resetButton.addEventListener("click", () => {
    count = 0
    contador.textContent = count
    console.log(`El count se reseteo a ${count}`)
})

