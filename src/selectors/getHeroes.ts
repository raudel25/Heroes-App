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
