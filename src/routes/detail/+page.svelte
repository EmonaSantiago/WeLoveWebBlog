<section id="Detail">
  <div class="container">
    <div class="text">
      <h1>DLC Ontwerp fase</h1>
      <h3>Emona Santiago</h3>
      <p class="datum">20/03/23</p>
      <p>
        Emona Santiago is graag bezig in het ontwerpfase. Ze deelt graag haar
        manier van werken! Volg deze sessie voor tips&tops en nieuwe technieken.
      </p>
      <p class="locatie">
        The Bell (BELL) Sarphatistraat 370 1018 GW Amsterdam
      </p>
      <a href="/" class="button1">Ga terug</a>
      <a href="/aanmelden" class="button2">Aanmelden</a>
    </div>
    <div class="image">
      <img src="/images/Ontwerpen.png" alt="Afbeelding" />
    </div>
  </div>
</section>

<style>
  h1 {
    font-size: 50px;
  }
  .datum {
    margin-top: 1em;
    margin-bottom: 5px;
    font-size: 28px;
  }

  .locatie {
    font-size: 12px;
    margin-top: 2em;
    margin-bottom: 3em;
  }
  #Detail {
    margin: 2em;
    color: white;
    height: 70vh;
  }

  .button1,
  .button2 {
    margin-top: 2em;
    text-decoration: none;
    border: solid 2px var(--green);
    border-radius: 10px;
    color: var(--green);
    padding: 10px;
  }

  .button1 {
    border: solid 2px var(--purple);
    color: var(--blue);
    background-color: var(--purple);
  }

  .container {
    display: flex;
    flex-direction: row;
  }

  .text {
    flex: 1;
    padding-right: 6em;
    margin-bottom: 2em;
  }

  .image {
    flex: 1;
    text-align: right;
  }

  img {
    width: 100%;
    border-radius: 12px;
  }

  @media (max-width: 600px) {
    .container {
      flex-direction: column;
    }

    .image {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    #Detail {
      height: 80vh;
    }
    .text {
      padding: 0em;
      margin-bottom: 2em;
    }

    .datum {
      margin-top: 1em;
      margin-bottom: 5px;
    }

    .locatie {
      font-size: 12px;
      margin-top: 2em;
    }
  }
</style>
