// 1 запросить число и его степень в качестве параметров. 
//  не забудьте проверить что степень может быть 0 или отрицательная

/*

function exponent(number,exp){
    
    if (exp === 0) {
        result = 1;
    }else if (exp < 0) {
        alert ("Please go without negative exponent! Next time :)");
    }else if (exp > 0){
        result = number**exp
    }
    return result;
}

console.log(exponent(5,2));


//=========================================================================================


// 2 делить число 1000 на 2 до тех пор, пока не получится число меньше 50. 
//   вывести это число (результат) и сколько раз делений произвели

function secondtask(main_number, segment, no_more) {
    let count = 0;
    while (main_number > no_more){
        main_number = main_number / segment;
        count += 1
    }
    alert ('Number ' + main_number + ' and counting '  + count + "   Good luck:)");
}
secondtask(1000,2,50);
*/


//==========================================================================================
// 3 пользователь вводит число. найти ближайшее к нему, которое кратно на 11



function near_number(a, b){
    let result = a % b;
    let a_minus = a;
    let a_plus = a;
    let result_plus, result_minus;
    let count_plus = 0;
    let count_minus = 0;
    if (a < b){
        return ("Incorrect");
    }else if (result == 0){
        return a;
    }else {
        while (result_plus != 0){
            a_plus++;
            count_plus++;
            result_plus = a_plus % b;
        while (result_minus != 0){
            a_minus--;
            count_minus++;
            result_minus = a_minus % b;
            
        }
    }
    }
    if (count_plus > count_minus) {
        return a_minus;
    }else {
        return a_plus;
    }
        
}

console.log (near_number (39, 11));
