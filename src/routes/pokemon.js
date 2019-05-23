import { Router } from 'express';
import { pokemonController } from '../controllers';

const pokemon = Router();

pokemon.get('/', pokemonController.list);

pokemon.get('/:pokedexNumber', pokemonController.view);

pokemon.post('/', pokemonController.add);

pokemon.put('/:pokedexNumber', pokemonController.update);

pokemon.delete('/:pokedexNumber', pokemonController.remove);

export default pokemon;
