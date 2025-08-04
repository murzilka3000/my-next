import { getProjectById } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { getCharacterById } from "@/lib/rick-and-morty-api";

type PageProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: PageProps) => {
  const character = await getCharacterById(params.id);

  if (!character) {
    return (
      <div>
        <p>проект не найден</p>
        <Link href={"/projects"}>вернуться обратно</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{character.status}</h1>
      <p>{character.species}</p>
      <img src={character.image} alt={character.name} />
      <Link href={"/projects"}>вернуться обратно</Link>
    </div>
  );
};

export default page;
