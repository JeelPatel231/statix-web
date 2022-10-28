<div class="downloads-grid">
    <SearchPane allDevices={data.devices}/>
    <slot></slot>
</div>

<style>
.downloads-grid{
    height: 100%;
    width:100%;
    display: grid;
    grid-template: "x x" / min-content 1fr;
}

@media only screen and (max-width:800px){
    .downloads-grid{
        grid-template: none;
        grid-template-areas: "one";
    }
}

</style>

<script lang="ts">
export let data;
import SearchPane from "../../components/SearchPane.svelte";
</script>