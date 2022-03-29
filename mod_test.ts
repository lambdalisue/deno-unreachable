import { unreachable } from "./mod.ts";

Deno.test("unreachable", () => {
  type Animal = "dog" | "cat";
  function say(animal: Animal): string {
    switch (animal) {
      case "dog":
        return "woof";
      case "cat":
        return "meow";
      default:
        unreachable(animal);
    }
  }
  say("dog");
  say("cat");
});
