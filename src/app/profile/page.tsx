import React from "react";

import s from './Profile.module.scss'
import ContactButton from "@/components/contact-button/ContactButton";

const page = () => {
  return (
    <section className={s.card}>
      <h2 className={s.title}>Имя Фамилия</h2>
      <p>Начинающий Next.js-разработчик, мастер вёрстки</p>
      <ul className={s.list}>
        <li>Умею: HTML, CSS, SCSS</li>
        <li>Учу: TypeScript, Next.js</li>
        <li>Хобби: Путешествия</li>
      </ul>
       <ContactButton/>
    </section>
  );
};

export default page;
