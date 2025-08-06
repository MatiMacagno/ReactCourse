export interface Character {
    id: number;
    name: string;
    gender: string;
    status: string;
}

export const emptyCharacter: Character = {
    id: 0,
    name: '',
    gender: '',
    status: ''
};