import { getHeroesById, getHeroesByPublisher } from "../../selectors/getHeroes";
import HeroeCard from "./HeroeCard";

const HeroesList = ({ publisher }: { publisher: string }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="card-columns">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} heroe={heroe} />
      ))}
    </div>
  );
};

export default HeroesList;
