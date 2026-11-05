import { Classement } from "./classement";

const ANNONCES = ["Zéro", "Quinze", "Trente", "Quarante"];

export class Jeu {
  private joueur1pts = 0;
  private joueur2pts = 0;

  constructor(
    private readonly joueur1: string,
    private readonly joueur2: string,
    private readonly classement: Classement,
  ) {}

  pointPour(joueur: string): void {
    if (joueur === this.joueur1) {
      this.joueur1pts++;
    } else {
      this.joueur2pts++;
    }
  }

  score(): string {
    return `${ANNONCES[this.joueur1pts]}-${ANNONCES[this.joueur2pts]}`;
  }
}
