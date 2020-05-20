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
    
    //rest
    const usuario1 = {
        nome:'bernardo',
        idade: 19,
        empresa:'Koerich'
    };

    const { nome1 ,...resto} = usuario1;
    const arr3 = [1,2,3,4];
    const [a,b, ...c] = arr3;
    console.log(a);
    console.log(b);
    console.log(c);

    function soma(...params){
        return params.reduce((total,next) => total + next);
    }
    console.log(soma(1,3,4));
    

    //spread
    const arr4 = [1,2,3];
    const arr5 = [4,5,6];

    const arr6 = [...arr4,...arr5];

    const usuario2 = {
        nome2 :"Bernardo",
        idade1:19,
        empresa1:'Koerich'
    };

    const usuario3 = {...usuario2,nome:'Carlos'};
    







