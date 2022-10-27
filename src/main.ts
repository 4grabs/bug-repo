import { ModCallback } from "isaac-typescript-definitions";
import { upgradeMod } from "isaacscript-common";
import { Foo } from "./foo";

const MOD_NAME = "bug-repo";

const mod = RegisterMod(MOD_NAME, 1);
export const modUpgraded = upgradeMod(mod);

main();

function main() {
  const foo = new Foo(modUpgraded);
}
