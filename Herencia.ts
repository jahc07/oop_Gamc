export class Pokedex {
    private generacion: string;
    private nombrePoke: string;
    private tipoPoke: string;
    public constructor(genpok: string, nompok: string, tippok: string) {
        this.generacion = genpok;
        this.nombrePoke = nompok;
        this.tipoPoke = tippok;
    }
    public getinfoBasica(): string {
        return `Generacion del Pokemon : ${this.generacion}.
                Nombre del Pokemon : ${this.nombrePoke}.
                Tipo del Pokemon : ${this.tipoPoke}.`;
    }
}
export class charmander extends Pokedex {
    protected gen1: number;
    protected numeropokedex: number;
    public constructor(gen: string, nom: string, tip: string) {
        super(gen, nom, tip);
    }
    public getinfoBasica(): string {
        return `Generacion del Pokemon : ${this.generacion}.
                Nombre del Pokemon : ${this.nombrePoke}.
                Tipo del Pokemon : ${this.tipoPoke}.`;
    }
}