<script>
    import Button from "$lib/shared/Button.svelte";
	import Recent from "./Recent.svelte";
	import Pending from "./Pending.svelte";
	import Past from "./Past.svelte";
	import { fade } from "svelte/transition";

    $: select = 'All';
    $: tab = 'recent';
</script>

<article class="docAppoint">
    <section>
        <div>
            <Button active={tab == 'recent'} light={true} on:click={() => tab = 'recent'}>Most Recent</Button>
            <Button active={tab == 'pending'} light={true} on:click={() => tab = 'pending'}>Pending</Button>
            <Button active={tab == 'past'} light={true} on:click={() => tab = 'past'}>Past</Button>
        </div>

        <div class="notes appoint appoint2">
            {#if tab == 'recent'}
                <Recent/>
            {:else if tab == 'pending'}
                <Pending/>
            {:else if tab == 'past'}
                <Past/>
            {/if}
        </div>
    </section>
</article>