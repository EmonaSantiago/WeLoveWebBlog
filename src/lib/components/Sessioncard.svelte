<div class="container">
  <div class="item">
    <h2>20/03/23</h2>
    <img src="/images/Ontwerpen.png" alt="Afbeelding" />
    <h1>DLC Ontwerp fase</h1>
    <p>Emona Santiago</p>
    <p>
      Heb jij moeite met het DLC ontwerpfase? Emona neemt je mee in het ontwerp
      fase.
    </p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>

  <div class="item">
    <h2>21/03/23</h2>
    <img src="/images/AdobeIllustrator.png" alt="Afbeelding" />
    <h1>Adobe illustrator Digital design</h1>
    <p>Daphne Zwuup</p>
    <p>Digital designen in Adobe illustrator met Daphne.</p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>
  <div class="item">
    <h2>22/03/2023</h2>
    <img src="/images/Code.png" alt="Afbeelding" />
    <h1>Html/Css skills</h1>
    <p>Shauri Maigua</p>
    <p>Heb jij moeite met HTML/CSS? Shauri deelt graag tips!</p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>

  <div class="item">
    <h2>23/03/2023</h2>
    <img src="/images/projectboard.png" alt="Afbeelding" />
    <h1>Project Board opzetten</h1>
    <p>Boudewijn Bout</p>
    <p>De perfecte opzet met het Github project board!</p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>

  <div class="item">
    <h2>24/03/2023</h2>
    <img src="/images/3D.png" alt="Afbeelding" />
    <h1>3D skills</h1>
    <p>Daan Korver</p>
    <p>Intresse in 3D ontwerpen? Daan deelt graag zijn skills!</p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>

  <div class="item">
    <h2>25/03/23</h2>
    <img src="/images/FDND.png" alt="Afbeelding" />
    <h1>FDND Founder</h1>
    <p>Justin Lung</p>
    <p>FDND Founder Justin deelt zijn ervaring bij FDND.</p>
    <a href="/detail" class="button">Lees meer...</a>
  </div>
</div>

<style>
  h1 {
    color: white;
    font-size: 1.25rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  p {
    font-size: 0.825rem;
    letter-spacing: 2px;
    line-height: 20px;
  }

  img {
    border-radius: 8px;
    height: 250px;
  }

  .button {
    text-decoration: none;
    /* border: solid 2px var(--purple);
    border-radius: 10px; */
    /* padding: 1em; */
    font-weight: bold;
    /* background-color: var(--blue); */
    color: var(--purple);
  }

  .container {
    overflow: auto;
    display: flex;
    scroll-snap-type: x mandatory;
    gap: 24px;
    color: white;
    height: fit-content;
    margin-left: 2em;
  }

  .container .item {
    flex-shrink: 0;
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    gap: 16px;

    border: 1px solid #e9e9e9;
    border-radius: 8px;
    box-shadow: 0 3px 16px 2px rgba(0, 0, 0, 0.1);
    padding: 24px;
    position: relative;
    top: 0;
    width: 250px;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 5vw;
    }

    .container .item {
      border: 1px solid #e9e9e9;
      border-radius: 8px;
      box-shadow: 0 3px 16px 2px rgba(0, 0, 0, 0.1);
      padding: 24px;
      position: relative;
      top: 0;
      width: 15em;
      font-size: smaller;
    }
  }
</style>
