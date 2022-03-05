import { dirname, fromFileUrl, join } from "../deps.ts";
import { assert, assertExists, assertArrayIncludes } from "https://deno.land/std/testing/asserts.ts";
import { Location } from "./location.ts";

Deno.test("get contents", async () => {
  const location = new Location({
    id: "12.02",
    name: "models",
    path: dirname(fromFileUrl(import.meta.url)),
  });

  assertArrayIncludes(await location.getContents(), [{
    isDirectory: false,
    isFile: true,
    isSymlink: false,
    name: "location.test.ts",
  }]);
});
