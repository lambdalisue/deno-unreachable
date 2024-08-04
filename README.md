> [!WARNING]
>
> Use `unreachable` provided by [`@core/errorutil`](https://jsr.io/@core/errorutil) instead
>
> - https://github.com/jsr-core/errorutil

# unreachable

[![jsr](https://img.shields.io/jsr/v/%40lambdalisue/unreachable?logo=javascript&logoColor=white)](https://jsr.io/@lambdalisue/unreachable)
[![denoland](https://img.shields.io/github/v/release/lambdalisue/deno-unreachable?logo=deno&label=denoland)](https://github.com/lambdalisue/deno-unreachable/releases)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/unreachable/mod.ts)
[![Test](https://github.com/lambdalisue/deno-unreachable/workflows/Test/badge.svg)](https://github.com/lambdalisue/deno-unreachable/actions?query=workflow%3ATest)

A type-check utility function to indicating that the code is unreachable.

[deno]: https://deno.land/

## Usage

For example, the following code passed type checking.

```typescript
import { unreachable } from "https://deno.land/x/unreachable@$MODULE_VERSION/mod.ts";

type Animal = "dog" | "cat";

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
```

But the following code because a case for `"bird"` is missing.

```
import { unreachable } from "https://deno.land/x/unreachable@$MODULE_VERSION/mod.ts";

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
```

## License

The code follows MIT license written in [LICENSE](./LICENSE). Contributors need
to agree that any modifications sent in this repository follow the license.
