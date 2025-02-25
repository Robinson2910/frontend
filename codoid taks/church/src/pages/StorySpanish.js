import homeImg from "../img/hero1.jpg";
import violin from "../img/violin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function StorySpanish() {
  return (
    <section className="section-story margin-bottom-md" id="story">
      <div className="container">
        <h1 className="heading-story margin-bottom-md center-text highlight">
          Historia de la canción: How Great Thou Art
        </h1>
        <div className="grid-box margin-bottom-small">
          <div className="img-box">
            <img src={homeImg} alt="sweden" className="image" />
          </div>
          <div>
            {" "}
            <p className="para margin-bottom-small">
              El sur de Suecia fue el lugar donde "How Great Thou Art" tuvo su comienzo en 1886. Fue
              escrita en la casa del autor y editor Carl Boberg, miembro del Parlamento sueco de
              1912 a 1931. La canción se conoció en varios países antes de llegar a las costas de
              Estados Unidos.
            </p>
            <p className="para ">
              Boberg dijo de la composición de su canción: "Fue en 1885, y en la época del año en
              que todo parecía estar en su más rico colorido; los pájaros cantaban en los árboles y
              dondequiera que pudieran encontrar una percha. Una tarde, unos amigos y yo habíamos
              ido a Kronobäck, donde habíamos participado en una misa vespertina. Cuando
              regresábamos, una tormenta comenzó a aparecer en el horizonte. Nos apresuramos a
              refugiarnos. Se oyeron fuertes truenos y los relámpagos iluminaron el cielo. Fuertes
              vientos azotaron los prados y los ondulantes campos de cereales. Sin embargo, la
              tormenta pasó pronto y apareció el cielo despejado con un hermoso arco iris".
            </p>
          </div>
        </div>

        <p className="para margin-bottom-small">
          "Al llegar a mi casa, abrí la ventana hacia el mar. Las campanas de la iglesia tocaban la
          melodía de un himno. Esa misma noche escribí un poema que titulé 'O Store Gud' (Qué grande
          eres)".
        </p>

        <p className="para margin-bottom-small">
          Más tarde, el poema se adaptó a una melodía folclórica sueca. En 1907, Manfred von Glehn
          lo tradujo al alemán, y cinco años más tarde un pastor ruso, Ivan Prokhanoff, hizo una
          adaptación al ruso.
        </p>
        <p className="para margin-bottom-small">
          A principios de la década de 1920, el reverendo Stuart K. Hine y su esposa abandonaron su
          hogar en Inglaterra y viajaron a Polonia como misioneros. Allí aprendieron la versión rusa
          de la canción de Boberg, "O Store Gud". Hine escribió entonces la letra original en inglés
          e hizo su propio arreglo de la melodía sueca.
        </p>

        <div>
          <div class="box margin-bottom-md">
            <div class="text">
              <img src={violin} alt="violin" className="fas fa-quote-right fa1" />
              {/* <FontAwesomeIcon icon={faQuoteRight} className="fas fa-quote-right fa1 " /> */}
              <div>
                <p className="para margin-bottom-small">
                  "Y así tenemos ahora 'How Great Thou Art'. Oh Señor, Dios mío, cuando me
                  maravillo, considero todos los mundos que tus manos han hecho; veo las estrellas,
                  oigo los truenos, tu poder se despliega por todo el universo'".
                </p>
                <p className="para margin-bottom-vsmall">Estribillo:</p>
                <p className="para margin-bottom-small ">
                  "Entonces canta mi alma, Mi salvador Dios, a ti, Cuán grande eres, Cuán grande
                  eres. Entonces canta mi alma, mi Dios salvador, a ti, qué grande eres, qué grande
                  eres".
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="para margin-bottom-small">
          J. Edwin Orr presentó la traducción de Hine de "How Great Thou Art" al público de Estados
          Unidos. Poco después, en 1957, inició su órbita alrededor del mundo a través de la Cruzada
          de Billy Graham en Nueva York, donde fue cantada 99 veces.
        </p>
        <p className="para margin-bottom-small">
          En mi poder hay una preciada copia de "How Great Thou Art" en lengua rusa. Los cuatro
          hombres que ayudaron a traernos esta canción -Boberg, el sueco; Von Glehn, el alemán;
          Prokhanoff, el ruso y Hine, el inglés- conservaron cuidadosamente el impresionante
          mensaje.
        </p>
        <p className="para margin-bottom-small">
          También tuve en mis manos la carta original de la hija de Hine, Sonia, fechada el 16 de
          marzo de 1989, que contenía la sombría noticia de que Stuart Hine había fallecido
          plácidamente mientras dormía dos días antes. Tenía 92 años. Así, con serena dignidad,
          terminó la vida del hombre que llevó "How Great Thou Art" al mundo angloparlante.{" "}
          <span className="highlight">Redactor </span> (
          <a href="https://staugustine.com" target="_blank" className="highlight">
            staugustine.com
          </a>{" "}
          )
        </p>
      </div>
    </section>
  );
}

export default StorySpanish;
