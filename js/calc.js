
//function for displaying values
function dis(val)
{
document.getElementById("calcu").value+=val
 }
//function for evaluation
function solve()
{
let x = document.getElementById("calcu").value
let y = eval(x)
document.getElementById("calcu").value = y
}
//function for clearing the display
function clr()
{
document.getElementById("calcu").value = ""
}
