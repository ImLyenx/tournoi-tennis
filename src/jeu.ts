import { Classement } from "./classement";

const ANNONCES = ["Zéro", "Quinze", "Trente", "Quarante"];
const POINTS_POUR_GAGNER = 4;

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
    const vainqueur = this.vainqueur();
    if (vainqueur) {
      return `Victoire ${vainqueur}`;
    }
    if (this.joueur1pts === 3 && this.joueur2pts === 3) {
      return "Égalité";
    }
    if (this.joueur1pts === this.joueur2pts && this.joueur1pts > 0) {
      return `${ANNONCES[this.joueur1pts]}-A`;
    }
    return `${ANNONCES[this.joueur1pts]}-${ANNONCES[this.joueur2pts]}`;
  }

  private vainqueur(): string | undefined {
    if (this.joueur1pts === POINTS_POUR_GAGNER) {
      return this.joueur1;
    }
    if (this.joueur2pts === POINTS_POUR_GAGNER) {
      return this.joueur2;
    }
    return undefined;
  }
}
