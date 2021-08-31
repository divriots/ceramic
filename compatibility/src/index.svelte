<script>
  import technologies from './technologies.js';
  import '@divriots/infini-scroll/define';
</script>

<section class="text-center text-white bg-black-divriots px-8 pt-24 pb-16 relative">
  <h2 class="text-4xl sm:text-5xl lg:text-6xl">All Web technologies <span class="block text-primary">supported</span>
  </h2>
  <infini-scroll class="mx-auto max-w-4xl my-32" drag-speed="1" scroll-interval="15" container-height="270"
    box-width="128" row-amount="2">
    {#each technologies as t, i}
    <figure class="technology relative p-6">
      <figcaption class="opacity-0 -bottom-2 w-full absolute text-center left-0">
        <span class="p-1 text-white bg-black-divriots">{t.name}</span>
      </figcaption>
      <img class="w-20 h-20" src={t.logo} alt={t.name} aria-label={t.name} loading="lazy"/>
    </figure>
    {/each}
  </infini-scroll>
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
</style>