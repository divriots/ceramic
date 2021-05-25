<template>
  <footer class="gradient relative overflow-hidden">
    <form :action="subscribe" class="mx-auto max-w-2xl py-24 px-4 text-left">
      <label for="EMAIL" class="flex-grow text-4xl max-w-68">
        Subscribe to our <span class="text-primary">newsletter</span>
      </label>
      <div class="flex flex-col space-y-4 mt-4 sm:flex-row w-full">
        <input name="EMAIL" type="email" placeholder="Enter your e-mail" required autocomplete="off"
            class="bg-transparent border-b-1 border-gray-light text-gray-mid outline-none flex-grow"/>
        <!-- input trap for bot -->
        <input type="text" style="position: absolute; left: -5000px;" aria-hidden="true" :name="`b_${uid}_${audience}`" tabindex="-1" value="">
        <button type="submit" value="Subscribe" name="subscribe" class="btn-primary self-start">Subscribe</button>
      </div>
    </form>
    <div class="links flex flex-col sm:flex-row text-black-divriots">
      <component :is="Logo" class="sm:pr-10 py-10 mx-8"></component>
      <div class="cols sm:min-w-max sm:pr-32">
        <div class="col">
          <label>
          LINKS
        </label>
          <template v-for="route in routes" :key="route.pathname">
            <a :href="route.pathname">{{ route.label}}</a>
          </template>
          <!-- <a :href="careers_link" target="blank_">Careers</a> -->
          <!-- <a href="https://www.notion.so/Press-8211461e4609470caa0cbff9e6d3b5b2" target="blank_">Press</a> -->
        </div>
        <div class="col">
          <label>
          CONNECT
        </label>
          <div class="flex">
            <component :is="Discord"></component>
            <component :is="Twitter"></component>
            <component :is="LinkedIn"></component>
            <component :is="Github"></component>
          </div>
        </div>
        <div class="col">
          <label>
          CONTACT
        </label>
          <a :href="`mailto:${contact}`">{{contact}}</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  import Twitter from '../../twitter/src/index.vue';
import Discord from '../../discord/src/index.vue';
import Logo from '../../logo/src/index.vue'
export default {
  props:{
    routes: { type : Array , default: []},
    subscribe: { type :String , required: true},
    contact:{ type: String , required: true}, 
  },
  data(){
    const params  = new URL(this.subscribe).searchParams;
    return {
      audience : params.get('id'),
      uid : params.get('u'),
    }
  },
  setup() { return { Twitter, Discord , Logo}}
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

    @media only screen and (min-width: 1100px) {
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
        opacity: 50%;
        margin-bottom: 16px;
      }

      a {
        margin-bottom: 3px;
      }
    }
  }
</style>