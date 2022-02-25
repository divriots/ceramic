<template>
  <footer class="text-white relative overflow-hidden">
    <div class="newsletter">
      <form
        :action="subscribe"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        class="mx-auto max-w-7xl py-12 text-left flex flex-col sm:flex-row gap-4 sm:gap-16 px-4 xl:px-0"
      >
        <div>
          <label for="member_email" class="block text-2xl max-w-68">
            Subscribe to
            <span class="text-primary">our</span>
            newsletter
          </label>
          <p
            id="member_email_help_text"
            class="block text-sm text-gray-light mt-2"
          >
            Monthly updates on new features, new starter-kits and our latest
            articles about building great Design Systems.
          </p>
        </div>
        <div
          class="flex flex-col space-y-4 sm:space-y-0 mt-4 sm:flex-row sm:w-1/2 sm:gap-4 sm:items-center"
        >
          <input
            type="email"
            name="member[email]"
            id="member_email"
            aria-describedby="member_email_help_text"
            placeholder="Enter your e-mail"
            required
            autocomplete="off"
            class="input-border bg-transparent border-gray-light focus:border-white text-white outline-none flex-grow"
          />
          <input
            type="submit"
            value="Notify me"
            name="member[subscribe]"
            id="member_submit"
            class="btn-primary"
            style="padding: 0.5rem; font-size: 0.8rem"
          />
        </div>
      </form>
    </div>
    <div class="get-started flex-col relative" v-if="version === 'homepage'">
      <div class="shadow"></div>
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl sm:text-5xl sm:w-1/2 mb-8">
          Get started with Backlight today
        </h2>
        <a
          class="link text-base text-primary"
          href="https://backlight.dev/studio"
        >
          Sign up for a free account >
        </a>
        <img
          alt="Backlight interface image"
          class="get-started-img w-full"
          :src="imgSrc"
        />
      </div>
    </div>
    <div class="relative w-full">
      <div
        class="max-w-7xl mx-auto py-12 sm:py-20 links flex flex-col sm:flex-row text-white"
      >
        <div class="gradient flex flex-col m-4 lg:m-0 mb-8 sm:mb-4">
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
          <div class="copyright my-8">
            Copyright © 2021 Backlight. All rights reserved.
          </div>
          <div class="flex">
            <component :is="Discord"></component>
            <component :is="Twitter"></component>
            <component :is="LinkedIn"></component>
            <component :is="Github"></component>
            <component :is="YouTube"></component>
            <component :is="Rss"></component>
          </div>
        </div>
        <div class="cols">
          <div class="col lg:pl-20">
            Links
            <ul>
              <template v-for="route in linksRoutes" :key="route.pathname">
                <li>
                  <a :href="route.pathname">{{ route.label }}</a>
                </li>
              </template>
            </ul>
          </div>
          <div class="col">
            Support
            <ul>
              <template v-for="route in supportRoutes" :key="route.pathname">
                <li>
                  <a :href="route.pathname">{{ route.label }}</a>
                </li>
              </template>
            </ul>
          </div>
          <div class="col">
            Get in touch
            <a
              href="https://calendly.com/backlight_/demo"
              target="_blank"
              rel="noopener noreferrer nofollow"
              class="btn-outline demo"
            >
              Book a demo
            </a>
            <a
              href="https://www.producthunt.com/posts/backlight?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-backlight"
              target="_blank"
              class="mt-4"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=312123&theme=light"
                alt="Backlight - Make design systems that front-end teams want to use | Product Hunt"
                width="250"
                height="54"
                loading="lazy"
              />
            </a>
          </div>
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
    linksRoutes: { type: Array, default: [] },
    supportRoutes: { type: Array, default: [] },
    subscribe: { type: String, required: true },
    version: { type: String, default: '' },
    imgSrc: { type: String, required: true },
  },
  setup() {
    return { Twitter, Discord, Logo, YouTube, Rss };
  },
};
</script>
<style lang="scss">
.newsletter {
  background-color: #262626;
}

.input-border {
  border: 1px solid;
  padding: 0.3rem;
  border-radius: 4px;
}

.get-started {
  overflow: hidden;
  padding: 5rem 1rem 0 1rem;
  background-color: #171717;
}

.shadow {
  position: absolute;
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.8);
  width: 110%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0 -5%;
  pointer-events: none;
}

.get-started-img {
  margin-top: 4rem;
  border-radius: 4px;
  z-index: -10;
  @media only screen and (min-width: 800px) {
    margin-bottom: -40%;
  }
}

div.gradient::before {
  height: 150%;
  margin-top: -10rem;
}

.links {
  overflow: hidden;
  font-size: 17px;

  .cols {
    display: flex;
    justify-content: space-between;
    flex: 1;
    flex-wrap: wrap;
  }

  @media only screen and (min-width: 800px) {
    .logo {
      height: 150px;
    }

    .cols {
      justify-content: space-between;
    }
  }

  .col {
    display: flex;
    flex-direction: column;
    font-size: 1.25rem;
    margin-bottom: 16px;
    @media only screen and (max-width: 800px) {
      padding: 2rem;
    }

    li {
      margin-top: 1rem;
    }

    li a {
      font-size: 17px;
      color: #99999b;
    }

    .demo {
      margin-top: 16px;
      padding: 0.3rem;
      text-align: center;
      font-size: 1rem;
      font-weight: 200;
      color: #f8c307;
    }
  }
}

.copyright {
  font-size: 0.8rem;
  color: #99999b;
  white-space: nowrap;
}
</style>
