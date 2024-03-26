let number = 0
let number2 = 0
let Result = 0
console.log("hii")
document.getElementById("add").onclick=function()
{
console.log("add was clicked")
number=number+1
document.getElementById("num").innerHTML=number
number=number+number2
console.log(number)
}
document.getElementById("R").onclick=function()
{
    console.log("reset was clickedd")
    number = 0
    console.log(number)
document.getElementById("num").innerHTML = number
    }
    document.getElementById("sub").onclick = function()
    {
        
        console.log("sub was clicked")
        number = number -1
        console.log(number)
        document.getElementById("num").innerHTML = number
            if(number  <= 0)
        {
            console.log("its -ve value")
            number=0
            document.getElementById("num").innerHTML = "Error"
            
        }
    
    
        }




 document.getElementById("add2").onclick = function()
{
console.log("2 add was clicked")
number2 = number2 + 1
console.log(number2)
console.log(number)
document.getElementById("num2").innerHTML = number2
}
document.getElementById("R2").onclick = function()
{
    console.log("2 reset was clickedd")
    number2 = 0
    console.log(number2)
document.getElementById("num2").innerHTML = number2
    }
    document.getElementById("sub2").onclick = function()
    {
        console.log("2 sub was clicked")
        number2 = number2 -1
        console.log(number2)
        document.getElementById("num2").innerHTML = number2
         
        if(number2  <= 0)
        {
            console.log("its -ve value")
            document.getElementById("num2").innerHTML = "Error"
            number2=0
        }
        }

        document.getElementById("Result4").onclick = function()
        {
            console.log("btn clicked")
           const checkbox = document.getElementById("inp")
           const checkbox2 = document.getElementById("inp2")
           const checkbox3 = document.getElementById("inp3")
           const checkbox4 = document.getElementById("inp4")
           if (inp.checked)
           {
            console.log("its selected")
            Result = number + number2
            document.getElementById("num3").innerHTML = Result
           } 
           else if (inp2.checked)
           {
            console.log("its selected")
            Result = number - number2
            document.getElementById("num3").innerHTML = Result
           }
           else if (inp3.checked)
           {
            console.log("its selected")
            Result = number * number2
            document.getElementById("num3").innerHTML = Result
           }
           else if (inp4.checked)
           {
            console.log("its selected")
            Result = number / number2
            document.getElementById("num3").innerHTML = Result
           }
           else
           {
            console.log("its not selected")
           }


        }
        