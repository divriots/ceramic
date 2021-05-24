<script>
  import technologies from '../../config/src/technologies.js';
</script>

<section class="text-center text-white bg-black-divriots py-8 relative">
  <h2 class="text-4xl sm:text-5xl lg:text-6xl">All Web technologies <span class="block text-secondary">supported</span>
  </h2>
  <div class="mx-auto max-w-6xl technologies max-h-80 relative overflow-auto">
    <div class="flex flex-wrap gap-8 justify-center py-8">
      {#each technologies as t, i}
      <figure class="technology relative opacity-50 hover:opacity-100">
        <figcaption class="hidden -top-6 w-full absolute text-center">
          <span class="p-1 text-white bg-black-divriots">{t.name}</span>
        </figcaption>
        <img class="w-20 h-20" src={t.logo} alt={t.name} aria-label={t.name}/>
      </figure>
      {/each}
    </div>
  </div>
  <div class="absolute bottom-6 h-12 w-full bg-gradient-to-b from-transparent to-black-divriots z-index-1"></div>
</section>

<style>
  .technology:hover figcaption {
    display: block
  }

  .technologies::-webkit-scrollbar {
    width: 0px
  }
</style>