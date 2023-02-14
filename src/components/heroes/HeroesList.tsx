import { getHeroesById, getHeroesByPublisher } from "../../selectors/getHeroes";
import HeroeCard from "./HeroeCard";

const HeroesList = ({ publisher }: { publisher: string }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroesList;
