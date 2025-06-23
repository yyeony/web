var btn = document.querySelectorAll('.wrap li');
var current; // 현재 위치 
var numberDigit = '';
var result = 0;
var isResult = false;

for(var i=0; i< btn.length; i++){
    // console.log(btn[i]);
    btn[i].addEventListener('click',(e)=>{
        var clickIndex = e.target.getAttribute('data-num');



        //부호 음수/양수
        if(clickIndex === '+/-'){
            if (numberDigit !== ''){
                numberDigit = (Number(numberDigit)* -1).toString();
                document.querySelector('.display').innerHTML = numberDigit;
            }else if(result !== 0){
                result = result * -1;
                document.querySelector('.display').innerHTML = '<span class="result">'
            }
            return;
        }     
       
        numberDigit += clickIndex;

        document.querySelector('.display').innerHTML = numberDigit; 




        if(clickIndex == '='){
            current = numberDigit.split(/([+\-x/=%])/);
            console.log(current);

            if (result === 0) { // 첫 계산
                result = Number(current[0]);
            }

            if(current[1] == "+"){
                result += Number(current[2]);
            } else if(current[1] == "-"){
                result -= Number(current[2]);
            } else if(current[1] == "x"){
                result *= Number(current[2]);
            } else if(current[1] == "/"){
                result /= Number(current[2]);
            } else if(current[1] == "%"){
                result %= Number(current[2]);
            }


            console.log(result);

            if(!Number.isInteger(result)){
                result = parseFloat(result.toFixed(6));
            }

            document.querySelector('.display').innerHTML = '<span class="result">' + result + '</span>'; 

            numberDigit = '';
            isResult = true;
        }else if(clickIndex == 'ac'){
            result=0;
            document.querySelector('.display').innerHTML = 0;
            numberDigit = '';
        }

           

    })
    
}