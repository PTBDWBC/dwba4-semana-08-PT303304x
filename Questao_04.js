class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }
    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    situacao() {
        let media = this.media();
        if (media > 6) {
            return "Aprovado";
        } else { 
            return "Reprovado"; 
        }
    }
}

let alunos = [
    new Aluno("João", "Silva", 7, 8.5),
    new Aluno("Pedro", "Gabriel", 4.3, 10),
    new Aluno("Ana", "Clara", 1, 8),
    new Aluno("Maria", "Julia", 2, 2),
    new Aluno("Gabriela", "Nunes", 4.5, 7.8)
];
for (let i = 0; i < 5; i++) {
    alert("Nome completo: "+ alunos[i].nomeCompleto() + "\n Média: " + alunos[i].media() + "\n Situação: " + alunos[i].situacao() )
}
