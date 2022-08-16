<div class="app">
    <Navbar/>
    <div style="display: flex; flex-grow:1;">
        <slot></slot>
    </div>
    <Footer />
</div>

<script>
import "../css/typography.css"
import "../css/global.css"
import "../css/material-icons.css"
import "../css/roboto.css"

import Navbar from "../components/singleton/navbar.svelte";
import Footer from "../components/singleton/footer.svelte"
</script>

<style>
.app{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>