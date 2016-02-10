function start(){
    quadratic(1,0,0);
    quadratic(1,0,-1);
    quadratic(1,0,1);
    quadratic(1,-4,-21);
}
function quadratic(a,b,c){
    var one = square(b);
    var two = times4(a, c);
    var three = subtract(one, two);
    if(negNum(three) == true){
        println("The roots are imaginary.");
    }else{
        println("The roots are real.");
        var four = squareRoot(three);
        var five = neg1(b);
        var six = add(five, four);
        var seven = subtract(five, four);
        var eight = double(a);
        var nine = divide(six, eight);
        var ten = divide(seven, eight);
        if(zeroNum(three) == true){
            println("The root was " + nine + ".");
    }else{
        println("The roots were " + nine + " and " + ten + ".");
    }
    }
}
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function times(x, y){
    return x * y;
}
function squareRoot(x){
    return Math.sqrt(x);
}
function neg1(x){
    return x * (-1);
}
function double(x){
    return x * 2;
}
function square(x){
    return x * x;
}
function divide(x, y){
    return x / y;
}
function times4(x, y){
    return (x * y) * 4;
}
function zeroNum(x){
    if(x == 0){
        return true;
    }else{
        return false;
    }
}
function negNum(x){
    if(x < 0){
        return true;
    }else{
        return false;
    }
}
