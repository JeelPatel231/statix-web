<div class="app">
    <Navbar/>
    <div style="display:flex;flex-grow:1;">
        <slot></slot>
    </div>
    <Footer />
</div>

<script>
import "../css/theme.css"
import "../css/global.css"
import Navbar from "../components/Navbar.svelte" 
import Footer from "../components/Footer.svelte";
</script>

<style>
.app{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>