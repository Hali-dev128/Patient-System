<script>
	import { fade, scale } from "svelte/transition";
	import Button from "../Button.svelte";
</script>

<article>
    <div class="backdrop" transition:fade={{duration: 250}}>
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <span on:click>
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </span>
    </div>
    <section transition:fade={{delay: 250}}>

        <div>
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-badge-check-icon lucide-badge-check lucide-icon customizable"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>

            <h2 class="text-xl font-bold">Success!</h2>
        </div>
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
        display: grid;
        place-items: center;
    }

    section > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
</style>
