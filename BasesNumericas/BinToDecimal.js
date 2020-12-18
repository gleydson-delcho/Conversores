var BinForDecimal = (number) => {

    //Transforma a string em array
    var bin = [...number];
    var soma = 0;

    // Função para transformar a string em numeros inteiros.
    var returnInt = (number) => {return parseInt(number,10)}

    // Função para inverter a posição dos numeros no array.
    var results = bin.map(returnInt).reverse();
    
    // Laço de repetição para realizar a operação por meio da potenciação na base 2.
    // Utilizando a metodologia de 0 para desligado e para 1 ligado.
    for(let i = 0; i < results.length; i++){
        if( results[i] !== 0) {
            var decimal = Math.pow(2,i); 
            soma += decimal;        
        }
    }
    console.log(soma);
   
}
BinForDecimal('111000001001110000');

// Existe uma fórmula mais simples para trabalhar com transformação em bases.
// parseInt("2", 10) - esta função o primeiro argumento deve ser passado a string a qual deseja transformar, 
//      O segundo argumento é a base para a qual deseja transformar.
//      Para maiores informações sobre esta função deve-se consultar a documentação.