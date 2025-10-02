<script>
    import Button from "$lib/shared/Button.svelte";
	import { fly } from "svelte/transition";
	import Patient from "./Patient.svelte";
	import Doctor from "./Doctor.svelte";
	import Nurse from "./Nurse.svelte";
	import { IsUserLogin } from "$lib/stores/ManagementStore";
	import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import toast from "svelte-french-toast";

    onMount(() => {
        if ($IsUserLogin == 'logged') {
            goto('/dashboard')
        }
    })

    let seen = false;

    const handlePass = (e) => {
        if (seen === false) { 
            seen = true
            e.target.previousElementSibling.type = 'text'
        } else {
            seen = false
            e.target.previousElementSibling.type = 'password'
        }
    }

    $: role = 'Patient'

    const handleSub = e => {
        e.preventDefault()
        IsUserLogin.update(user => user = 'logged')
        goto('/dashboard')
        toast.success('Logged in Successfully')
    }
</script>

<svelte:head>
    <title>Bingham eClinic | Signup</title>
</svelte:head>

<form class="form" on:submit={e => handleSub(e)} in:fly={{delay: 400, x: 500}} out:fly={{x: -500}}>
    <span>
        <h1 class="font-bold text-xl">Sign up</h1>
        <p>You are signing up as a {role}</p>
    </span>

    <section>
        <span class="flex gap-2.5 di">
            <input class="w-100" type="text" name="name" id="name" required placeholder="Enter your fullname...">
            <input class="w-100" type="number" name="phone" id="phone" required placeholder="Enter your phone number...">
        </span>
        <input type="email" name="email" id="email" required placeholder="Enter your email...">
        <select name="role" id="role" required bind:value={role}>
            <option value="Patient">Patient</option>
            <option value="Nurse">Nurse</option>
            <option value="Doctor">Doctor</option>
        </select>
        {#if role == 'Patient'}
            <Patient/>
        {:else if role == 'Doctor'}
            <Doctor/>
        {:else}
            <Nurse/>
        {/if}
        <div class="pass">
            <input type="password" name="password" id="password" required placeholder="Enter your password...">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <span on:click={e => handlePass(e)}>
                {#if seen}
                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye lucide-icon customizable"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                {:else}
                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off lucide-icon customizable"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
                {/if}
            </span>
        </div>
        <div class="pass">
            <input type="password" name="confirm" id="" required placeholder="Confirm password...">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <span on:click={e => handlePass(e)}>
                {#if seen}
                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye lucide-icon customizable"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                {:else}
                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off lucide-icon customizable"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
                {/if}
            </span>
        </div>

        <Button type={'submit'} light={true}>Signup</Button>
        <p>Already have an account? <a href="/login" class="underline hover:no-underline">Login</a></p>
    </section>
</form>

<style>
    select > option {
        color: var(--sec-color);
    }
</style>