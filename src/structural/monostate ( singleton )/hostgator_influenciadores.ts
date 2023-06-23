import { Influenciadores } from "./influenciadores";

export class HostGatorInfluenciadores {
    // Variavel "compartilhada"
    private static members: Influenciadores[] = [];

    constructor() {

    }

    // Adicionar membros 
    setMembers(...members: Influenciadores[]) {
        members.forEach(item => HostGatorInfluenciadores.members?.push(item))
    }

    // Pegar membros da variavel estatica
    getMembers(): Influenciadores[] {
        return HostGatorInfluenciadores.members;
    }
}

const hostGator = new HostGatorInfluenciadores();

const hostGator2 = new HostGatorInfluenciadores();

const member = new Influenciadores('Gato', 'Gato galatico')

hostGator.setMembers(member);

console.log(`Instancia são iguais?\nR: ${hostGator == hostGator2}\n`);
console.log(`Valores estaticos?\nR:${hostGator.getMembers()[0].name}\nR:${hostGator2.getMembers()[0].name}`);

/**
 * Saida:
Instancia são iguais?R: false

Valores estaticos?
R: Gato
R:Gato
 */

// Diferente do singleton que quebra SOLID, monostate pode criar até um segurança a mais para uso da variavel estatica