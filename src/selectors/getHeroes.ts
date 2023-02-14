import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
  let validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroesById = (id: string | undefined) => {
  return heroes.find((hero) => hero.id === id);
};

export const getHeroesByName = (query: string) => {
  if (query === "") {
    return [];
  }

  query = query.toLowerCase();
  return heroes.filter(
    (hero) =>
      hero.superhero.toLowerCase().includes(query) ||
      hero.alter_ego.toLowerCase().includes(query) ||
      hero.characters.toLowerCase().includes(query) ||
      hero.first_appearance.toLowerCase().includes(query)
  );
};
