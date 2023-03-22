function cifrar(offset, mensagem) {
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);

        if (codLetraAscii >= 65 && codLetraAscii <= 90) {
            let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
            resultado += String.fromCharCode(calculoOffset)
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
            let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
            resultado += String.fromCharCode(calculoOffset)
        }else {
            resultado += String.fromCharCode(codLetraAscii)
        }
    }

    return resultado;
}

let msg1 = cifrar(1, "BANANA")
let msg2 = cifrar(6, "ZUMBA")

console.log(msg1)
console.log(msg2)

function decode(offset, mensagem) {
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        let codLetraAscii = mensagem.charCodeAt(i);

        if (codLetraAscii >= 65 && codLetraAscii <= 90) {
            let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
            resultado += String.fromCharCode(calculoOffset)
        } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
            let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
            resultado += String.fromCharCode(calculoOffset)
        }else {
            resultado += String.fromCharCode(codLetraAscii)
        }
    }

    return resultado;
}

console.log(decode(1, msg1))
console.log(decode(6, msg2))