'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'input': {
          'oninput': handle_input,
        },
      },
      'globals': {
        'romannumerals': [
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
    });
}
