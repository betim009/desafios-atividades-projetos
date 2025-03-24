const btnSend = document.getElementById('btn-send');
const produto = document.getElementById('produto');
const tipoProduto = document.getElementById('produto-tipo');
const quantidade = document.getElementById('quantidade');
const preco = document.getElementById('preco');
const pagamento = document.querySelectorAll('.pagamento');

let data = {
    pagamento: "parcelado",
}

window.addEventListener('load', () => {

});

pagamento.forEach(radio => {
    radio.addEventListener('change', (event) => {
        data.pagamento = event.target.value;
    })
});


btnSend.addEventListener('click', () => {
    console.log(data)
})