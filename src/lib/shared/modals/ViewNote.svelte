<script>
	import { fade, scale } from "svelte/transition";
	import Button from "../Button.svelte";
</script>

<article>
    <div class="backdrop" transition:fade={{duration: 250}}>
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span on:click>
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
        </span>
    </div>
    <section transition:fade={{delay: 250}}>
        <h2 class="text-xl font-bold">Note</h2>
        <form class="flex flex-col gap-2.5">
            <input type="text" name="title" required readonly value="Something">
            <textarea name="body" required readonly>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, dolor eos repellendus perferendis, cupiditate facere, sint esse non reprehenderit quia quas dolore ut quam eum nostrum magni sapiente necessitatibus nam.</textarea>
        </form>
    </section>
</article>

<style>
    textarea {
        height: 200px;
    }
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
</style>
