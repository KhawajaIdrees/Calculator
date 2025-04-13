let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');

let expression = '';
let memory = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.textContent;

        if (value === 'C') {
            expression = '';
            input.value = '';
        } else if (value === '=') {
            try {
                expression = eval(expression).toString();
                input.value = expression;
            } catch (err) {
                input.value = 'Error';
                expression = '';
            }
        } else if (value === 'M+') {
            try {
                let currentValue = eval(expression);
                memory += currentValue;
                input.value = `M+ ${currentValue} = ${memory}`;
                expression = '';
            } catch (err) {
                input.value = 'Error';
                expression = '';
            }
        } else if (value === 'M-') {
            try {
                let currentValue = eval(expression);
                memory -= currentValue;
                input.value = `M- ${currentValue} = ${memory}`;
                expression = '';
            } catch (err) {
                input.value = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            input.value = expression;
        }
    });
});
