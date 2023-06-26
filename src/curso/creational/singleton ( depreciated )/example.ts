export class SingletonBasic {
    // Variavel que seria instancia global que pega via get static
    private static _instance?: SingletonBasic;

    // So ter como usar construct quando pegar instance
    private constructor() {
        console.log('Um exemplo simples de singleton');
    }

    // Get de instance
    public static get instance(): SingletonBasic {
        // Se nao existir, cria 1 vez e nunca mais
        if (this._instance == undefined) {
            this._instance = new SingletonBasic();    
        };
        
        return this._instance;
    }
}

// Pegando instance
const instancia = SingletonBasic.instance;
const instanciaClone = SingletonBasic.instance;
const instanciaSla = SingletonBasic.instance;


console.log(instancia == instanciaClone);

/**
 * Um exemplo simples de singleton
 * true
 */
