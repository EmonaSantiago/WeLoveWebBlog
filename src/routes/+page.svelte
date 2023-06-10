<script>
  import Sessioncard from "../lib/components/Sessioncard.svelte";
</script>

<!-- Hero section -->
<section id="Hero">
  <h1>WE ♥️ WEB</h1>
  <img src="/images/hero-image.png" alt="studenten" />
</section>

<!-- Sessions -->
<div class="row">
  <div class="left-column">
    <section id="introduction">
      <p>
        Kom een Sessie volgen waarin een<br />
        designer/devloperuit de praktijk iets komt vertellenen laten zien!
      </p>
      <a href="/aanmelden" class="button">Aanmelden</a>
    </section>
  </div>
  <div class="right-column">
    <Sessioncard />
  </div>
</div>

<!-- Cards section -->

<style>
  /* Hero */
  h1 {
    color: var(--purple);
    font-size: 80px;
    position: absolute;
    background-color: var(--blue);
    padding-right: 20px;
    padding-bottom: 20px;
  }
  #Hero {
    justify-content: center;
    margin: 2em;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  @media only screen and (max-width: 650px) {
    h1 {
      font-size: 30px;
      padding: 10px;
      position: absolute;
      font: "Fira Sans", sans-serif;
    }
  }

  @media only screen and (max-width: 700px) {
    img {
      height: 80vh;
      object-fit: cover;
      width: 100%;
    }
    #Hero {
      height: 80vh;
    }
  }
  /* Sessions */

  p {
    color: white;
    margin-bottom: 1em;
    font-weight: bold;
  }

  .button {
    text-decoration: none;
    border: solid 2px var(--green);
    border-radius: 10px;
    padding: 1em;
    font-weight: bold;
    background-color: var(--green);
    color: var(--blue);
  }

  @media screen and (min-width: 390px) {
    .button {
      padding: 10px;
    }
  }

  @media screen and (min-width: 1100px) {
    p {
      font-size: 3em;
    }
  }
  * {
    box-sizing: border-box;
  }
  .row {
    height: 100vh;
    margin: auto;
    /* margin-top: 8em; */
  }

  .left-column {
    float: left;
    width: 30%;
    padding: 2em;
    align-items: center;
    vertical-align: center;
    height: 100%;
  }

  .right-column {
    float: left;
    width: 70%;
    align-items: center;
    vertical-align: center;
    height: 100%;
  }

  .row:after {
    display: table;
    clear: both;
  }

  @media screen and (max-width: 1400px) {
    .row {
      height: 100%;
    }

    .left-column {
      width: 100%;
      height: auto;
    }

    .right-column {
      width: 100%;
    }
  }
</style>
