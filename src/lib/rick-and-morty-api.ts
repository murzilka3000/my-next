import { assert, error } from "console";

export const getCharacterById = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );

  if (response.status === 404) {
    return null;
  } else if(!response.ok) {
    throw new Error("Не удалось получить данные. Сервер ответил ошибкой.");
  }

 

  const data = await response.json();

  return data;
};




export const getAllCharacters = async () => {
    const response = await fetch(
        'https://rickandmortyapi.com/api/character', {
            next: {revalidate: 10}
        }
    );

    if(!response.ok) {
        throw new Error("Не удалось получить данные. Сервер ответил ошибкой.");
    }

    const data = await response.json();

    return data.results;
};
