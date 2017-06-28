var lena = 10;
for(i = 0; i < lena; i++){
    var stroka = "";
    var a = "*";
    for(var z = lena; z > i; z--){
        stroka = stroka + " "
    }
    for(var z = 0; z < i; z++){
        stroka = stroka + "**";
    }
    console.log(stroka + a)
}


/*var a = "**"
var stroka = ""
for(i = 0; i < 10; i++){
    stroka = stroka + a;

    var y = 10 - i;
    var indent = "";
    for(var z = 0; z < y; z++){
        indent = indent + " ";

    }
        console.log(indent + stroka);
}*/



