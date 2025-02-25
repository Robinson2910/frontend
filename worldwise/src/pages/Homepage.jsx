// then all the classes that we define

// in the module are basically exported

// into this one big object that we can then use.

import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    // when classes are imported from external css modules,className + some id name is added to the classNAme in the dom
    //so if any other component calls the same module again same className + some id will be added ,hence the className is different from others
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think of. Never forget your
          wonderful experiences, and show your friends how you have wandered the world.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
