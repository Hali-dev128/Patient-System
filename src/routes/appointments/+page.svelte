<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { IsUserLogin } from "$lib/stores/ManagementStore";
	import { fade } from "svelte/transition";
	import Patient from "./Patient.svelte";
	import Doctor from "./Doctor/Doctor.svelte";
	import Nurse from "./Nurse.svelte";
	import { Role } from "$lib/stores/ManagementStore";

    onMount(() => {
        if ($IsUserLogin == '') {
            goto('/login')
        }
    })
</script>

<div in:fade={{delay: 200}} out:fade>
    {#if $Role == 'patient'}
        <Patient/>
    {:else if $Role == 'doctor'}
        <Doctor/>
    {:else if $Role == 'nurse'}
        <Nurse/>
    {/if}
</div>