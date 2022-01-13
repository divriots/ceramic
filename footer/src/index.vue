<template>
  <footer class="gradient text-white relative overflow-hidden">
    <form
      :action="subscribe"
      method="post"
      id="revue-form"
      name="revue-form"
      target="_blank"
      class="mx-auto max-w-2xl py-24 px-4 text-left"
    >
      <label
        for="member_email"
        class="block flex-grow text-4xl max-w-68 leading-none"
      >
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
          type="email"
          name="member[email]"
          id="member_email"
          placeholder="Enter your e-mail"
          required
          autocomplete="off"
          class="bg-transparent border-b-1 border-gray-light focus:border-white text-white outline-none flex-grow"
        />
        <input
          type="submit"
          value="Subscribe"
          name="member[subscribe]"
          id="member_submit"
          class="btn-primary self-start"
        />
      </div>
    </form>
    <div class="max-w-7xl mx-auto links flex flex-col sm:flex-row text-white">
      <div class="flex flex-col m-4 mb-8 sm:mb-4">
        <img
          class="w-24"
          src="/assets/logo/bkl.svg"
          alt="Backlight logo"
          loading="lazy"
        />
        <a class="mt-2" href="https://divRIOTS.com">
          by
          <img
            class="h-4 inline"
            src="/img/divriots.svg"
            alt="‹div›RIOTS logo"
            loading="lazy"
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
            <component :is="Rss"></component>
          </div>
          <a
            href="https://www.producthunt.com/posts/backlight?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-backlight"
            target="_blank"
            class="mt-4"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=312123&theme=light"
              alt="Backlight - Make design systems that front-end teams want to use | Product Hunt"
              style="width: 250px; height: 54px"
              width="250"
              height="54"
              loading="lazy"
            />
          </a>
        </div>
        <div class="col">
          <label>CONTACT</label>
          <a :href="`mailto:${contact}`">{{ contact }}</a>
          <a
            href="https://calendly.com/backlight_"
            target="_blank"
            rel="noopener noreferrer nofollow"
            class="btn-outline demo"
          >
            Book a demo
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import Twitter from '../../twitter/src/twitter.vue';
import YouTube from '../../youtube/src/youtube.vue';
import Discord from '../../discord/src/discord.vue';
import Rss from '../../rss/src/rss.vue';
import Logo from '../../logo/src/logo.vue';

export default {
  props: {
    routes: { type: Array, default: [] },
    subscribe: { type: String, required: true },
    contact: { type: String, required: true },
  },
  setup() {
    return { Twitter, Discord, Logo, YouTube, Rss };
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
    .demo {
      margin-top: 16px;
    }
  }
}
</style>
