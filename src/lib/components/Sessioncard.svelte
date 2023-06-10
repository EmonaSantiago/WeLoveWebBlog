<div class="container">
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://stem.griffith.edu.au/wp-content/uploads/2020/06/ict-industry-projects.jpg"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
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
