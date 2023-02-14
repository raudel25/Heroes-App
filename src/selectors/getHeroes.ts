import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: string) => {
  let validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} is not valid`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export const getHeroesById = (id: string) => {
  return heroes.find((heroe) => heroe.id === id);
};
