import axios from "axios";
import { type Character } from "../models";

const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacter = (id: number) => {
    return axios.get<Character>(`${BASE_URL}/character/${id}`);
}