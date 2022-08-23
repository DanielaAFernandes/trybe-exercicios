/*let player = {
name: 'Marta',
lastName: 'Silva',
age: 34, 
medals: {
    golden: 2,
    silver: 3,
}
};

player.bestInTheWorld = [ 2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora'+ ' '+ player.name+ ' '+player.lastName+ ' '+ 'foi eleita a melhor do mundo por'+ ' '+ player.bestInTheWorld.length+' '+ 'vezes.')

console.log('A jogadora'+ ' '+ player.name+ ' '+ player.lastName+ ' '+ 'tem'+ ' '+ player.age+ ' '+ 'anos.');

console.log('A jogadora possui'+' '+ player.medals.golden + ' '+ 'medalhas de ouro e'+ ' '+ player.medals.silver+ ' '+ 'medalhas de prata.');*/

/*let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for(let index in names){
      console.log('Olá'+ ' '+names[index]);
  };*/

  /*let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(let index in car){
      console.log(index, car[index]);
  }*/

  /*let car = {
      model: 'A3 Sedan',
      manufacturer: 'Audi',
      year: 2020
  };

  for(let value in car){
      console.log(value, car[value]);
  };*/

  /*let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Bem-vinda, "+ info.personagem);

  info.recorrente = "Sim";

  console.log(info);

  for(let index in info){
      console.log(index);
  }
  
  for(let index in info){
      console.log(info[index]);
  }

  let info2 = {
      personagem: 'Tio Patinhas',
      origem: 'Christmas on Bear Mountain',
      nota: 'O último MacPatinhas',
      recorrente: 'Sim',
  };

  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }*/


  /*let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("O livro favorito de"+ ' '+ leitor.nome+ ' '+leitor.sobrenome+ ' '+ "se chama"+ ' '+ leitor.livrosFavoritos[0].titulo + '.');

  leitor.livrosFavoritos.push(
      {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  },
  );

  
console.log(leitor.nome+' '+"tem"+ ' '+ leitor.livrosFavoritos.length+ ' '+ "livros favoritos.");*/


/*function verificar(word){
    let reverse = word.split('').reverse().join('');
    if(reverse === word) {
        return true;
    } else {
        return false;
    }
}

console.log(verificar('ovo'));*/




/*function maiorIndice(array) {
    let highestNumber =0;
    for(let index = 1; index < array.length; index+=1){
        if(array[index]> highestNumber){
            highestNumber = array[index];
        }
    }
    return highestNumber;
}
console.log(maiorIndice([2,5,89,63,10]));*/

/*function menorIndice(array) {
    let lowestNumber = 10;
    for(let index = 1; index < array.length; index+=1){
        if(array[index]< lowestNumber){
            lowestNumber = array[index];
        }
    }
    return lowestNumber;
}
console.log(menorIndice([2,5,89,63,10]));*/

/*function indiceDoMenor(numeros) {
    let indiceMenor = 0;
    for (let indice in numeros) {
      if (numeros[indiceMenor] > numeros[indice]) {
        indiceMenor = indice;
      }
    }
  
    return indiceMenor;
  }
  
  console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6*/

  /*function indiceDoMaior(numeros) {
      let indiceMaior = 0;
      for(let indice in numeros){
          if(numeros[indiceMaior] < numeros[indice]){
              indiceMaior = indice;
          }
      }
      return indiceMaior;
  }
 
  console.log(indiceDoMaior([2,7,58,5]));*/

  /*function maiorPalavra(nomes) {
      let maiorPalavra = nomes[0];
      for(let index in nomes){
          if(maiorPalavra.length < nomes[index].length){
              maiorPalavra = nomes[index];
          }
      }
      return maiorPalavra;
      }
      
  console.log(maiorPalavra(['Jose', 'Carla','Josefina']));*/

  
  
  /*function somatorio(numero) {
      let total = 0;
      for(let index = 1; index <= numero; index +=1){
          total = total + index;
      }
    return total;
  }

  console.log(somatorio(7));*/

  
 



