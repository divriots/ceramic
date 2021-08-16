<script>
  export let primaryText;
  export let primaryHref;
  export let primaryOnClick;
  export let secondaryText;
  export let secondaryHref;
  export let secondaryOnClick;
</script>

<div class="flex mt-8 space-x-2">
  {#if !!primaryHref}
    <a class="btn-primary" href={primaryHref}>{primaryText}</a>
  {:else}
    <button class="btn-primary" onClick={primaryOnClick}>
      {primaryText}
    </button>
  {/if}
  {#if !!secondaryHref}
    <a class="btn-text" href={secondaryHref}>{secondaryText}</a>
  {:else}
    <button class="btn-text" onClick={secondaryOnClick}>
      {secondaryText}
    </button>
  {/if}
</div>
