import { pokemonService } from '../services';
import { wrapper } from '../utils';

const list = wrapper(async (req, res) => {
  const response = await pokemonService.findAll();
  return res.status(200).json(response.data);
});

const view = wrapper(async (req, res) => {
  const pokedexNumber = req.params.pokedexNumber;
  const response = await pokemonService.findByPokedexNumber(pokedexNumber);
  return res.status(200).json(response.data);
});

const add = wrapper(async (req, res) => {
  const data = req.body;
  const response = await pokemonService.create(data);
  return res.status(200).json(response.data);
});

const update = wrapper(async (req, res) => {
  const pokedexNumber = req.params.pokedexNumber;
  const data = req.body;
  const response = await pokemonService.updateByPokedexNumber(
    pokedexNumber,
    data
  );
  return res.status(200).json(response.data);
});

const remove = wrapper(async (req, res) => {
  const pokedexNumber = req.params.pokedexNumber;
  const response = await pokemonService.deleteByPokedexNumber(pokedexNumber);
  return res.status(200).json(response.data);
});

export default {
  list,
  view,
  add,
  update,
  remove
};
