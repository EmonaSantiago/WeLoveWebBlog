<script>
  import Content from "../../lib/components/Content.svelte";
</script>

<section id="Aanmelden">
  <h1>Meld je aan!</h1>
  <h2>Voor de WE 💜 WEB</h2>
  <p>Iedereen is welkom!</p>
  <div class="form">
    <form action="/action_page.php">
      <label for="fname">Naam</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">E-mail</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your E-mail.."
      />

      <label for="country">Deze week sessie</label>
      <select id="country" name="country">
        <option value="sessie">Sessie</option>
        <option value="sessie">Sessie</option>
        <option value="sessie">Sessie</option>
      </select>

      <input type="submit" value="Submit" />
    </form>
  </div>
</section>

<Content />

<style>
  h1 {
    color: white;
    padding-bottom: 2px;
    font-size: 30px;
  }

  h2 {
    color: var(--purple);
    padding-bottom: 4px;
  }

  p {
    color: white;
  }
  #Aanmelden {
    /* height: 70vh; */
    margin: 2em;
  }

  .form {
    margin-top: 2em;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid var(--blue);
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type="submit"] {
    width: 100%;
    background-color: var(--green);
    color: var(--blue);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  input[type="submit"]:hover {
    background-color: var(--blue);
    color: white;
  }

  div {
    border-radius: 5px;
    background-color: var(--purple);
    padding: 20px;
  }
</style>
