<script>
  import technologies from './technologies.js';
</script>

<svelte:head>
  <script type="module" src="https://unpkg.com/@divriots/infini-scroll@0.3.3/infini-scroll.js?module"></script>
</svelte:head>

<section class="text-center text-white bg-black-divriots px-8 pt-24 pb-16 relative">
  <h2 class="text-4xl sm:text-5xl lg:text-6xl">All Web technologies <span class="block text-primary">supported</span>
  </h2>
  <div class="infini-wrapper mx-auto max-w-4xl my-32">
    <infini-scroll drag-speed="1" scroll-interval="15" container-height="270" box-width="128" row-amount="2"
      follow-user-direction>
      {#each technologies as t, i}
      <figure class="technology relative p-6">
        <figcaption class="opacity-0 -bottom-2 w-full absolute text-center left-0">
          <span class="p-1 text-white bg-black-divriots">{t.name}</span>
        </figcaption>
        <img class="w-20 h-20" src={t.logo} alt={t.name} aria-label={t.name} loading="lazy"/>
      </figure>
      {/each}
    </infini-scroll>
  </div>
  <!-- <div class="absolute bottom-6 h-12 w-full bg-gradient-to-b from-transparent to-black-divriots z-index-1"></div> -->
</section>

<style scoped>
  .technology img {
    transition: transform .1s ease-out, opacity .1s ease-out;
  }

  .technology:hover img {
    transform: scale(1.1);
  }

  .technology figcaption {
    transition: opacity .1s ease-out;
  }

  .technology:hover figcaption {
    opacity: 1;
  }

  .infini-wrapper {
    position: relative;
  }

  .infini-wrapper::before {
    content: '';
    position: absolute;
    width: 150px;
    inset: 0;
    background: linear-gradient(to left, rgba(23, 23, 23, 0), rgba(23, 23, 23, 1));
    z-index: 1;
    pointer-events: none;
  }

  .infini-wrapper::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 150px;
    top: 0;
    right: 0;
    background: linear-gradient(to right, rgba(23, 23, 23, 0), rgba(23, 23, 23, 1));
    z-index: 1;
    pointer-events: none;
  }
</style>