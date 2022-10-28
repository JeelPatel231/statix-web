<div class="navbar on-primary-container-text" class:expanded={expanded}>
    <div class="nav-left headline-medium">
        <img src={StatixLogo} alt="stx-logo" class="logo">
        StatiXOS
    </div>
    <button on:click={()=>{expanded = !expanded}} class="trigram on-background-text material-symbols-rounded">menu</button>
    <div class="nav-right">
        {#each routes as r}
            <a href={`/${r.path}`} tabindex="-1">
                <button class="button on-primary-container-text" class:active={$page.url.pathname.split('/')[1] == r.path}>{r.title}</button>
            </a>
        {/each}
    </div>
</div>

<script>
import { page } from "$app/stores";
import StatixLogo from "../assets/statix2021logoonly.png"

let expanded = false;

let routes = [
    { title:"About", path:""},
    { title:"Downloads", path:"downloads"},
    { title:"Screenshots", path:"screenshots"},
    { title:"Team", path:"team"},
]

</script>

<style>
.navbar{
    display: flex;
    align-items: center;
    padding: 10px 0;
    height: 70px;
    flex-wrap: wrap;
    flex-shrink: 0;
    overflow: hidden;
}
.navbar.expanded{
    height: auto;
}

@media only screen and (min-width:600px){
    .trigram{display: none;}
}
.nav-left{
    display: flex;
    align-items: center;
    padding: 0 18px;
}
.nav-left img{
    height: 60px;
}
.nav-right{
    display: flex;
    margin-left: auto;
    flex-grow: 1;
    justify-content: space-around;
    max-width: 550px;
}
.button{
    border-radius: 4px;
    height: min-content;
    
    background: none;
    display: inline-flex;
    align-items: center;
    padding: 0 16px;
    border: none;
    border-radius: 32px;
    line-height: 44px;
    cursor: pointer;
    vertical-align: middle;
    border: 1px solid transparent;

}
.button:hover{
    background-color: var(--md-sys-color-on-secondary);
    border: 1px solid var(--md-sys-color-on-secondary-dark);
}
.button.active{
    background-color: var(--md-sys-color-secondary-container);
}

.logo{
    height: 80%;
}
.trigram{
    padding: 8px 16px;
    margin-left: auto;
    background:none;
    border: none;
}
</style>