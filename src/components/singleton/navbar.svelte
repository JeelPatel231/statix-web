<div class="navbar">
    <div class="nav-left headline3">
        <img src="/stx-2021-logo-only.png" alt="stx-logo" class="logo">
        StatiXOS
    </div>
    <div class="nav-right">
        {#each routes as r}
            <a href={`/${r.path}`} tabindex="-1">
                <button class="button" class:active={$page.url.pathname.split('/')[1] == r.path}>{r.title}</button>
            </a>
        {/each}
        <button on:click={toggleTheme} class="material-icons button">
            {#if darktheme} dark_mode {:else} light_mode {/if}
        </button>
    </div>
</div>

<script>
import { page } from "$app/stores";

let darktheme = true;

let routes = [
    { title:"About", path:""},
    { title:"Downloads", path:"downloads"},
    { title:"Screenshots", path:"screenshots"},
    { title:"Team", path:"team"},
]

const toggleTheme = () => {
    darktheme = !darktheme
    document.body.classList.toggle("light-theme")
    document.body.classList.toggle("dark-theme")
}
</script>

<style>
.navbar{
    height: 80px;
    color: var(--md-sys-color-on-primary-container);
    display: flex;
    align-items: center;
    padding-left: 32px;
}
.nav-left{
    height: 100%;
    display: flex;
    align-items: center;
}
.nav-right{
    display: flex;
    margin-left: auto;
}
.button{
    border-radius: 4px;
    height: min-content;
    color: var(--md-sys-color-on-primary-container);
    
    background: none;
    display: inline-flex;
    align-items: center;
    margin: 0 32px 0 0;
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
</style>