<div class="download-pane">
    <div class="display1">
        Aw, Snap!
    </div>
    <div class="display3 capitalize">
        Error : {$page.status}
        <br>
        {$page.error.message}
    </div>
    <div class="body1 visit-archive m-24">
        Looking for other builds?
        <div class="archive-btn pill-btn m-8">
            <span class="material-icons">
                find_in_page
            </span>
            <span>visit archive</span>
        </div>
    </div>
</div>

<script>
import { page } from "$app/stores";
</script>

<style>
.m-24{
    margin-top: 24px;
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