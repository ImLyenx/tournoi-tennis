import { describe, expect, it } from "vitest";
import { Jeu } from "./jeu";

const classement = { enregistrer() {} };

describe("Jeu", () => {
  it("annonce 0-0 au début du match", () => {
    const jeu = new Jeu("Alice", "Bob", classement);
    expect(jeu.score()).toBe("Zéro-Zéro");
  });
});