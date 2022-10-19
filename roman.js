var romanToInt = function (s) {
   
    var stringArray = s.split('');
    var I = 1;
    var V = 5;
    var X = 10;
    var L = 100;
    var C = 100;
    var D = 500;
    var M = 1000;
    console.log(stringArray);
    let i = 0;
    let v = 0;
    
    let ans = 0;
    for(var n = 0 ; n < stringArray.length ; n++){
        console.log(stringArray[n]);
        if (stringArray[n] == 'I'){
            ans = ans + 1;
        }
        else if (stringArray[n] == 'V' && ans == 1){
            ans = ans + 3;
        }
        else if (stringArray[n] == 'V') {
            ans = ans + 5;
        }
        else if (stringArray[n] == 'X' && ans == 1) {
            ans = ans + 8;
        }
        else if (stringArray[n] == 'X') {
            ans = ans + 10;
        }
        else if (stringArray[n] == 'L' && ans == 1) {
            ans = ans + 98;
        }
        else if (stringArray[n] == 'L') {
            ans = ans + 100;
        }


    }
    console.log(ans)
};

romanToInt('LVIII')