"use strict"

const divOriginal = document.querySelector(`#buttons`)
const btnAdicionar = document.querySelector(`#adicionar-tarefa #btnAdicionar`)
const formPrimeiro = document.querySelector(`#formPrimeiro`)

btnAdicionar.addEventListener("click", (e)=>{
    e.preventDefault();
    const divClonada = divOriginal.cloneNode(true)
    divClonada.querySelector('#titulo p').textContent = `Consegui`;
    formPrimeiro.appendChild(divClonada)

})