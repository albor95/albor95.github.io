pegarNum1=function(){
	return inputs[0].value;
}

pegarNum2=function(){
	return inputs[1].value;
}

entradasVazias=function(){
	if(pegarNum1() ==='' || pegarNum2() ===''){
		return true;

	}else{
		return false;
	}
}

atualizarResposta=function(){
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = parseInt(num1) + parseInt(num2);
	debugger;
	resposta.textContent = num1 + ' + ' + num2 + ' = ' + soma;
}

somar=function(){
	if (entradasVazias()) {
		resposta.textContent = 'ERRO:bota dois numero vacilaum';
	}else{
		atualizarResposta();
	}

}
/*Pegando os eelmentos input*/
/*let substitui o var em variavel local*/
/*pega pelo nome do elemento*/
let inputs= document.querySelectorAll('input');
/*pela classe*/
let resposta= document.querySelector('.resposta');
/*pelo id*/
let button= document.querySelector('#btnSomar');
/*espera por evento*/
/*soma quando clickar no botao*/
button.addEventListener('click', somar);
