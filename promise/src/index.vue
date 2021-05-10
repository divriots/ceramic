<script>
  import Feature from './feature.vue';
import Group from './group.vue';

  export default {
    setup(){
      return {
        Group
        ,Feature
       }
    }
  };
</script>
<template>
  <section class="bg-black-divriots text-white sm:p-10">
    <component :is="Group" title="Main title lorem ipsum">
    </component>

    <component :is="Feature" name="Collaborate Instantly" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Discover', href: '#' }">
    </component>

    <component :is="Feature" name="Integrates into your workflow" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit
    eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'View Documentation', href: '#' }">
    </component>

    <component :is="Group" title="Main title lorem ipsum"></component>

    <component :is="Feature" name="Code review visually" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Ask a demo', href: '#' }" :reverse="true">
    </component>

    <component :is="Feature" name="Documentation out of the box" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Discover Pricing', href: '#' }" :reverse="true">
    </component>

    <component :is="Feature" name="100% standard Web development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit
    eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non" :action="{ label: 'Start', href: '#' }"
      :reverse="true"></component>
  </section>
</template>