<SearchPane allDevices={data.search}/>

<slot></slot>

<script>
export let data;
import SearchPane from "../../components/singleton/search-pane.svelte";
</script>