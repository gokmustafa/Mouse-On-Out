var k=document.getElementById("_button");
k.addEventListener("mouseover", pencil1);
k.addEventListener("click", pencil2);
k.addEventListener("mouseout", pencil3);

function pencil1(){
    document.getElementById("demo").innerHTML +="Moused over! <br>";
    
};

function pencil2(){
    document.getElementById("demo").innerHTML +="Clicked! <br>";
    
};

function pencil3(){
    document.getElementById("demo").innerHTML +="Moused out! <br>";
    
};