var werkLogos = document.querySelectorAll('.logo-werk');
var infoBlock = document.querySelectorAll('.info-block');
var infoSluiten = document.querySelectorAll('.info-sluiten');


for(var i = 0, len = werkLogos.length;i < len; i++)
{
    (function(index){
        werkLogos[i].addEventListener("click" , function(){
            if(infoBlock[index].classList.contains('info-block')){
                infoBlock[index].classList.remove("hidden");
                setTimeout(function(){
                    infoBlock[index].classList.remove("visuallyhidden");
                }, 20);
        }
    });
    })(i);

    (function(index){
        infoSluiten[index].addEventListener("click" , function(){
            if(infoBlock[index].classList.contains('info-block')){
                infoBlock[index].classList.add("hidden");
                setTimeout(function(){
                    infoBlock[index].classList.add("visuallyhidden");
                }, 20);
        }
    });
    })(i);
}