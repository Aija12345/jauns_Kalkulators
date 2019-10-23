

    // Mainīgais,kas paredzēts pirmajam ievadītajam skaitlim skaitlim
    let prevVal = "";
     
    // mainīgais, kas paredzēts otrajam ievadītajam skaitlim
    let newVal = "";
     
    // mainīgais, kas paredzēts darbības rezultātam
    let resultVal = "";
     
    // mainīgais, kas paredzēts matemātiskajam operatoram
    let mathOperator = "";
     
    // mainīgais, kas paredzēts decimālajai zīmei (komatam)
    let decimalClicked = false;
     
     
    // Funkcija, kura tiek izsaukta nospiežot cipara pogu (skaitļu iegūšana)
    function numButPress(num){
        // Pārbauda vai poga ar skaitli ir nospiesta
        if(resultVal){
            // piešķir mainīgajam newVal nospiesto pogu vērtību
            newVal = num;
            // Atjauno mainīgā resultVal vērtību (tukšs)
            resultVal = "";
        } else {
            // Pārbauda decimālā skaitļa esamību
            if(num === '.'){
                if(decimalClicked != true){
                    newVal += num;
                    decimalClicked = true;     //konkeetenēšana: rodas, pie.,  2.3
                }
            } else {
                newVal += num;        //konketenēšana: rodas, piem., 23
            }
        }
        
        // Atjauno skaitļa vērtībi ievades laukā
        document.getElementById("entry").value = newVal;
    }
    
    
    // Funkcija, kura tiek izsaukta nospiežot matemātiskās darbības pogu 
    function mathButPress(operator){
      
        //Pārbauda, kas atrodas skaitļu ievades laukā pirms matemātiskās darbības nospiešanas
        if(!resultVal){
            prevVal = newVal;  // ja nav redzams iepriekšējās darbības rezultāts
        } else {
            prevVal = resultVal; // ja ir redzams iepriekšējās darbības rezultāts, tad mainīgajam prevVal piešķir iepriekšējo aprēķinu rezultātu
        }
        
    // Atjauno mainīgo sākotnējās vērtību
        newVal = "";
        decimalClicked = false;
        mathOperator = operator;
        resultVal = "";
        document.getElementById("entry").value = "";
    }
     
    // Funkcija, kura tiek izsaukta nospiežot vienādības zīmes pogu 
    function equalButPress(){
        // Atjauno mainīgā sākotnējo vērtību
        //decimalClicked = false;
     
        // Konvertē ciparu virkni par skaitli
        prevVal = parseFloat(prevVal);
        newVal = parseFloat(newVal);
     
        // Pārpauda un izpilda atbilstošo darbību
        switch(mathOperator){
            case "+":
                resultVal = prevVal + newVal;
                break;
            case "-":
                resultVal = prevVal - newVal;
                break;
            case "*":
                resultVal = prevVal * newVal;
                break;
            case "/":
                resultVal = prevVal / newVal;
                break;
            // Ja ievadītā darbība nesakrīt ar kādu no operatoriem,tad mainīgajam resultVal piešķir mainīgā newVal vērtību
            default:
                resultVal = newVal;
        }
     
        // Lai varētu veikt tālāk aprēķinus ar iepriekšējā darbībā iegūto rezultātu, tad rezultāta vērtību piešķir mainīgajam prevVal
        prevVal = resultVal;
     
        // Aprēķinu rezultāta izvade
        document.getElementById("entry").value = resultVal;
    }
     
    // funkcija, kas notīra ievades lauku
    function clearButPress(){
        prevVal = "";
        newVal = "";
        resultVal = "";
        mathOperator = "";
        decimalClicked = false;
        document.getElementById("entry").value = "0";
    }
     
 