import {OPERATORS} from 'common/config';

function integerRandom(number = 0){
    return Math.ceil((Math.random()) * number);
}

export function mobile(){
    let operator = OPERATORS[integerRandom(OPERATORS.length - 1)];
    let section = (function(){
        let number = [];
        for(let i = 0;i < 8;i++){
            number.push(integerRandom(9));
        }
        return number.join('');
    }());
    let a = [1, operator.key, operator.value[integerRandom(operator.value.length - 1)], section].join('');
    return a.replace(/(\d{3})\d{4}(\d{4})/,'$1****$2');
}