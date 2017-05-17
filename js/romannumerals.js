'use strict';

function convert(number){
    if(number === 0){
        return '';
    }

    try{
        for(var i = 0; i < 13; i++){
            if(number < romannumerals[i][0]){
                continue;
            }

            return romannumerals[i][1] + convert(number - romannumerals[i][0]);
        }

    }catch(error){
        return '-';
    }
}

function handle_input(){
    var input = parseInt(
      document.getElementById('input').value.replace(
        /,/g, ''
      ),
      10
    );
    var output = '';

    if(!isNaN(input)){
        output = convert(parseFloat(input));

        if(output.slice(-1) === '-'){
            output = '';
        }
    }

    document.getElementById('output').value = output;
}

var romannumerals = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

window.onload = function(e){
    document.getElementById('input').oninput = handle_input;
};
