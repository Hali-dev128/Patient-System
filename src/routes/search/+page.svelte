<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { IsUserLogin } from "$lib/stores/ManagementStore";
	import { fade } from "svelte/transition";
	import Patient from "./Patient.svelte";
	import Doctor from "./Doctor.svelte";
	import { Role } from "$lib/stores/ManagementStore";
	import toast from "svelte-french-toast";

    onMount(() => {
        if ($IsUserLogin == '') {
            goto('/login')
        }
		if ($Role == 'admin') {
            goto('/login')
            toast.error('Sorry, this feature is not available to you yet');
        }
    })

    // $: currPage = 1;
    // $: storiesPerPage = 12;
    // $: lastIndex = currPage * storiesPerPage;
    // $: firstIndex = lastIndex - storiesPerPage;
    // $: storiesList = data.slice(firstIndex, lastIndex);
    // $: nPage = Math.ceil(data.length / storiesPerPage);
    // $: numbers = [...Array(nPage+1).keys()].slice(1);
</script>

<article class='docAppoint'>
    <section>
        {#if $Role == 'patient'}
            <h2 class="font-bold text-xl">Find Doctors</h2>
        {:else if $Role == 'doctor' || $Role == 'nurse'}
            <h2 class="font-bold text-xl">Find Patients & Records</h2>
        {/if}
        <span class="pass" in:fade={{delay: 200}} out:fade>
            {#if $Role == 'patient'}
                <input type="text" id="search" placeholder="Search by Doctor Name, Specialization...">
            {:else if $Role == 'doctor' || $Role == 'nurse'}
                <input type="text" id="search" placeholder="Search by Patient Name, Matric Number...">
            {/if}
            <label for="search">
                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
            </label>
        </span>
    </section>

    <section class='searchList' in:fade={{delay: 400}} out:fade>
        <ul>
            {#if $Role == 'patient'}
                <Patient/>
            {:else if $Role == 'doctor' || $Role == 'nurse'}
                <Doctor/>
            {/if}
        </ul>
    </section>

    <!-- {#if numbers.length > 1}
    <ul class="pagination">
        <Button paginate={true} disable={currPage === 1} on:click={() => currPage--}>{'<'}</Button>
        {#each numbers as num}
        <Button inverse={true} paginate={true} on:click={() => currPage = num}>{num}</Button>
        {/each}
        <Button paginate={true} disable={currPage === numbers.length} on:click={() => currPage++}>{'>'}</Button>
    </ul>
    {/if} -->
</article>

<style>
    .docAppoint {
        display: flex;
        flex-direction: column;
        gap: var(--gap);
    }
</style>
