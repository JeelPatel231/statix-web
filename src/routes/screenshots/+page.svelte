<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|stopPropagation={()=>{changeScreenshot(-1)}} class="image-btn material-symbols-rounded unselectable">navigate_before</div>
<div class="scroll-container" bind:this={slider}>
    {#each files as image}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={toggleScreenshotView} class="image-wrapper">
        <div class="image" style="background-image:url('http://downloads.statixos.com/screenshots/12/{image}' "/>
    </div>
    {/each}
    
</div>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click|stopPropagation={()=>{changeScreenshot(1)}} class="image-btn right material-symbols-rounded unselectable">navigate_next</div>

<script>
let oldOffset;
let isFullscreen = false
let slider;

const changeScreenshot = (x) => {
    let k = 0.8
    if(isFullscreen){k=1}
    slider.scrollLeft += slider.offsetWidth*x*k
}

const toggleScreenshotView = (x) => {
    if(!isFullscreen){oldOffset = slider.scrollLeft}
    slider.childNodes.forEach(el => {
            el.classList.toggle("photo-active")
            el.classList.toggle("image-wrapper")
    });
    isFullscreen = !isFullscreen
    if(!isFullscreen){slider.scrollLeft = oldOffset}
    x.target.scrollIntoView()
}


let files = [
    "Screenshot_20220608-185438.png",
    "Screenshot_20220608-212028.png",
    "Screenshot_20220608-212035.png",
    "Screenshot_20220609-235309.png",
    "Screenshot_20220609-235312.png",
    "Screenshot_20220609-235316.png",
    "Screenshot_20220609-235323.png",
    "Screenshot_20220609-235327.png",
    "Screenshot_20220609-235330.png",
    "Screenshot_20220609-235416.png",
    "Screenshot_20220609-235425.png",
    "Screenshot_20220609-235436.png",
    "Screenshot_20220609-235439.png",
    "Screenshot_20220609-235443.png",
    "Screenshot_20220609-235448.png",
    "Screenshot_20220609-235722.png",
    "Screenshot_20220609-235806.png",
    "Screenshot_20220609-235824.png",
    "Screenshot_20220609-235832.png",
    "Screenshot_20220609-235901.png",
    "Screenshot_20220609-235905.png",
    "Screenshot_20220609-235909.png",
    "Screenshot_20220609-235915.png",
    "Screenshot_20220609-235921.png",
    "Screenshot_20220609-235931.png",
    "Screenshot_20220609-235940.png",
    "Screenshot_20220610-001705.png",
    "Screenshot_20220610-001717.png",
    "Screenshot_20220610-001724.png",
    "Screenshot_20220610-001738.png",
    "Screenshot_20220610-001748.png",
    "Screenshot_20220610-001753.png",
    "Screenshot_20220610-001756.png",
    "Screenshot_20220610-001808.png",
    "Screenshot_20220610-001812.png",
    "Screenshot_20220610-001819.png"
  ]
</script>

<style>
.scroll-container{
    width: 100%;
    height: 100%;
    color: var(--md-sys-color-on-primary-container);
    display: flex;
    text-align: center;
    overflow-x: scroll;
    scroll-behavior: smooth;
    align-items: center;
    scroll-snap-type: x mandatory;

    scrollbar-color: #747375 #00000000;
}

.image-btn{
    background-color: white;
    align-self: center;
    position: absolute;
    opacity: 0.7;
    cursor: pointer;

    font-size: 48px !important;
    margin: 10px;
    border-radius: 24px;
}
.image-btn:hover{
    opacity: 1;
}
.image-btn.right{
    right: 0;
}

.scroll-container::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}
.scroll-container::-webkit-scrollbar-thumb {
    background: #747375;
    border-radius: 10px;
}

.image-wrapper{
    height: 70%;
    aspect-ratio: 8/16;
}

.image{
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

:global(.photo-active){
    height: 100%;
    width: 100%;
    flex-shrink: 0;
    scroll-snap-align: center;
}
</style>