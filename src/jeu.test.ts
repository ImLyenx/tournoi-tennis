import { describe, expect, it } from "vitest";
import { Jeu } from "./jeu";

// dummy: il faut juste remplir les parametres de création du jeu, donc un faux classement qui n'est jamais appelé suffit
const classement = { enregistrer() {} };

function marquer(jeu: Jeu, joueur: string, fois: number): void {
  for (let i = 0; i < fois; i++) {
    jeu.pointPour(joueur);
  }
}

describe("Jeu", () => {
  it("annonce 0-0 au début du match", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    expect(jeu.score()).toBe("Zéro-Zéro");
  });

  it("annonce 15-0 quand J1 marque", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    jeu.pointPour("Alice");
    expect(jeu.score()).toBe("Quinze-Zéro");
  });

  it("annonce 30-0 quand J1 marque deux fois", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 2);
    expect(jeu.score()).toBe("Trente-Zéro");
  });

  it("annonce 0-15 quand J2 marque", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    jeu.pointPour("Bob");
    expect(jeu.score()).toBe("Zéro-Quinze");
  });
});
