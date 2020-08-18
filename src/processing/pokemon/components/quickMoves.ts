import { Component, IComponent } from "@core/pipeline";
import { ItemTemplate } from "@income";
import { Pokemon } from "@outcome/pokemon";
import { Util } from "@util";

@Component({
  pipeline: "pokemon",
})
export class QuickMoves implements IComponent {
  Process(pokemon: Pokemon, rawPokemon: ItemTemplate): Pokemon {
    if (rawPokemon.pokemon.quickMoves) {
      pokemon.quickMoves = rawPokemon.pokemon.quickMoves.map(
        Util.SnakeCase2Identifyable
      );
      return pokemon;
    }
  }
}
