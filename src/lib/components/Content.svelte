<section id="Content">
  <div class="row">
    <div class="column">
      <img src="/images/content1.png" alt="Snow" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/content3.png" alt="Forest" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/content6.png" alt="Mountains" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/content4.png" alt="Mountains" style="width:100%" />
    </div>
    <div class="column">
      <img src="/images/content5.png" alt="Mountains" style="width:100%" />
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
    width: 20%;
    padding: 20px;
  }

  /* Clearfix (clear floats) */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }

  @media only screen and (max-width: 870px) {
    .column {
      padding: 2px;
      margin-top: 3em;
    }
  }
</style>
