   
    var DecToAll = (decimal, base) => { 
        //Troca o nome da variavel e inicia um array vazio como result.   
        var number = decimal;
        var result = [];

        //Condição simples para definir os resultados
        if(number < 1) 
        {
            return console.log("Considere somente valores positivos");
        }
        else
        {
            //Laço de repetição para cada resto da divisão (number/2) pegar o valor e repetir a divisão até que
            // a condição number for menor ou = a 1 seja satisfeita.     
            while(number >= 1){
                result.unshift(Math.floor(number%base));
                number /=base;
            }

            // O result sai do array e é unido.
            console.log(result.join(''));
        }        
            // Teste direto para calculo de binário.
            // console.log(decimal.toString(2))     
    }
    DecToAll(10, 2)
