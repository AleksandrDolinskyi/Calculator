// масив из набора значений для кнопок

var sings=['1','2','3','4','5','6','7','8','9','0','-','+','*','/','c','='];

// выбираем область на которую дальше повесим кнопки

var calc=document.getElementById("calc");

// на выбрвную ранее область добавляем во внутрь разметки 

for (i=0; i<sings.length; i++) {
    calc.innerHTML+="<div class=btn>" +sings[i] +"</div>";
}

// устонавливаем значение в поле

$(".btn").click(function(){
var textArea=$("#inputVal");
if (this.innerHTML !== "="){
    textArea.val(this.innerHTML+textArea.val());
}
else {
    textArea.val(eval(textArea.val()));
}
if (this.innerHTML === "c"){
    textArea.val(" ");
}
});