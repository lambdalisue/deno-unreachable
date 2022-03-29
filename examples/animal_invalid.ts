import { unreachable } from "../mod.ts";

type Animal = "dog" | "cat" | "bird";

function say(animal: Animal): void {
  switch (animal) {
    case "dog":
      console.log("dog");
      break;
    case "cat":
      console.log("dog");
      break;
    default:
      unreachable(animal);
  }
}
say("dog");
