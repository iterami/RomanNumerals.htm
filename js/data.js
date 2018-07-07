'use strict';

function convert(number){
    if(number === 0){
        return '';
    }

    try{
        for(var i = 0; i < romannumerals.length; i++){
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
    var input = Number.parseInt(
      document.getElementById('input').value.replace(
        /,/g, ''
      ),
      10
    );
    var output = '';

    if(!Number.isNaN(input)){
        output = convert(Number.parseFloat(input));

        if(output.slice(-1) === '-'){
            output = '';
        }
    }

    document.getElementById('output').value = output;
}
