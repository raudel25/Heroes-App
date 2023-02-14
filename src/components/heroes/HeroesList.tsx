import { getHeroesById, getHeroesByPublisher } from "../../selectors/getHeroes";

const HeroesList = ({ publisher }: { publisher: string }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};

export default HeroesList;
