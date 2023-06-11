<script>
  import "../styles/styles.css";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Nav />
<main id="main-content">
  <slot />
</main>
<Footer />
