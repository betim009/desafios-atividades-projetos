/*
    Desafio é aqui!
    1. Resgatar a div items.
    2. Resgatar o elemento 'a' armors
    3. Resgatar o elemento 'a' weapons
    4. Criar os elementos da base de dados, dentro da div items
    6. Ao clicar no elemento 'a' deve trocar para weapons ou para armors dentro da div
*/
import { armors } from "./armors.js";
import { weapons } from "./weapons.js";

const divItems = document.getElementById('items')
const divArmors = document.getElementById('armors')
const divWeapons = document.getElementById('weapons')


window.addEventListener('DOMContentLoaded', () => {

    armors.map((element) => divItems.innerHTML += `
    <div class="card">
        <div>
            <img src=${element.image} alt="">
        </div>
        <div>
            <h1>${element.name}</h1>
            <h4>${element.category}</h4>
        </div>
    </div>`)
    // array.map()
    // array.forEach()
    // for(of)
});

divWeapons.addEventListener('click', () => {
    divItems.innerHTML = ""

    divWeapons.classList.toggle('active')
    divArmors.classList.remove('active')
    weapons.map((element) => divItems.innerHTML += `
    <div>
        <div>
            <img src=${element.image} alt="">
        </div>
        <div>
            <h1>${element.name}</h1>
        </div>
    </div>`)
})
divArmors.addEventListener('click', () => {
    divItems.innerHTML = ""
     
    divArmors.classList.toggle('active')
    divWeapons.classList.remove('active')

    armors.map((element) => divItems.innerHTML += `
    
    <div>
    <div>
        <img src=${element.image} alt="">
    </div>
    <div>
        <h1>${element.name}</h1>
    </div>
    </div>
    </div>`)
})