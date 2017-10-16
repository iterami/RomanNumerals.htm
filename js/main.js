'use strict';

function repo_init(){
    core_repo_init({
      'title': 'RomanNumerals.htm',
    });

    document.getElementById('input').oninput = handle_input;
}
