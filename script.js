var mainElement = document.createElement("main");
document.body.appendChild(mainElement);

var selectorElement = document.createElement("table");
mainElement.appendChild(selectorElement);

var tableElement = document.createElement("table");
mainElement.appendChild(tableElement);

var click = true;

for (let i = 0; i < 7; i++){
    var trElement = document.createElement("tr");
    tableElement.appendChild(trElement);
    

    for (let j = 0; j < 7; j++){
        var tdElement1 = document.createElement("td");
        trElement.appendChild(tdElement1);

        tdElement1.id = i + ","+ j; 


       

        if (i == 0){
            tdElement1.addEventListener("click", function(){
                var pionElement = document.createElement("div");

                var line = 6;

                var divElement = document.getElementById(line + ","+ j);
                

                while (divElement.innerHTML != "" && line > 0){
                    var divElement = document.getElementById(line + ","+ j);
                    line--;
                }
                if (divElement.innerHTML == ""){
                    divElement.appendChild(pionElement);
                    if (click == true){
                        pionElement.className = "pion1";
                        pionElement.innerHTML="!";
                       

                        click = false;
                        

                        
                        
                   













                    }
                    else{
                        pionElement.className = "pion2";
                        pionElement.innerHTML="*";
                    

                        click = true;
                    }
                }

                
                


            })
        }
    }

}



