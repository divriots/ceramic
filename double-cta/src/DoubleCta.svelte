<script>
  export let primaryText;
  export let primaryHref;
  export let secondaryText;
  export let secondaryHref;
</script>

<div class="flex mt-8 space-x-2">
  <a class="btn-primary" href={primaryHref}>{primaryText}</a>
  <a class="btn-text" href={secondaryHref}>{secondaryText}</a>
</div>
