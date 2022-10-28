<div class="secondary-container on-secondary-container-text download-section body-large">
    <div>Filename : {obj.filename}</div>
    <div>Build type : {obj.romtype}</div>
    <div>Build date : {new Date(obj.datetime*1000).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric' })}</div>
    <div>Version : {obj.version}</div>
    <div>Size : {(obj.size/1073741824).toFixed(2)} GB</div>
    <div>Build ID : {obj.id}</div>
    <a href={obj.url}>
        <div class="download-btn pill-btn primary on-primary-text">
            <span class="material-symbols-rounded">
                download
            </span>
            <span>DOWNLOAD</span>
        </div>
    </a>
</div>

<style>
.download-section{
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 24px;
}
.pill-btn{
    margin-top: 8px;
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 8px 12px;
    border-radius: 24px;
    text-decoration: none;
}
.pill-btn > span{
    padding: 4px;
}
</style>

<script> 
export let obj;
</script>