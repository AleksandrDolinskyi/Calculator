var signs=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','c']; //масив из набора значений для кнопок
var calc=document.getElementById("calc");//выбираем область на которую дальше повесим эти кнопки


//на выбрвную ранее область добавляем во внутрь HTML разметки блоки кнопок + значение кноаки из масива + закрывающи тег
for (var i=0; i<signs.length;i++){  
    calc.innerHTML+="<div class=btn>"+signs[i]+"</div>";
}

$(".btn").click(function(){
    var textArea=$("#inputVal")
    if(this.innerHTML !== '='){
        textArea.val(textArea.val()+this.innerHTML);
    }
    else {
        textArea.val(eval(textArea.val()));
    }
    if (this.innerHTML === "c"){
        textArea.val(" ");
    }
});
