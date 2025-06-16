'use strict';

function convert(number){
    if(number <= 0){
        return '';
    }

    for(const numeral of numerals){
        if(number < numeral[0]){
            continue;
        }

        return numeral[1] + convert(number - numeral[0]);
    }
}

function handle_input(){
    const input = core_elements.input.value;

    if(input.length === 0
      || globalThis.isNaN(input)){
        core_elements.output.value = '';
        document.title = core_repo_title;
        return;
    }

    const output = convert(input);
    core_elements.output.value = output;
    document.title = input + ' = ' + output;
}

function repo_init(){
    core_repo_init({
      'events': {
        'input': {
          'oninput': handle_input,
        },
      },
      'globals': {
        'numerals': [
          [1000000, 'M\u0305'],
          [500000, 'D\u0305'],
          [100000, 'C\u0305'],
          [50000, 'L\u0305'],
          [10000, 'X\u0305'],
          [5000, 'V\u0305'],
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
        ],
      },
      'title': 'RomanNumerals.htm',
      'ui-elements': [
        'input',
        'output',
      ],
    });
}
