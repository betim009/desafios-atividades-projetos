import { weapons } from "./weapons.js";



const divTbody = document.getElementById('tbody-weapons')



window.addEventListener('DOMContentLoaded', () => {

    weapons.map((element) => divTbody.innerHTML += `
    <tr>
        <td>${element.name}</td>
        <td>${element.attack[0].amount}</td>
        <td>${element.attack[1].amount}</td>
        <td>${element.defence[0].amount}</td>
        <td>${element.defence[1].amount}</td>
    </tr>
    `)
}) mndbhcu
jjejdnnfmd,