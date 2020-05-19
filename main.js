const arr = [1,3,4,5,8,9];

const newArr = arr.map(function(item,index) {
    return item + index;
});

const sum = arr.reduce(function(total,next){
    return total + next;
});

const filter = arr.filter(function(item){
    return item % 2 === 0;
});

const find = arr.find(function(item){
    return item ===4 ;
})
//====================== //======================

const arr2 = [1,3,4,5,6];

const newArr2 = arr2.map( item => item *2);

const teste = () =>  ({nome: 'Bernardo'});

const teste2 = () => {
    return{nome:'Bernardo Luz',
            dataNasc: '25/12/2000'}
}
console.log(teste2);

//===============Desestruturação de Objetos ===================
const usuario ={
    nome:'Bernardo',
    idade:19,
    endereco:{
        cidade:'Florianopolis',
        estado:'SC'
    }
}

    const {nome,idade,endereco:{cidade}} = usuario;

    function mostrarNome({nome,idade}){
        console.log(nome,idade);
    }

    mostrarNome(usuario);

    //==================== Rest/Spread ================
    




