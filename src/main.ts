/* eslint-disable no-new */
import { ModCallback } from "isaac-typescript-definitions";
import { upgradeMod } from "isaacscript-common";
import { Foo } from "./foo";

const MOD_NAME = "bug-repo";

main();

function main() {
  // Instantiate a new mod object, which grants the ability to add callback functions that
  // correspond to in-game events.
  const mod = RegisterMod(MOD_NAME, 1);
  const modUpgraded = upgradeMod(mod);

  // Register a callback function that corresponds to when a new run is started.
  mod.AddCallback(ModCallback.POST_GAME_STARTED, postGameStarted);

  // Print a message to the "log.txt" file.
  Isaac.DebugString(`${MOD_NAME} initialized.`);

  new Foo(modUpgraded);
}

function postGameStarted() {
  Isaac.DebugString("Callback triggered: POST_GAME_STARTED");
}
