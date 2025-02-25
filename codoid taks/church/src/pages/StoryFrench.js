import homeImg from "../img/hero1.jpg";
import violin from "../img/violin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Story() {
  return (
    <section className="section-story margin-bottom-md" id="story">
      <div className="container">
        <h1 className="heading-story margin-bottom-md center-text highlight">
          L'histoire de la chanson : How Great Thou Art
        </h1>
        <div className="grid-box margin-bottom-small">
          <div className="img-box">
            <img src={homeImg} alt="sweden" className="image" />
          </div>
          <div>
            {" "}
            <p className="para margin-bottom-small">
              C'est dans le sud de la Suède que la chanson "How Great Thou Art" a vu le jour en
              1886. Elle a été écrite dans la maison de l'auteur et éditeur Carl Boberg, membre du
              Parlement suédois de 1912 à 1931. La chanson a été connue dans plusieurs pays avant
              d'atteindre les côtes des États-Unis.
            </p>
            <p className="para ">
              Boberg a déclaré à propos de l'écriture de sa chanson : "C'était en 1885, à l'époque
              de l'année où tout semblait revêtir ses plus belles couleurs ; les oiseaux chantaient
              dans les arbres et partout où ils pouvaient trouver un perchoir. Un après-midi
              particulier, quelques amis et moi-même étions allés à Kronobäck où nous avions
              participé à un service de l'après-midi. Alors que nous revenions, un orage a commencé
              à apparaître à l'horizon. Nous nous sommes précipités à l'abri. Il y a eu de gros
              coups de tonnerre, et la lumière a brillé dans le ciel. Des vents violents balayaient
              les prairies et les champs de céréales. Cependant, l'orage s'est vite dissipé et le
              ciel clair est apparu avec un magnifique arc-en-ciel".
            </p>
          </div>
        </div>

        <p className="para margin-bottom-small">
          "Après avoir atteint ma maison, j'ai ouvert ma fenêtre en direction de la mer. Les cloches
          de l'église jouaient un hymne. Le soir même, j'ai écrit un poème que j'ai intitulé 'O
          Store Gud' (Combien tu es grand)".
        </p>

        <p className="para margin-bottom-small">
          Le poème a ensuite été mis en musique sur un air folklorique suédois. En 1907, Manfred von
          Glehn l'a traduit en allemand et, cinq ans plus tard, un pasteur russe, Ivan Prokhanoff,
          en a fait une adaptation en russe.
        </p>
        <p className="para margin-bottom-small">
          Au début des années 1920, le révérend et Mme Stuart K. Hine ont quitté leur domicile en
          Angleterre pour se rendre en Pologne en tant que missionnaires. C'est là qu'ils ont appris
          la version russe de la chanson de Boberg, "O Store Gud". Hine a alors écrit des paroles
          originales en anglais et a fait son propre arrangement de la mélodie suédoise.
        </p>

        <div>
          <div class="box margin-bottom-md">
            <div class="text">
              <img src={violin} alt="violin" className="fas fa-quote-right fa1" />
              {/* <FontAwesomeIcon icon={faQuoteRight} className="fas fa-quote-right fa1 " /> */}
              <div>
                <p className="para margin-bottom-small">
                  C'est ainsi que nous avons maintenant "How Great Thou Art". Ô Seigneur mon Dieu,
                  quand je considère, dans un émerveillement impressionnant, tous les mondes que tes
                  mains ont créés, je vois les étoiles, j'entends le roulement du tonnerre, ta
                  puissance dans tout l'univers s'est manifestée.
                </p>
                <p className="para margin-bottom-vsmall">Refrain:</p>
                <p className="para margin-bottom-small ">
                  "Alors mon âme, mon Dieu sauveur, chante pour toi, combien tu es grand, combien tu
                  es grand. Alors, mon âme, mon Dieu sauveur, chante pour toi, combien tu es grand,
                  combien tu es grand !"
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="para margin-bottom-small">
          J. Edwin Orr a présenté la traduction de Hine de "How Great Thou Art" au public américain.
          Peu de temps après, en 1957, elle a commencé à faire le tour du monde en passant par la
          croisade de Billy Graham à New York, où elle a été chantée 99 fois.
        </p>
        <p className="para margin-bottom-small">
          J'ai en ma possession un exemplaire précieux de "How Great Thou Art" en langue russe. Les
          quatre hommes qui ont contribué à faire connaître ce chant - Boberg, le Suédois ; Von
          Glehn, l'Allemand ; Prokhanoff, le Russe et Hine, l'Anglais - ont soigneusement préservé
          ce message impressionnant.
        </p>
        <p className="para margin-bottom-small">
          J'ai également tenu dans ma main la lettre originale de la fille de Hine, Sonia, datée du
          16 mars 1989, qui contenait la sombre nouvelle que Stuart Hine était mort paisiblement
          dans son sommeil deux jours auparavant. Il avait 92 ans. C'est ainsi que s'est achevée,
          dans une dignité tranquille, la vie de l'homme qui a fait connaître "How Great Thou Art"
          au monde anglophone. <span className="highlight"> Rédacteur en chef </span> (
          <a href="https://staugustine.com" target="_blank" className="highlight">
            staugustine.com
          </a>{" "}
          )
        </p>
      </div>
    </section>
  );
}

export default Story;
