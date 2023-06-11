<section id="Content">
  <div class="row">
    <div class="column">
      <img src="/images/hero-image.png" alt="Snow" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/hero-image.png" alt="Forest" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/hero-image.png" alt="Mountains" style="width:100%" />
    </div>
  </div>
</section>

<style>
  * {
    box-sizing: border-box;
  }

  #Content {
    margin: 2em;
  }

  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  /* Clearfix (clear floats) */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
