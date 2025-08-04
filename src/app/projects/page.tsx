import React from "react";

import s from "./Projects.module.scss";
import Link from "next/link";
import { getAllCharacters } from "@/lib/rick-and-morty-api";
import Image from "next/image";

const characters = await getAllCharacters();

const page = async () => {
  return (
    <div>
      <div className={s.cards}>
        {characters.map((t: any) => {
          return (
            <Link key={t.id} className={s.card} href={`/projects/${t.id}`}>
              <h2>{t.name}</h2>
              <h2>{t.status}</h2>
              <div className={s.imageContainer}>
                <Image src={t.image} alt={""} fill className={s.image} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
