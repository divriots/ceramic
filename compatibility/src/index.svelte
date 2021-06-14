<script>
  import technologies from './technologies.js';
</script>

<section class="text-center text-white bg-black-divriots px-8 pt-24 pb-16 relative">
  <h2 class="text-4xl sm:text-5xl lg:text-6xl">All Web technologies <span class="block text-secondary">supported</span>
  </h2>
  <div class="scrollable-horizontal mx-auto max-w-4xl technologies relative py-32">
    <div class="flex flex-col flex-wrap justify-start h-64">
      {#each technologies as t, i}
      <figure class="technology relative opacity-50 hover:opacity-100 p-6">
        <figcaption class="opacity-0 -bottom-2 w-full absolute text-center left-0">
          <span class="p-1 text-white bg-black-divriots">{t.name}</span>
        </figcaption>
        <img class="w-20 h-20" src={t.logo} alt={t.name} aria-label={t.name} loading="lazy"/>
      </figure>
      {/each}
    </div>
  </div>
  <!-- <div class="absolute bottom-6 h-12 w-full bg-gradient-to-b from-transparent to-black-divriots z-index-1"></div> -->
</section>

<style scoped>
  .technology img {
    transition: transform .1s ease-out, opacity .1s ease-out;
  }

  .technology:hover img {
    transform: scale(1.1);
    cursor: pointer;
  }

  .technology figcaption {
    transition: opacity .1s ease-out;
  }

  .technology:hover figcaption {
    opacity: 1;
  }

  .technologies::-webkit-scrollbar {
    width: 0px
  }
</style>