<script>
  import technologies from '../../config/src/technologies.js';
</script>

<section class="text-center text-white bg-black-divriots py-8">
  <h2 class="text-3xl">All Web technologies <span class="block text-primary">supported</span></h2>
  <input id="seemoretech" type="checkbox"/>
  <div class="mx-auto max-w-6xl technologies h-48 relative overflow-hidden">
    <div class="flex flex-wrap gap-8 justify-center py-8">
      {#each technologies as t, i}
      <img class="w-20 h-20 technology" src={t.logo} alt={t.name} aria-label={t.name}/>
    {/each}
    </div>
    <div class="absolute bottom-0 h-12 w-full bg-gradient-to-b from-transparent to-black-divriots"></div>
  </div>
  <label for="seemoretech" class="inline-block bg-primary text-white px-6 py-3 rounded-md cursor-pointer hover:underline">
    See more
  </label>
</section>

<style>
  .technology {
    opacity: .5;
    filter: grayscale(1);
  }

  .technology:hover {
    opacity: 1;
    filter: grayscale(0);
  }

  #seemoretech {
    display: none;
  }

  #seemoretech:checked~.technologies>.bottom-0 {
    display: none;
  }

  #seemoretech:checked~.technologies {
    height: auto;
  }
</style>