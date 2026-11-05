import { Classement } from "./classement";

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
    if (this.joueur1pts === 1) {
      return "Quinze-Zéro";
    }
    return "Zéro-Zéro";
  }
}
