<script>
	import { fade } from 'svelte/transition';
	import '../app.css';
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Toaster } from 'svelte-french-toast';
    import { IsUserLogin } from "$lib/stores/ManagementStore";
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Loading from '$lib/shared/Loading.svelte';
	import { Role } from "$lib/stores/ManagementStore";
</script>

<Toaster />

{#if $IsUserLogin == 'logged'}
    <Sidebar />
{/if}

<div>
    <Navbar/>

    <main class="main">
        
        <article>
            <slot></slot>
            <select style="width: var(--width); margin: 0 auto;" bind:value={$Role} class="text-zinc-900">
                <option value="patient">patient</option>
                <option value="doctor">doctor</option>
                <option value="nurse">nurse</option>
                <option value="admin">admin</option>
            </select>
        </article>
    </main>

    <Footer/>
</div>

<style>
    div, article {
        display: grid;
    }

    article {
        gap: var(--gap);
    }
</style>
