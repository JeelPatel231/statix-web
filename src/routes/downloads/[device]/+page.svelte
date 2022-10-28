<div class="download-info background">
    {#each Object.entries(data.deviceData) as [buildType,romList]}
        <div class="buildtype on-background-text headline-large">
            {buildType}
        </div>
        <div class="flex-parent">
            {#each romList as obj}
                <DownloadEntry {obj}/>
            {/each}
        </div>
    {/each}
    <div class="visit-archive body-large on-background-text">
        Looking for other builds?
        <a href="https://downloads.statixos.com" class="pill-btn primary-container on-primary-container-text">
            <span class="material-symbols-rounded">
                find_in_page
            </span>
            <span>visit archive</span>
        </a>
    </div>
</div>

<style>
.download-info{
    word-break: break-all;
    padding: 24px;
}

.buildtype{
    padding: 24px;
}

.visit-archive{
    margin-top: 24px;
    margin-left: 24px;
}

.pill-btn{
    text-transform: uppercase;
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 24px;
    text-decoration: none;
    margin-top: 8px;
}

@media only screen and (max-width:800px){
    .download-info{
        grid-area: one;
    }
}
</style>

<script>
import DownloadEntry from "../../../components/DownloadEntry.svelte";
export let data;
</script>