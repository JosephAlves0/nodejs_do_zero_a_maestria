// mais de um valor
const x = 10;
const y = "Carro";
const z = [1,2];

console.log(x,y,z);

//contagem de impressões
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);
console.count(`o valor de x é ${x}, contagem`);

// variavel entre string
console.log("O nome é %s", y);

// limpar console
setTimeout(() => {
    console.clear()
}, 2000);