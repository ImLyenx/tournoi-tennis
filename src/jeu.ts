import { Classement } from "./classement";

const ANNONCES = ["Zéro", "Quinze", "Trente", "Quarante"];

export class Jeu {
  private joueur1pts = 0;

  constructor(
    private readonly joueur1: string,
    private readonly joueur2: string,
    private readonly classement: Classement,
  ) {}

  pointPour(joueur: string): void {
    this.joueur1pts++;
  }

  score(): string {
    return `${ANNONCES[this.joueur1pts]}-Zéro`;
  }
}
