function calculate(val){
    document.getElementById('output').value+=val;
}


let FirstOperand
let SecondOperand
let FirstOperator
let Result
let InputText
let flag=0;

function Operate(ops)
{   
    if(flag !=1 ){

    
    FirstOperand = document.getElementById('output').value;
    FirstOperator = ops;
    document.getElementById('output').value = "";
    document.getElementById('DisplayParagraph').innerText=FirstOperand + ops;
    flag = 1;
    }else{
        alert("Only one operation allowed. Pree Equal sign to get result first")
    }

}
function EqualResult(){
    SecondOperand = document.getElementById('output').value
    FirstOperand = parseFloat(FirstOperand);
    SecondOperand = parseFloat(SecondOperand);
    switch(FirstOperator)
    {
        case '+': Result = FirstOperand + SecondOperand;
                  
                  break;
        case '-': Result = FirstOperand - SecondOperand;
                  break;
        case '*': Result = FirstOperand * SecondOperand;
                  break;
        case '/': Result = FirstOperand / SecondOperand;
                  break;

        default : alert("Errro");
    }
    document.getElementById('DisplayParagraph').innerText+=SecondOperand;
    document.getElementById('output').value = Result;
    flag = 0;
}





function cleartext()
{
    document.getElementById('output').value = "";
    document.getElementById('DisplayParagraph').innerText = "";
    
}
