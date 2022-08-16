<div class="card-container">
    {#each cardData as card}
        <Card {...card}/>
    {/each}
</div>

<script>
import Card from "../../components/singleton/card.svelte";

let cardData = [
    {
        name:"Anay Wadhera",
        chips:["Lead","Core Member","Device-Name"],
        status:"status",
        img:"https://picsum.photos/100?q",
        reaches:[
            {name:"Github", url:"https://github.com/anayw2001"},
            {name:"Telegram", url:"https://telegram.me/delet_thiskthx"}
        ]
    },
    {
        name:"Sourajit Karmakar",
        chips:["Core Member","Device-Name"],
        img:"https://picsum.photos/100?w",
        status:"status",
        reaches:[
            {name:"Github", url:"https://github.com/sourajitk"},
            {name:"Telegram", url:"https://telegram.me/CompassNeedle"}
        ]
    },
    {
        name:"Vaisakh Murali",
        chips:["Core Member","Device-Name"],
        status:"status",
        img:"https://picsum.photos/100?e",
        reaches:[
            {name:"Github", url:"https://github.com/mvaisakh"},
            {name:"Telegram", url:"https://telegram.me/mvaisakh"}
        ]
    }
]
</script>

<style>
.card-container{
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    margin: 0 auto;
    justify-content: space-evenly;
}
</style>