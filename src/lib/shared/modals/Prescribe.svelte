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
        <div class="dNd">
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-upload-icon lucide-upload lucide-icon customizable"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
            <span>Drop Prescription Here</span>
        </div>
        <label class="btn light text-center" for="prescription">Upload Prescription</label>
        <input type="file" class="hidden" name="prescription" id="prescription">
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

    .dNd {
        width: 100%;
        height: 200px;
        border: 3px var(--pri-color) dashed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 20px;
        border-radius: 10px;
    }
</style>
