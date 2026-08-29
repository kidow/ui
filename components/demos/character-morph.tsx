"use client";

import { CharacterMorph } from "@/components/kidow/character-morph";

export default function CharacterMorphDemo() {
  return (
    <div className="flex items-center justify-center">
      <CharacterMorph
        texts={["Hello", "World", "Morph", "Effect"]}
        className="font-bold text-4xl text-foreground"
      />
    </div>
  );
}
