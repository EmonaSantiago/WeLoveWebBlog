<script>
  import Sessioncard from "../lib/components/Sessioncard.svelte";
  import Content from "../lib/components/Content.svelte";
</script>

<!-- Hero section -->
<section id="Hero">
  <h1>WE 💜 WEB</h1>
  <img src="/images/hero-image.png" alt="studenten" />
  <a href="#Sessions"
    ><img class="arrow" src="/images/Arrow.png" alt="logo" /></a
  >
</section>

<!-- Sessions -->
<section id="Sessions">
  <div class="row">
    <div class="left-column">
      <div class="introduction">
        <h2>WE 💜 <br /> THIS WEEK</h2>
        <p>
          Kom een Sessie volgen waarin een<br />
          designer/devloperuit de praktijk iets komt vertellenen laten zien!
        </p>
        <a href="/aanmelden" class="button">Aanmelden</a>
      </div>
    </div>
    <div class="right-column">
      <Sessioncard />
    </div>
  </div>
</section>

<!-- Cards section -->

<Content />

<style>
  /* Hero */
  h1 {
    color: white;
    font-size: 80px;
    position: absolute;
    background-color: var(--blue);
    padding-right: 20px;
    padding-bottom: 20px;
  }

  .arrow {
    width: 5em;
    height: auto;
    margin-top: -3em;
  }
  #Hero {
    justify-content: center;
    margin: 2em;
    text-align: center;
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
  h2 {
    color: white;
    margin-bottom: 4px;
  }
  p {
    color: white;
    margin-bottom: 1em;
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

  #Sessions {
    height: 80vh;
    padding: 200px 0px 0px 40px;
  }

  @media screen and (min-width: 1100px) {
    h2 {
      font-size: 4em;
    }
    p {
      font-size: 2em;
    }
  }
  * {
    box-sizing: border-box;
  }
  .row {
    /* height: 100vh; */
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
    /* height: 100%; */
  }

  .row:after {
    display: table;
    clear: both;
  }

  @media screen and (max-width: 1400px) {
    #Sessions {
      padding: 0;
    }
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
