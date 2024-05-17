function calculate(val)
{
    document.getElementById('output').value = document.getElementById('output').value + val;
}



function cleartext()
{
    document.getElementById('output').value = "";
}


function EqualResult()
{
    var text=document.getElementById('output').value;
    var result=eval(text);
    
    document.getElementById('output').value=result;
}


