<div class="collection-wrapper">
  <div class="collection">
    <div class="metadata">
      <div class="title">{ title }</div>
      <div class="description">
        { description }
      </div>
    </div>
    <div class="mask-list">
      {#each masks as mask, j}
        <img src={`https://hashmasksstore.blob.core.windows.net/hashmaskspreview/${mask}.png`} />
      {/each}
    </div>
    <div class="button" on:click={() => underDevelopment()}>Visit</div>
  </div>
</div>

<script>
  export let title = "";
  export let description = "";
  export let masks = [];

  function underDevelopment() {
    alert("Under Development. Thanks for trying.")
  }
</script>

<style>
  .mask-list {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
  }

  .mask-list::-webkit-scrollbar { 
    display: none;
  }

  .mask + .mask {
    margin-left: 1rem;
  }

  .mask img {
    width: 10rem;
  }

  .collection-wrapper {
    margin: 1rem .5rem;
    width: calc(33.3333% - 1rem);
    display: inline-block;
  }
  
  @media (max-width: 680px) {
    .collection-wrapper {
      width: calc(100% - 1rem);
    }
  }
  
  .collection {
    background: #fff;
    padding: 1rem;
  }

  body.dark .collection-wrapper .collection {
    background: #585858;
  }

  .collection .metadata {
    background: #cbebef;
    padding: .8rem;
    margin-bottom: .5rem;
    font-size: 0.8rem;
  }

  body.dark .collection .metadata {
    background: #2b2b2b;
  }

  .collection .metadata .description {
    width: 2rem;
    border: 1px solid #000;
    background: #fff;
    float: right;
    margin-top: -40px;
    margin-right: -20px;
    text-align: center;
  }

  body.dark .collection .metadata .description {
    color: #2b2b2b;
  }

  .button {
    padding: 0 1rem;
    margin: .5rem 0;
    background: #000;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
  }

  .collection .mask-list {
    height: 6rem;
  }

  .collection .mask-list img {
    cursor: pointer;
    border: 1px solid transparent;
  }

  .collection .mask-list img:hover {
    border-color: #000;
  }
</style>