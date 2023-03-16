var input = document.getElementById('inp');
var btnadd = document.getElementById('btn-add');
var main = document.getElementById('area-lista1');
var contador = 0;


function addTarefa(){
    let valorinput = input.value;

    if(valorinput !== '' && (valorinput !== null) && (valorinput !== undefined)){
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcar(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline" ></i>
        </div>
        <div onclick="marcar(${contador})" class="item-nome">
            ${valorinput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>
    </div>`;

        main.innerHTML += novoItem;

    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();

}

function marcar(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    if(classe == "item"){
        item.classList.add('clicado')

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }
    else{
        item.classList.remove('clicado')

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }

}

input.addEventListener("keyup", function(event){
    if(event.keyCode == 13){
        event.preventDefault();
        btnadd.click();
    }
})