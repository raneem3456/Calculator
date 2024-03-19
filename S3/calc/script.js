var first = "";
var second= "";
var op= "";
//----------------------------------------------------
function num(n)
{
    document.getElementById("screen").innerHTML += n;
    var s = new Audio("sounds/s (2).mp3");
    s.play();
}
//----------------------------------------------------
function opr(par)
{
    if (op != "")
        result();
    
    op = par;

    first = parseFloat( document.getElementById("screen").innerHTML );
    
    document.getElementById("operation").innerHTML = first + " " + op + " ";
    document.getElementById("screen").innerHTML = "";

    var s = new Audio("sounds/s (6).mp3");
    s.play();
}
//----------------------------------------------------
function result()
{
    second = document.getElementById("screen").innerHTML;
    if (second == "")
        second = first;
    else
        second = parseFloat(second);

    document.getElementById("operation").innerHTML += second + " = " ;
    
    var r;

    if ( op == "+" )
        r = first + second;
    else if (op == "-")
        r = first - second;
    else if (op == "X")
        r = first * second;
    else if (op == "÷")
        r = first / second;

    document.getElementById("screen").innerHTML = r;

    var s = new Audio("sounds/s (5).mp3");
    s.play();
}
//----------------------------------------------------
function change_sign()
{
    var x = parseFloat( document.getElementById("screen").innerHTML) ;
    x = x * (-1);
    document.getElementById("screen").innerHTML = x;
}
//----------------------------------------------------
function reset()
{
    document.getElementById("screen").innerHTML = "";
    document.getElementById("operation").innerHTML = "";
    first = "";
    second = "";
    op = "";

    var s = new Audio("sounds/s (3).mp3");
    s.play();
}
//----------------------------------------------------
function del()
{
    
    var x = document.getElementById("screen").innerHTML;
    if (x != "")
    {
        var s = new Audio("sounds/s (4).mp3");
        s.play();
    }
    x = x.substring(0 , x.length-1 );
    document.getElementById("screen").innerHTML = x;

    
}
//----------------------------------------------------