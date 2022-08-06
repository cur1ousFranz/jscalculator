

function btn7(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 7;
  }else{
    input.value += 7;
  }
}

function btn8(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 8;
  }else{
    input.value += 8;
  }
}

function btn9(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 9;
  }else{
    input.value += 9;
  }
}

function btnMulti(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");

  if(tempValue.indexOf("*") > 0 || tempValue.indexOf("+") > 0 || 
  tempValue.indexOf("-") > 0 || tempValue.indexOf("/") > 0 ){
    
    btnEqual();
  }
  input.value += "*";
}
// 
function btn4(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 4;
  }else{
    input.value += 4;
  }
}

function btn5(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 5;
  }else{
    input.value += 5;
  }
}

function btn6(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 6;
  }else{
    input.value += 6;
  }
}

function btnSub(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue.indexOf("*") > 0 || tempValue.indexOf("+") > 0 || 
  tempValue.indexOf("-") > 0 || tempValue.indexOf("/") > 0 ){
    
    btnEqual();
  }

  input.value += "-";
}
//
function btn1(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 1;
  }else{
    input.value += 1;
  }
}

function btn2(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 2;
  }else{
    input.value += 2;
  }
}

function btn3(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  if(tempValue[0] == 0){

    input.value = tempValue.slice(1).join("") + 3;
  }else{
    input.value += 3;
  }
}

function btnAdd(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");

  if(tempValue.indexOf("*") > 0 || tempValue.indexOf("+") > 0 || 
  tempValue.indexOf("-") > 0 || tempValue.indexOf("/") > 0 ){
    
    btnEqual();
  }

  input.value += "+";
}

function btnZero(){

  let input = document.getElementById('input');
  input.value += 0;

}

function btnDec(){

  let input = document.getElementById('input');
  input.value += ".";
}

function btnDiv(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");

  if(tempValue.indexOf("*") > 0 || tempValue.indexOf("+") > 0 || 
  tempValue.indexOf("-") > 0 || tempValue.indexOf("/") > 0 ){
    
    btnEqual();
  }

  input.value += "/";
}

function btnDel(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");

  input.value = input.value.slice(0, tempValue.length-1);

}

function btnClear(){

  document.getElementById('input').value = 0;

}

function btnEqual(){

  let input = document.getElementById('input');
  let tempValue = input.value.split("");
  
  for(let i=0; i < tempValue.length; i++ ){

    if(isNaN(tempValue[i])){
      let temp;
      switch(tempValue[i]){
        
        case "*": temp = tempValue.slice(0, i); //* tempValue.slice(i+1).join("")
                  input.value = temp.join("") * tempValue.slice(i+1).join("");
                  break;

        case "+": temp = tempValue.slice(0, i); //* tempValue.slice(i+1).join("")
                  input.value = parseInt(temp.join("")) + parseInt(tempValue.slice(i+1).join(""));
                  break;

        case "-": temp = tempValue.slice(0, i); //* tempValue.slice(i+1).join("")
                  input.value = temp.join("") - tempValue.slice(i+1).join("");
                  break;

        case "/": temp = tempValue.slice(0, i); //* tempValue.slice(i+1).join("")
                  input.value = parseFloat(temp.join("") / tempValue.slice(i+1).join(""));
                  break;
      }
    }
    
  }

}







 








