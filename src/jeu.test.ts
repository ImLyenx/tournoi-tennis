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

  it("annonce 30-15 quand J1 a 30 et J2 a 15", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 2);
    marquer(jeu, "Bob", 1);
    expect(jeu.score()).toBe("Trente-Quinze");
  });

  it("annonce 40-30 quand J1 a 40 et J2 a 30", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 3);
    marquer(jeu, "Bob", 2);
    expect(jeu.score()).toBe("Quarante-Trente");
  });

  it("annonce 15-A quand J1 et J2 ont 15", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 1);
    marquer(jeu, "Bob", 1);
    expect(jeu.score()).toBe("Quinze-A");
  });

  it("annonce 30-A quand J1 et J2 ont 30", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 2);
    marquer(jeu, "Bob", 2);
    expect(jeu.score()).toBe("Trente-A");
  });

  it("annonce égalité à 40-40", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    marquer(jeu, "Alice", 3);
    marquer(jeu, "Bob", 3);
    expect(jeu.score()).toBe("Égalité");
  });
});
