type Project = {
  id: string;
  title: string;
  description: string;
  fullContent: string;
};

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Сайт-визитка для фотографа",
    description:
      "Сверстан по макету из Figma, адаптирован под мобильные устройства.",
    fullContent:
      "Это был сложный проект с нестандартной сеткой в стиле Masonry. Для удобства поддержки стилей активно использовались SCSS переменные и миксины. Главной задачей было обеспечить быструю загрузку изображений высокого качества.",
  },
  {
    id: "2",
    title: "Лендинг для онлайн-курсов",
    description: "Яркий дизайн с CSS-анимациями для привлечения внимания.",
    fullContent:
      'Основной упор был сделан на интерактивность и "вау-эффект". Применял Intersection Observer API для запуска CSS-анимаций в момент, когда пользователь доскролливает до блока. Это создает ощущение живого и динамичного сайта.',
  },
  {
    id: "3",
    title: "Панель администратора",
    description: "Чистый и функциональный интерфейс для управления контентом.",
    fullContent:
      "Здесь главным было удобство и скорость работы, а не дизайн. Минимум графики, максимум функциональности. Реализована сортировка и фильтрация таблиц на стороне клиента с помощью JavaScript для мгновенного отклика интерфейса.",
  },
];

export const getAllProjects = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return PROJECTS;
};


export const getProjectById = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const project = PROJECTS.find(project => project.id === id)

    return project
}
