<script>
    import Button from "$lib/shared/Button.svelte";
	import UpdateStatus from "$lib/shared/modals/UpdateStatus.svelte";
	import Vitals from "$lib/shared/modals/Vitals.svelte";

    let variable = false;
    let variable2 = false;
</script>

{#if variable}
    <Vitals on:click={() => variable = false} />
{/if}
{#if variable2}
    <UpdateStatus on:click={() => variable2 = false} />
{/if}

<article class="docAppoint">
    <section>
        <div class="notes appoint appoint2">
            <h3 class="font-bold text-xl">Patient's Queue</h3>
            <div class="pass">
                <input type="text" id="search" placeholder="Search...">
                <label for="search">
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                </label>
            </div>
            <ul>
                <li>
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                    <p>Lionel Messi</p>
                    <p>BHU/23/03/05/0045</p>
                    <p>08133234404</p>
                    <p>Check up for malaria</p>
                    <p>11:00am, 25th October 2025</p>
                    <p></p>
                    <span class="flex gap-1.5 flex-wrap">
                        <a href={`/dashboard/${crypto.randomUUID()}`}>
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                        </a>
                        <Button flex={true} light={true} on:click={() => variable = true}>Add Vitals
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-activity-icon lucide-activity lucide-icon customizable"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        </Button>
                        <Button flex={true} light={true} on:click={() => variable2 = true}>Update Status
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-pencil-line-icon lucide-pencil-line lucide-icon customizable"><path d="M13 21h8"></path><path d="m15 5 4 4"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                        </Button>
                    </span>
                </li>
                <li>
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                    <p>Lionel Messi</p>
                    <p>BHU/23/03/05/0045</p>
                    <p>08133234404</p>
                    <p>Check up for malaria</p>
                    <p>11:00am, 25th October 2025</p>
                    <p>Waiting</p>
                    <span class="flex gap-1.5 flex-wrap">
                        <a href={`/dashboard/${crypto.randomUUID()}`}>
                            <Button flex={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                        </a>
                        <Button flex={true} on:click={() => variable = true}>Add Vitals
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-activity-icon lucide-activity lucide-icon customizable"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        </Button>
                        <Button flex={true} on:click={() => variable2 = true}>Update Status
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-pencil-line-icon lucide-pencil-line lucide-icon customizable"><path d="M13 21h8"></path><path d="m15 5 4 4"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                        </Button>
                    </span>
                </li>
                <li>
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                    <p>Lionel Messi</p>
                    <p>BHU/23/03/05/0045</p>
                    <p>08133234404</p>
                    <p>Check up for malaria</p>
                    <p>11:00am, 25th October 2025</p>
                    <p></p>
                    <span class="flex gap-1.5 flex-wrap">
                        <a href={`/dashboard/${crypto.randomUUID()}`}>
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                        </a>
                        <Button flex={true} light={true} on:click={() => variable = true}>Add Vitals
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-activity-icon lucide-activity lucide-icon customizable"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                        </Button>
                        <Button flex={true} light={true} on:click={() => variable2 = true}>Update Status
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-pencil-line-icon lucide-pencil-line lucide-icon customizable"><path d="M13 21h8"></path><path d="m15 5 4 4"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path></svg>
                        </Button>
                    </span>
                </li>
            </ul>
        </div>
    </section>
</article>

<style>
    .docAppoint > section > div {
        max-height: 780px;
    }
</style>
