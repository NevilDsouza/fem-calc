calcButtons = document.querySelectorAll('.calc-button');
outputEl = document.querySelector(".ans");

exprStr = '';

calcButtons.forEach(button => {
    button.addEventListener('click', e => {
        clickedVal = e.target.textContent;

        if (clickedVal === 'C') {
            // Clear and reset expr 
            exprStr = '';
            outputEl.textContent = 0;
        } else if (clickedVal === '=') {
            if (isNaN(exprStr[exprStr.length - 1])) {
                // exprStr += "0";
            }

            // Remove Multiple consecutive operator 
            for (let i = 0; i < exprStr.length; i++) {
                if (isNaN(Number(exprStr[i])) && isNaN(Number(exprStr[i + 1]))) {
                    exprStr = exprStr.slice(0, i + 1) + exprStr.slice(i + 2, exprStr.length)
                    i--;
                }
            }

            exprStr = String(Math.floor(eval(exprStr.replace(/×/g, "*"))));
            outputEl.textContent = exprStr;
            // exprStr = 0;
        } else if (clickedVal === '←') {
            currNum = outputEl.textContent;
            if (currNum.length > 1) {
                outputEl.textContent = currNum.slice(0, currNum.length - 1);
            } else {
                outputEl.textContent = 0;
            }

        } else {
            if (isNaN(Number(clickedVal))) {
                outputEl.textContent = 0;

                if (exprStr !== '') {
                    exprStr += clickedVal;
                }

            } else {
                outputEl.textContent = Number(outputEl.textContent + clickedVal);
                exprStr += clickedVal;
            }

        }

    });
});

