var x = 1;
var three = 0;
var five = 0;
while(x <= 100){
    var three = x % 3;
    var five = x % 5;
    if (three == 0 && five != 0 ){
        document.write('Fizz')
        document.write("<br/>")
    }else if (three != 0 && five == 0){
        document.write("Buzz")
        document.write("<br/>")
    }else if(three == 0 && five == 0){
       document.write("Fizz Buzz") 
       document.write("<br/>")
    }else{
        document.write(x)
        document.write("<br/>")
    }
    x++;
}
