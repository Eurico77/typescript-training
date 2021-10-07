const dobro = (num: number): number => num * 2;
console.log(dobro(10));


const dizerOla = (nome: string) => !nome ? {nome: 'Nome'} : console.log(`Ola ${nome}`);
dizerOla('João');

const nums = [-3, 33, 38, 10]
console.log(Math.min(...nums));

const arrays: number[] = [55, 20];
console.log(arrays, ...nums);


// asincronismo
// callback
function esperarpor3s(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3s depois');
    }, 3000);
}

esperarpor3s((dado) => {
    console.log(dado);
});

// promisse
function esperarpor3sPromisse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3s depois promisse');
        }, 3000);
    });
}

esperarpor3sPromisse().then(dado => console.log(dado));


fetch('https://swapi.co/api/people/1')
    .then(res => res.json())