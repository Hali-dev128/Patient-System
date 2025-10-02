<script>
    import { IsUserLogin } from "$lib/stores/ManagementStore";
	import Patient from "./Patient.svelte";
	import Doctor from "./Doctor.svelte";
	import Nurse from "./Nurse.svelte";
	import { scale } from "svelte/transition";
	import Button from "$lib/shared/Button.svelte";
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { Role } from "$lib/stores/ManagementStore";

    onMount(() => {
        if ($IsUserLogin == '') {
            goto('/login')
        }
    })
</script>

<section class="dash">

    <span class="flex items-center gap-1" style="color: var(--sec-color);">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span style="cursor: pointer;" on:click={()=>history.back(-1)}>
            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left lucide-icon customizable"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        </span>
        <h2 class="font-bold text-xl">Edit Profile</h2>
    </span>

    <article>
        <section class="top" in:scale={{delay: 400}} out:scale>
            <span class="profileImg">
                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
            </span>
            <Button light={true}>Change Profile</Button>
        </section>

        <form class="form" in:scale={{delay: 400}} out:scale>
            {#if $Role == 'patient'}
                <Patient/>
            {:else if $Role == 'doctor'}
                <Doctor/>
            {:else if $Role == 'nurse'}
                <Nurse/>
            {/if}
        </form>
    </article>
</section>

<style>
    section > article > section {
        width: min(88vw, 700px);
        border-radius: 10px;
        background-color: var(--sec-color);
        color: #fff;
        padding: 20px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    section > article > section .profileImg {
        background-color: var(--sec-color);
        color: var(--pri-color);
        display: grid;
        place-items: center;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }

    section > article > form.form {
        margin: 0;
    }
</style>