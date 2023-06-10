<div class="container">
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, labore.
    </p>
  </div>
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem, ipsum.</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, cumque
      tempore?
    </p>
  </div>
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem.</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae!</p>
  </div>
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem ipsum dolor sit.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
  </div>
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel.</p>
  </div>
  <div class="item">
    <img
      src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
    <h1>Lorem, ipsum dolor.</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, a
      iusto?
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
