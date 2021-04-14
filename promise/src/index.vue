<script>
import Feature from './feature.vue';
import Group from './group.vue';

export default {
  components: { Feature, Group },
};
</script>
<template>
  <section class="bg-black text-gray-100 sm:p-10">
    <Group title="Main title lorem ipsum" />

    <Feature
      name="Collaborate Instantly"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Discover', href: '#' }"
    />

    <Feature
      name="Integrates into your workflow"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit
    eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'View Documentation', href: '#' }"
    />

    <Group title="Main title lorem ipsum" />

    <Feature
      name="Code review visually"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Ask a demo', href: '#' }"
      :reverse="true"
    />

    <Feature
      name="Documentation out of the box"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Discover Pricing', href: '#' }"
      :reverse="true"
    />

    <Feature
      name="100% standard Web development"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit
    eu
    tellus
    scelerisque porttitor. Nullam
    dictum finibus quam, in mollis nisi rhoncus at. Nulla lacinia, ipsum non"
      :action="{ label: 'Start', href: '#' }"
      :reverse="true"
    />
  </section>
</template>
