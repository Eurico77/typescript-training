// static
// com o uso do tipo static, não é possível acessar o atributo de instância
// com o uso do tipo static, é possível acessar o atributo de classe

// membros estáticos são acessados com o nome da classe e não com o nome da instância
// exemplo: 
// const nome = Usuario.nome
   
class Matematica {
    static soma(a: number, b: number): number {
        return a + b; 
    }

    static subtracao(a: number, b: number): number {
        return a - b;
    }
}

console.log(Matematica.soma(1, 2));


class Usuario {
    static nome: string = 'João';

    static idade: number = 27;

    static mostrarNome(): void {
        console.log(Usuario.nome);
    }
    
}

const use = Usuario.mostrarNome();