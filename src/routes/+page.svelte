<!-- Hero section -->
<section id="Hero">
  <h1>WE ♥️ WEB</h1>
  <img src="/images/hero-image.png" alt="studenten" />
</section>

<!-- Sessions section -->
<section id="Sessions">
  <h1>Sessions</h1>
</section>

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
  #Sessions {
    height: 100vh;
  }
</style>
