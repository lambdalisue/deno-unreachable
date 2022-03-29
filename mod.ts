/**
 * Unreachable error
 */
export class UnreachableError extends Error {
  args: unknown[];

  constructor(args: unknown[]) {
    super(`Unreachable: ${args}`);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, UnreachableError);
    }

    this.name = "UnreachableError";
    this.args = args;
  }
}

/**
 * Function indicating that this part is unreachable.
 *
 * For example, the following code passed type checking.
 *
 * ```ts
 * import { unreachable } from "./mod.ts";
 *
 * type Animal = "dog" | "cat";
 *
 * function say(animal: Animal): void {
 *   switch (animal) {
 *     case "dog":
 *       console.log("dog");
 *       break;
 *     case "cat":
 *       console.log("dog");
 *       break;
 *     default:
 *       unreachable(animal);
 *   }
 * }
 * say("dog");
 * main();
 * ```
 *
 * But the following code because a case for "bird" is missing.
 *
 * ```ts
 * import { unreachable } from "./mod.ts";
 *
 * type Animal = "dog" | "cat" | "bird";
 *
 * function say(animal: Animal): void {
 *   switch (animal) {
 *     case "dog":
 *       console.log("dog");
 *       break;
 *     case "cat":
 *       console.log("dog");
 *       break;
 *     default:
 *       unreachable(animal);
 *   }
 * }
 * say("dog");
 * main();
 * ```
 */
export function unreachable(...args: never[]): never {
  throw new UnreachableError(args);
}
