<div class="flex-parent">
    <!-- 2 childs, 1 textbox -info- -->
    <div class="flex-parent flex-fill-align text-container">
        <div class="box">
            <div class="header display-large">
                StatiXOS
            </div>
            <div class="content headline-small">
                Rom description goes here
            </div>
        </div>
    </div>
    <!-- 2nd child, rom photo or something -->
    <div class="flex-parent flex-fill-align photo-container">
        <div class="photo">   
        </div>
    </div>
</div>


<style>
.flex-parent{
    display: flex;
    flex-wrap: wrap-reverse;
    flex-direction: row;
    color: var(--md-sys-color-on-primary-container);
    flex-grow: 1;
    max-width: 1750px;
    align-self: center;
    width: 100%;
}
.box{
    margin: 42px auto;
}
.photo-container{
    margin: 42px auto;
}

.flex-fill-align{
    flex-grow:1;
    width: 50%;
}

@media only screen and (max-width:700px){
    .flex-fill-align {
        width: 100%;
    }
}

.photo{
    width: 300px;
    height: 600px;
    border: 2px solid var(--md-sys-color-on-background);
    margin: auto;
    padding: 0 10px;
    border-radius: 16px;
}
</style>