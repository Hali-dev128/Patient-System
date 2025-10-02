<script>
    import { fly } from "svelte/transition";
	import { Role } from "$lib/stores/ManagementStore";

    $: isOpen = false;
</script>

<aside transition:fly={{x: -100}}>
    <ul>
        <a href="/dashboard" aria-label="dashboard link" title="dashboard">
            <li class:open={isOpen}>
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard-icon lucide-layout-dashboard lucide-icon customizable"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
                <span>Dashboard</span>
            </li>
        </a>
        <a href="/search" aria-label="search link" title="search">
            <li class:open={isOpen}>
                <!-- <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-telescope-icon lucide-telescope lucide-icon customizable"><path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"></path><path d="m13.56 11.747 4.332-.924"></path><path d="m16 21-3.105-6.21"></path><path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"></path><path d="m6.158 8.633 1.114 4.456"></path><path d="m8 21 3.105-6.21"></path><circle cx="12" cy="13" r="2"></circle></svg> -->
                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                <span>{$Role == 'doctor' || $Role == 'nurse' ? 'Patients' : 'Doctors'}</span>
            </li>
        </a>
        <a href="/appointments" aria-label="appointments link" title="appointments">
            <li class:open={isOpen}>
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-clock-icon lucide-calendar-clock lucide-icon customizable"><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h5"></path><path d="M17.5 17.5 16 16.3V14"></path><circle cx="16" cy="16" r="6"></circle></svg>
                <span>Appointments</span>
            </li>
        </a>
        <a href="/payments" aria-label="payments link" title="payments">
            <li class:open={isOpen}>
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-dollar-sign-icon lucide-circle-dollar-sign lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                <span>Payments</span>
            </li>
        </a>
        <li class:open={isOpen}>
            <button title="Navigate" on:click={() => isOpen == false ? isOpen = true : isOpen = false}>
                {#if isOpen}
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                {:else}
                <!-- <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu lucide-icon customizable"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg> -->
                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-navigation2-icon lucide-navigation-2 lucide-icon customizable"><polygon points="12 2 19 21 12 17 5 21 12 2"></polygon></svg>
                {/if}
                <span>Navigate</span>
            </button>
        </li>
    </ul>
</aside>

<style>
    aside {
        position: fixed;
        z-index: 2000;
        left: 6px;
        bottom: 6px;
        background-color: var(--sec-color);
        padding: 6px;
        box-shadow: var(--set-shadow2);
        border-radius: 100vmax;
    }

    aside ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    aside ul li, aside ul a {
        background-color: var(--pri-color);
        border-radius: 100vmax;
        cursor: pointer;
        display: grid;
        place-items: center;
        height: 30px;
        position: relative;
        display: none;
        color: var(--sec-color);
        width: 30px;
    }

    aside ul li.open, aside ul a:has(li.open) {
        position: relative;
    } 

    aside ul li:last-child, aside ul li.open, aside ul a:has(li.open) {
        display: grid;
    }

    aside ul li span {
        color: var(--pri-color);
        position: absolute;
        top: 50%;
        left: 140%;
        background-color: var(--sec-color);
        padding: 5px 10px;
        box-shadow: var(--set-shadow2);
        border-radius: 100vmax;
        opacity: 0;
        pointer-events: none;
        translate: 0% -50%;
        transition: 200ms ease-in-out;
    }

    aside ul li:hover span {
        opacity: 1;
    }
    
    button {
        cursor: pointer;
    }
</style>