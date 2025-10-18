<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { IsUserLogin } from "$lib/stores/ManagementStore";
    import Patient from "./Patient.svelte";
	import Doctor from "./Doctor.svelte";
	import Nurse from "./Nurse.svelte";
	import { fade } from "svelte/transition";
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
