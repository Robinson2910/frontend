import homeImg from "../img/hero1.jpg";
import violin from "../img/violin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function Story() {
  return (
    <section className="section-story margin-bottom-md" id="story">
      <div className="container">
        <h1 className="heading-story margin-bottom-md center-text highlight">
          Story behind the song: 'How Great Thou Art'
        </h1>
        <div className="grid-box margin-bottom-small">
          <div className="img-box">
            <img src={homeImg} alt="sweden" className="image" />
          </div>
          <div>
            {" "}
            <p className="para margin-bottom-small">
              Southern Sweden was the place where "How Great Thou Art" had its beginning in 1886. It
              was written in the home of author and editor, Carl Boberg, a member of the Swedish
              Parliament from 1912 to 1931. The song was known in several countries before it
              finally reached the shores of the United States.
            </p>
            <p className="para ">
              Boberg said of the writing of his song, "It was in 1885, and in the time of year when
              everything seemed to be in its richest coloring; the birds were singing in trees and
              wherever they could find a perch. On a particular afternoon, some friends and I had
              been to Kronobäck where we had participated in an afternoon service. As we were
              returning a thunderstorm began to appear on the horizon. We hurried to shelter. There
              were loud claps of thunder, and the lighting flashed across the sky. Strong winds
              swept over the meadows and billowing fields of grain. However, the storm was soon over
              and the clear sky appeared with a beautiful rainbow."
            </p>
          </div>
        </div>

        <p className="para margin-bottom-small">
          “After reaching my home, I opened my window toward the sea. The church bells were playing
          the tune of a hymn. That same evening I wrote a poem which I titled, 'O Store Gud,' (How
          Great Thou Art)."
        </p>

        <p className="para margin-bottom-small">
          The poem was later set to a Swedish folk tune. In 1907, Manfred von Glehn translated it
          into German, and five years later a Russian pastor, Ivan Prokhanoff, made a Russian
          adaptation.
        </p>
        <p className="para margin-bottom-small">
          In the early 1920s, the Rev. and Mrs. Stuart K. Hine left their home in England and went
          to Poland as missionaries. It was there they learned the Russian version of Boberg's song,
          "O Store Gud." Hine then wrote original English lyrics and made his own arrangement of the
          Swedish melody
        </p>

        <div>
          <div class="box margin-bottom-md">
            <div class="text">
              <img src={violin} alt="violin" className="fas fa-quote-right fa1" />
              {/* <FontAwesomeIcon icon={faQuoteRight} className="fas fa-quote-right fa1 " /> */}
              <div>
                <p className="para margin-bottom-small">
                  And so we now have "How Great Thou Art." "O Lord my God, when I in awesome wonder,
                  Consider all the worlds thy hands have made; I see the stars, I hear the rolling
                  thunder, Thy power throughout the universe displayed."
                </p>
                <p className="para margin-bottom-vsmall">Refrain:</p>
                <p className="para margin-bottom-small ">
                  "Then sings my soul, My saviour God, to thee, How great thou art, How great thou
                  art. Then sings my soul, My saviour God, to thee, How great thou art, How great
                  thou art!"
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="para margin-bottom-small">
          J. Edwin Orr introduced Hine's translation of "How Great Thou Art" to audiences in the
          United States. A short time later, in 1957, it began its orbit around the world by way of
          the Billy Graham New York City Crusade where it was sung 99 times
        </p>
        <p className="para margin-bottom-small">
          In my possession is a prized copy of "How Great Thou Art" in the Russian language. All
          four of the men who helped bring us this song - Boberg, the Swede; Von Glehn, the German;
          Prokhanoff, the Russian and Hine, the Englishman - carefully preserved the awesome
          message.
        </p>
        <p className="para margin-bottom-small">
          I also held in my hand the original letter from Hine's daughter, Sonia, dated March 16,
          1989, which contained the somber news that Stuart Hine had died peacefully in his sleep
          two days before. He was 92 years of age. Thus, in quiet dignity, ended the life of the man
          who brought "How Great Thou Art" to the English speaking world.{" "}
          <span className="highlight">Staff writer</span> (
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
