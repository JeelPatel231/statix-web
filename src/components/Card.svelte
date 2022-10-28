<div class="card">
    <div class="card-top">
        <img class="image" src={img} alt={name}>
        <div class="title headline-large">
            {name}
        </div>
    </div>
    <div class="chip-view">
        {#each chips as tag}
            <Chip text={tag}/>
        {/each}
    </div>
    <div class="content body-small">
        {status}
    </div>
    <hr>
    <div class="reach-out body-small">
        {#each reaches as reach}
            <a href={reach.url} class="button">{reach.name}</a>
        {/each}
    </div>
</div>

<script>
import Chip from "./Chip.svelte";

export let name;
export let status;
export let chips;
export let reaches;
export let img;
</script>

<style>
.card{
    color: var(--md-sys-color-on-surface);
    width: 400px;
    border-radius: 16px;
    margin-bottom: 32px;
    padding: 24px;
    background-color: var(--md-sys-color-surface);
    border: 2px var(--md-sys-color-outline) solid;
}
@media only screen and (max-width:500px){
    .card{
        width: 100%;
    }
}
.card-top{
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}
.chip-view{
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
}

.image{
    height: 88px;
    width: 88px;
    flex-shrink: 0;
    background-color: var(--md-sys-color-secondary-container);
    object-fit: cover;
    border-radius: 16px;
}
.title{
    margin-left: 24px;
}
.content{
    margin-bottom: 8px;
}
.reach-out{
    margin-top: 8px;
}
.reach-out .button{
    margin-right: 8px;
}
</style>