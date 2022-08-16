<div class="search-pane">
    <input on:keyup={searchAction} bind:this={searchBox} class="search headline6" type="text" placeholder="Search Device">  
    {#each filteredList as device}
    <a href={"/downloads/"+device}>
        <div class="button">
            <div class="btn headline6" class:active={activeDevice === device}>{device}</div>
        </div>
    </a>
    {/each}
</div>

<script>
import { page } from "$app/stores";

$: activeDevice = $page.params.devicename;
let searchBox;
export let allDevices;
let filteredList = allDevices;
const searchAction = () => {
    let val = searchBox.value.toLowerCase()
    let temp = []
    allDevices.forEach((el)=>{
        // this for when we have actual device name in json file
        // if(el.codename.includes(val.toLowerCase()) || el.name.includes(val.toLowerCase())){
        if(el.toLowerCase().includes(val.toLowerCase())){
            temp = [...temp,el]
        }
    })
    filteredList = temp;
}

</script>

<style>
.search-pane{
    padding: 32px;
    border-right: 2px var(--md-sys-color-on-surface-variant) solid;
}
.search{
    background-color: var(--md-sys-color-secondary-container);
    height: 44px;
    padding: 16px;
    border-radius: 32px;
    border: none;
    color: var(--md-sys-color-on-secondary-container);
    margin-bottom: 32px;
}

.search::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--md-sys-color-on-secondary-container);
  opacity: 1; /* Firefox */
}

.search::-ms-input-placeholder { /* Microsoft Edge */
  color: var(--md-sys-color-on-secondary-container);
}

.btn{
    width: 100%;
    margin-bottom: 8px;
    border-radius: 100px;
    padding: 8px 16px;
    line-height: 24px;
    cursor: pointer;
    color: var(--md-sys-color-on-secondary-container);
}

.btn:hover{
    background-color: var(--md-sys-color-on-secondary);
}

.btn.active{
    background-color: var(--md-sys-color-secondary-container);
}
</style>