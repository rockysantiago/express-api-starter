import axios from 'axios';
import axiosInterceptor from '../config/axiosInterceptor';
const {
  requestInterceptor,
  responseInterceptor,
  errorInterceptor
} = axiosInterceptor;

const findAll = async () => {
  const instance = axios.create();
  instance.interceptors.request.use(requestInterceptor, errorInterceptor);
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
  return await instance.get('http://localhost:3001/pokedex');
};

const findByPokedexNumber = async pokedexNumber => {
  const instance = axios.create();
  instance.interceptors.request.use(requestInterceptor, errorInterceptor);
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
  return await instance.get(`http://localhost:3001/pokedex/${pokedexNumber}`);
};

const create = async data => {
  const instance = axios.create();
  instance.interceptors.request.use(requestInterceptor, errorInterceptor);
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
  return await instance.post(`http://localhost:3001/pokedex`, data);
};

const updateByPokedexNumber = async (pokedexNumber, data) => {
  const instance = axios.create();
  instance.interceptors.request.use(requestInterceptor, errorInterceptor);
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
  return await instance.put(
    `http://localhost:3001/pokedex/${pokedexNumber}`,
    data
  );
};

const deleteByPokedexNumber = async pokedexNumber => {
  const instance = axios.create();
  instance.interceptors.request.use(requestInterceptor, errorInterceptor);
  instance.interceptors.response.use(responseInterceptor, errorInterceptor);
  return await instance.delete(
    `http://localhost:3001/pokedex/${pokedexNumber}`
  );
};

export default {
  findAll,
  findByPokedexNumber,
  create,
  updateByPokedexNumber,
  deleteByPokedexNumber
};
