<script>
	import Button from "$lib/shared/Button.svelte";
	import { IsUserLogin } from "$lib/stores/ManagementStore";
    import { goto } from "$app/navigation";
    import toast from "svelte-french-toast";
	import { Role } from "$lib/stores/ManagementStore";

    $: open = false

    const handleClick = () => {
        open === false ? open = true : open = false;
    }
</script>

<nav>
    <section class:difSmall={$IsUserLogin !== 'logged' ? true : false}>
        <a href="/">
            <h2 class="font-bold text-xl">Bingham eClinic</h2>
        </a>

        {#if $IsUserLogin == 'logged'}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <button class="user text-start" on:focus={handleClick} on:focusout={handleClick}>
                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                <span class="identity">
                    <h4 class="capitalize font-bold">Odumu Muhammad</h4>
                    <small class="capitalize">{$Role}</small>
                </span>
                <!-- svelte-ignore a11y_click_events_have_key_events -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <span class="out" on:click={() => {
                    IsUserLogin.update(user => user = '');
                    goto('/login')
                    toast.success('Logged out Successfully')
                }} class:open={open}>
                    Logout
                </span>
            </button>
        {:else}
            <div>
                <a href="/login">
                    <Button>Login</Button>
                </a>
                <a href="/signup">
                    <Button>Signup</Button>
                </a>
            </div>
        {/if}
    </section>
</nav>

<style>
    nav {
        box-shadow: var(--set-shadow);
        z-index: 1000;
        position: sticky;
        top: 0;
        background-color: var(--pri-color);
        color: var(--sec-color);
    }

    section {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user > svg {
        cursor: pointer;
    }
    .user {
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .user span {
        line-height: 13px;
        cursor: pointer;
    }

    .out {
        position: absolute;
        bottom: 0;
        left: 0;
        translate: 1000% 150%;
        box-shadow: var(--set-shadow2);
        background-color: var(--sec-color);
        color: var(--pri-color);
        padding: 8px 13px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: 200ms ease-in-out;
    }

    
    .out:active {
        scale: .97;
    }

    .out:hover {
        background-color: var(--pri-color);
        color: var(--sec-color);
        border: 2px solid var(--sec-color);
    }

    .out.open {
        translate: -100% 150%;
    }
</style>
