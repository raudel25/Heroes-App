import { getHeroesByPublisher } from "../../selectors/getHeroes";
import HeroeCard from "./HeroeCard";
import { useMemo } from "react";

const HeroesList = ({ publisher }: { publisher: string }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="card-columns animate__animated animate__bounce">
      {heroes.map((hero) => (
        <HeroeCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroesList;
