import ReactDOM from "react-dom/client";
import { HeroesApp } from "./HeroesApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<HeroesApp />);
