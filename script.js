function contar(){
  let ini = document.getElementById('txtinicio')
  let fim = document.getElementById('txtfim')
  let passo = document.getElementById('txtpasso')
  let resul = document.querySelector('#resultado')

  if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    resul.innerHTML = 'Impossivel contar.'
    alert('Faltam dados')

  }else{
    resul.innerHTML = 'Contando: <br> ';

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if(p <= 0){
      alert('Passo inválido! Considerando Passo 1')
      p = 1
    }
    if(i < f){
      for (let j = i;  j <= f; j += p){
        resul.innerHTML += `${j } \u{1F449}	 `
      
      }

    } else {
      for(let j = i; j >= f; j -= p){
        resul.innerHTML += `${j } \u{1F449}	 `
      }
    }
    resul.innerHTML += `\u{1f3c1}`
  }
 



  
  }
  




// for(ini += passo; ini <= fim; ini++){
//   console.log(ini);
//}

























// function contar() {
//   let ini = parseInt(document.getElementById('txtinicio').value);
//   let fim = parseInt(document.getElementById('txtfim').value);
//   let passo = parseInt(document.getElementById('txtpasso').value);
//   let resul = document.querySelector('#resultado');

//   if (isNaN(ini) || isNaN(fim) || isNaN(passo)) {
//     alert('Por favor, preencha todos os campos corretamente.');
//     return; // Retorna para evitar a execução do código abaixo em caso de erro.
//   }

//   resul.innerHTML = 'Contando: ';

//   // Verifica se o passo é positivo ou negativo para decidir a direção da contagem.
//   if (passo > 0) {
//     for (let i = ini; i <= fim; i += passo) {
//       resul.innerHTML += i + ' ';
//     }
//   } else if (passo < 0) {
//     for (let i = ini; i >= fim; i += passo) {
//       resul.innerHTML += i + ' ';
//     }
//   } else {
//     alert('O passo não pode ser zero.');
//   }
// }
















/*
for(let c = ini; c <= fim; c += passo ){
    resul.innerHTML += `${c}`
  
  }

*/















// function verificar() {
//   var data = new Date();
//   var ano = data.getFullYear();
//   var fano = document.getElementById("txtano");
//   var res = document.querySelector("#resultado");

//   if (fano.value.length == 0 || Number(fano.value) > ano) {
//     alert("[ERRO] Verifique os dados e tente novamente!");
//   } else {
//     var fsex = document.getElementsByName("radsex");
//     var idade = ano - fano.value;
//     var genero = "";
//     var img = document.createElement('img')
//     img.setAttribute('id', 'foto')
//     if (fsex[0].checked) {
//       genero = "Homem";
//       if(idade >= 0 && idade < 10) {
//         img.setAttribute('src', './images/bebe-m.png')
//       } else if(idade < 21){
//         img.setAttribute('src', './images/jovem-h.png')
//       }else if(idade < 50){
//         img.setAttribute('src', './images/adulto-h.png')
//       }else {
//         img.setAttribute('src', './images/idoso-h.png')
//       }
//     } else if (fsex[1].checked) {
//       genero = "Mulher";
//       if(idade >= 0 && idade < 10) {
//         img.setAttribute('src', './images/bebe-f.png')
//       } else if(idade < 21){
//         img.setAttribute('src', './images/jovem-f.png')
//       }else if(idade < 50){
//         img.setAttribute('src', './images/adulta-f.png')
//       }else {
//         img.setAttribute('src', './images/idosa-f.png')
//       }
//     }
//     res.computedStyleMap.textAlign = 'center'
//     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
//     res.appendChild(img).style.border = '2px solid black'
//     img.style.borderRadius = '50%';
//   }
// }