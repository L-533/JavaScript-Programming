/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const array = s.split('');
    let valid = array.length;
    const opened = []; // Rastrea el orden de apertura

    for (let i = 0; i < array.length; i++) {
        const char = array[i];
        if (char === null) continue; // Ignorar caracteres ya emparejados

        let shouldBreakSwitch = false;

        switch (char) {
            case "(":
            case "[":
            case "{":
                opened.push(char); // Guardar el orden de apertura
                break;
            case ")":
                if (opened.pop() !== "(") return false;
                valid -= 2;
                break;
            case "]":
                if (opened.pop() !== "[") return false;
                valid -= 2;
                break;
            case "}":
                if (opened.pop() !== "{") return false;
                valid -= 2;
                break;
            default:
                return false; // Carácter inválido
        }
    }

    return valid === 0 && opened.length === 0;
};
