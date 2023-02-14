import { useMemo, useState } from "react";
import { getHeroesByName } from "../../selectors/getHeroes";
import HeroCard from "../heroes/HeroCard";

const SearchScreen = () => {
  const [q, setQ] = useState("");
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleInputChange = ({ target }: any) => {
    setQ(target.value);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              value={q}
              onChange={handleInputChange}
              autoComplete="off"
            />
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" && <div className="alert alert-info">Search a hero</div>}
          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with {q}
            </div>
          )}
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
