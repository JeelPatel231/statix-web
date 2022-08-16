{#if intra_nav}
<div class="download-pane">
    <div class="display2 capitalize">
        Loading...
    </div>
</div>
{:else if response}
    {@const obj = response.response[0]}
    <div class="download-pane">
        <div class="display2 capitalize">
            {response.device_name}
        </div>
        <!-- <div class="m-24 headline4 capitalize">
            {response.device_name}
        </div> -->
        <hr class="m-16">
        <div class="download-section m-24 body1">
            <div>
                Filename : {obj.filename}
            </div>
            <div>Build type : {obj.romtype}</div>
            <div>Build date : {new Date(parseInt(obj.datetime)*1000).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric' })}</div>
            <div>Version : {obj.version}</div>
            <div>Size : {(obj.size/1073741824).toFixed(2)} GB</div>
            <div>Build ID : {obj.id}</div>
            <a href={obj.url}>
                <div class="download-btn pill-btn m-8">
                    <span class="material-icons">
                        download
                    </span>
                    <span>DOWNLOAD</span>
                </div>
            </a>
            <hr class="m-16">
            <div class="visit-archive m-24">
                Looking for other builds?
                <a href="https://downloads.statixos.com" class="archive-btn pill-btn m-8">
                    <span class="material-icons">
                        find_in_page
                    </span>
                    <span>visit archive</span>
                </a>
            </div>
        </div>
    </div>
{:else}
<div class="placeholder display3">
    <div class="material-icons">west</div>
   Select a device to get started.
</div>
{/if}

<script>
import { navigating } from '$app/stores'
let intra_nav = false;

navigating.subscribe((val)=>{
    if (val && val.from.host == val.to.host) {
        intra_nav = true
    } else {
        intra_nav = false
    }
})

export let response;
</script>

<style>
.placeholder{
    width: 100%;
    height: 100%;
    color: var(--md-sys-color-on-primary-container);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.placeholder .material-icons{
    font-size: 100px !important;
}
.m-24{
    margin-top: 24px;
}
.m-16{
    margin-top: 16px;
}
.m-8{
    margin-top: 8px;
}
.capitalize{
    text-transform: capitalize;
}
.download-pane{
    position: relative;
    padding: 32px;
    flex-grow: 1;
    color: var(--md-sys-color-on-primary-container);
}
.archive-btn{
    text-transform: uppercase;
}
.pill-btn{
    display: flex;
    align-content: center;
    background-color: var(--md-sys-color-primary-container);
    width: fit-content;
    padding: 8px 12px;
    border-radius: 24px;
    text-decoration: none;
    color: var(--md-sys-color-on-primary-container);
}
.pill-btn > span{
    padding: 4px;
}

</style>