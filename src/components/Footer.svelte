<div class="footer surface-variant">
    <div class="nav-right">
        <!-- can also add GERRIT and GITHUB ORG -->
        <a href="https://telegram.me/statixos" class="svgcontainer button">
            {@html TelegramSvg}
        </a>
        <a href="https://forum.xda-developers.com/tags/statixos/" class="svgcontainer button">
            {@html XDASvg}
        </a>
    </div>
</div>

<script>
import TelegramSvg from "../assets/telegram.svg?raw"
import XDASvg from "../assets/xda-white-text.svg?raw"
</script>

<style>
:global(.svgcontainer svg){
    height: 100%;
    width: 100%;
}
.footer{
    height: 80px;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    padding: 0 16px;
}

.nav-right{
    display: flex;
    margin-left: auto;
}
.button{
    border-radius: 4px;
    height: 48px;
    color: var(--md-sys-color-on-primary-container);
    
    background: none;
    display: inline-flex;
    align-items: center;
    margin: 0 16px 0 0;
    padding: 4px 16px;
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

</style>