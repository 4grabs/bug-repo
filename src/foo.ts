/* eslint-disable class-methods-use-this */
import { ModCallback } from "isaac-typescript-definitions";
import { Callback, ModFeature } from "isaacscript-common";

export class Foo extends ModFeature {
  @Callback(ModCallback.POST_NPC_UPDATE)
  update(): void {
    print("We're here.");
  }

  @Callback(ModCallback.PRE_NPC_UPDATE)
  preUpdate(): boolean {
    return true;
  }
}
