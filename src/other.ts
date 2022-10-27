import { ModCallback } from "isaac-typescript-definitions";
import { modUpgraded } from "./main";

export function addFunc(func: () => void): void {
  modUpgraded.AddCallback(ModCallback.POST_UPDATE, func);
}
