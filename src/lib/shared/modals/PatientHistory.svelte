<script>
	import { fade, scale } from "svelte/transition";
	import Button from "../Button.svelte";
</script>

<article>
    <div class="backdrop" transition:fade={{duration: 250}}>
        <span>
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </span>
    </div>
    <section transition:fade={{delay: 250}}>
        <h2 class="text-xl font-bold">James Payments History</h2>

        <ul class="flex flex-col gap-1.5">
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
            <li class="flex flex-col" style="background: var(--pri-color);color: var(--sec-color);padding: 5px 10px;border-radius: 10px">
                <span>Amount: 15,000</span>
                <span>Payment Type: Lab Tests</span>
                <span>Date: 11/09/2025</span>
            </li>
        </ul>
    </section>  
</article>

<style>
    article {
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: grid;
        place-items: center;
        height: 100%;
    }

    .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0009;
        backdrop-filter: blur(3px);
    }

    .backdrop span {
        color: #fff;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    section {
        position: absolute;
        border-radius: 10px;
        width: var(--MW);
        padding: 15px;
        background-color: var(--sec-color);
        color: var(--pri-color);
        display: flex;
        gap: 15px;
        flex-direction: column;
    }

    ul {
        max-height: 400px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
    }
</style>    
