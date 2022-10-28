<script>
import { page } from '$app/stores';
console.log($page.error?.message)
</script>

<div class="placeholder display-medium download-info">
    <div class="material-symbols-rounded">error</div>
   Error : {$page.status} <br>
   {$page.error?.message}
</div>

<style>
.placeholder{
    width: 100%;
    height: 100%;
    color: var(--md-sys-color-on-primary-container);
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.placeholder .material-symbols-rounded{
    font-size: 100px !important;
}
@media only screen and (max-width:800px){
    .download-info{
        display: none;
    }
}
</style>