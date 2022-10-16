/* eslint-disable class-methods-use-this */
import { EntityType, GaperVariant } from "isaac-typescript-definitions";
import {
  CallbackCustom,
  DefaultMap,
  defaultMapGetHash,
  ModCallbackCustom,
  ModFeature,
} from "isaacscript-common";

enum FooState {
  BAR,
}

interface FooData {
  state: FooState;
}

export class Foo extends ModFeature {
  v = {
    room: {
      fooData: new DefaultMap<PtrHash, FooData>(() => ({
        state: FooState.BAR,
      })),
    },
  };

  @CallbackCustom(
    ModCallbackCustom.POST_NPC_UPDATE_FILTER,
    EntityType.GAPER,
    GaperVariant.FLAMING_GAPER,
  )
  update(npc: EntityNPC): void {
    const data = defaultMapGetHash(this.v.room.fooData, npc);
    this.stateBar(npc, data);
  }

  stateBar(npc: EntityNPC, _data: FooData): void {
    npc.Pathfinder.MoveRandomlyBoss(true);
  }
}
