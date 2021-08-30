<template>
  <footer class="gradient text-white relative overflow-hidden">
    <form :action="subscribe" class="mx-auto max-w-2xl py-24 px-4 text-left">
      <label for="EMAIL" class="block flex-grow text-4xl max-w-68 leading-none">
        Subscribe to
        <span class="text-primary">Backlight</span>
        newsletter
      </label>
      <label class="block mt-2">
        Monthly updates on new features, new starter-kits and our latest
        articles about building great Design Systems.
      </label>
      <div class="flex flex-col space-y-4 sm:space-y-0 mt-4 sm:flex-row w-full">
        <input
          name="EMAIL"
          type="email"
          placeholder="Enter your e-mail"
          required
          autocomplete="off"
          class="
            bg-transparent
            border-b-1 border-gray-light
            focus:border-white
            text-white
            outline-none
            flex-grow
          "
        />
        <!-- input trap for bot -->
        <input
          type="text"
          style="position: absolute; left: -5000px"
          aria-hidden="true"
          :name="`b_${uid}_${audience}`"
          tabindex="-1"
          value=""
        />
        <button
          type="submit"
          value="Subscribe"
          name="subscribe"
          class="btn-primary self-start"
        >
          Subscribe
        </button>
      </div>
    </form>
    <div class="max-w-7xl mx-auto links flex flex-col sm:flex-row text-white">
      <div class="flex flex-col m-4 mb-8 sm:mb-4">
        <img class="w-24" src="/assets/logo/bkl.svg" alt="Backlight logo" />
        <a class="mt-2" href="https://divRIOTS.com">
          by
          <img
            class="h-4 inline"
            src="/img/divriots.svg"
            alt="‹div›RIOTS logo"
          />
        </a>
      </div>
      <div class="cols sm:min-w-max sm:pr-32">
        <div class="col">
          <label>LINKS</label>
          <template v-for="route in routes" :key="route.pathname">
            <a :href="route.pathname">{{ route.label }}</a>
          </template>
        </div>
        <div class="col">
          <label>CONNECT</label>
          <div class="flex">
            <component :is="Discord"></component>
            <component :is="Twitter"></component>
            <component :is="LinkedIn"></component>
            <component :is="Github"></component>
            <component :is="YouTube"></component>
          </div>
        </div>
        <div class="col">
          <label>CONTACT</label>
          <a :href="`mailto:${contact}`">{{ contact }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import Twitter  from '../../twitter/src/twitter.vue';
  import YouTube  from '../../youtube/src/youtube.vue';
  import Discord  from '../../discord/src/discord.vue';
  import Logo  from '../../logo/src/logo.vue';
  
  export default {
    props: {
      routes: { type: Array, default: [] },
      subscribe: { type: String, required: true },
      contact: { type: String, required: true },
    },
    data() {
      const params = new URL(this.subscribe).searchParams;
      return {
        audience: params.get('id'),
        uid: params.get('u'),
      };
    },
    setup() {
      return { Twitter, Discord, Logo, YouTube };
    },
  };
</script>
<style lang="scss">
  footer.gradient::before {
    height: 100%;
  }

  .links {
    overflow: hidden;
    font-size: 17px;

    .cols {
      display: flex;
      justify-content: start;
      flex: 1;
      flex-wrap: wrap;
    }

    @media only screen and (min-width: 800px) {
      .logo {
        height: 150px;
      }

      .cols {
        justify-content: space-around;
      }
    }

    .col {
      display: flex;
      flex-direction: column;
      padding: 0px 32px 32px 20px;

      label {
        font-size: 0.9rem;
        opacity: 0.6;
        margin-bottom: 16px;
      }

      a {
        margin-bottom: 3px;
      }
    }
  }
</style>