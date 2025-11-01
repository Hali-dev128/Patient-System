<script>
    import { IsUserLogin } from "$lib/stores/ManagementStore";
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import Calender from "$lib/shared/Calender.svelte";
	import { fade } from "svelte/transition";
    import Button from "$lib/shared/Button.svelte";
	import { Role } from "$lib/stores/ManagementStore";
    import ViewNote from "$lib/shared/modals/ViewNote.svelte"
	import Vitals from "$lib/shared/modals/Vitals.svelte";
	import Notes from "$lib/shared/modals/Notes.svelte";
	import Prescribe from "$lib/shared/modals/Prescribe.svelte";
	import AddRecords from "$lib/shared/modals/AddRecord.svelte";

    onMount(() => {
        if ($IsUserLogin == '' || $Role == 'patient') {
            goto('/login')
        }
    })

    let variable = false;
    let variable2 = false;
    let variable3 = false;
    let variable4 = false;
    let variable5 = false;
</script>

{#if variable}
    <ViewNote on:click={() => variable = false} />
{/if}
{#if variable2}
    <Vitals on:click={() => variable2 = false} />
{/if}
{#if variable3}
    <Notes on:click={() => variable3 = false} />
{/if}
{#if variable4}
    <AddRecords on:click={() => variable4 = false} />
{/if}
{#if variable5}
    <Prescribe on:click={() => variable5 = false} />
{/if}

<div class="dash">    
    <span class="flex items-center gap-1" style="color: var(--sec-color);">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <span style="cursor: pointer;" on:click={()=>history.back(-1)}>
            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-icon lucide-arrow-left lucide-icon customizable"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        </span>
        <h2 class="font-bold text-xl">Patient Profile</h2>
    </span>

    <article>
        <section class="top">
            <div>
                <span class="profileImg">
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                </span>
                <span class="nameNage text-center">
                    <h3 class="font-bold text-xl">Odumu Muhammad</h3>
                </span>
                {#if $Role == 'doctor'}
                    <a href={`/payments`}>
                        <Button full='true' light={true}>Bill Patient</Button>
                    </a>
                {/if}
            </div>
            <div>
                <h3 class="font-bold text-xl">Information:</h3>
                <ul class="info">
                    <li style="font-size: 14px;"><span class="font-bold">Gender: </span> Male</li>
                    <li style="font-size: 14px;"><span class="font-bold">Date Of Birth: </span> 12th April, 2002</li>
                    <li style="font-size: 14px;"><span class="font-bold">Matric Number: </span> BHU/23/04/05/0040</li>
                    <li style="font-size: 14px;"><span class="font-bold">Phone Number: </span> 08133234404</li>
                    <li style="font-size: 14px;"><span class="font-bold">Email: </span> hali763@gmail.com</li>
                    <li style="font-size: 14px;"><span class="font-bold">Address: </span> Portfolio Hostel</li>
                    <li style="font-size: 14px;"><span class="font-bold">Blood Group:</span>  O+ (Positive)</li>
                    <li style="font-size: 14px;"><span class="font-bold">Allergies: </span> Milk, Penicillin</li>
                    <li style="font-size: 14px;"><span class="font-bold">Diseases: </span> Diabetes, Blood Disorders</li>
                </ul>
            </div>
        </section>
        <section>
            <div class="vitals">
                <!-- Put in calender -->
                <div class="flex justify-between items-center">
                    <h3 class="font-bold text-xl">Patient's Vitals</h3>
                    {#if $Role == 'nurse'}
                        <Button light={true} on:click={() => variable2 = true}>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus lucide-icon customizable"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </Button>
                    {/if}
                </div>
                <h3 class="font-bold">Pick a date to view his vitals:</h3>
                <span>
                    <Calender/>
                    <ul class="vit">
                        <h3 class="font-bold">Most recent check:</h3>
                        <li>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-activity-icon lucide-activity lucide-icon customizable"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                            <span><strong>Temperature:</strong> 36.5C</span>
                            <!-- <span class="text-xs"><strong>Temperature:</strong> 36.5C</span> -->
                            <span><strong>Heart Rate:</strong> 75bpm</span>
                            <!-- <span class="text-xs"><strong>Heart Rate:</strong> 75bpm</span> -->
                            <span><strong>Respiratory Rate:</strong> 11 breaths/min</span>
                            <!-- <span class="text-xs"><strong>Respiratory Rate:</strong> 11 breaths/min</span> -->
                            <span><strong>Blood Pressure:</strong> 110mmHg</span>
                            <!-- <span class="text-xs"><strong>Blood Pressure:</strong> 110mmHg</span> -->
                            <span><strong>Time:</strong> 11:00am</span>
                            <!-- <span class="text-xs"><strong>Time:</strong> 11:00am</span> -->
                            <span><strong>Date:</strong> 25th October 2025</span>
                            <!-- <span class="text-xs"><strong>Date:</strong> 25th October 2025</span> -->
                        </li>
                    </ul>
                </span>
            </div>
            <div class="notes">
                <div class="flex justify-between items-center">
                    <h3 class="font-bold text-xl">Nurse Notes</h3>
                    {#if $Role == 'nurse'}
                        <Button light={true} on:click={() => variable3 = true}>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus lucide-icon customizable"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </Button>
                    {/if}
                </div>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <ul>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text lucide-icon customizable"><path d="M8 2v4"></path><path d="M12 2v4"></path><path d="M16 2v4"></path><rect width="16" height="18" x="4" y="4" rx="2"></rect><path d="M8 10h6"></path><path d="M8 14h8"></path><path d="M8 18h5"></path></svg>
                        <h3>Note Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus nam numquam, quisquam ullam est, cupiditate vitae quaerat exercitationem optio, libero architecto eligendi reiciendis? Laudantium laborum ex voluptatibus harum perspiciatis.</p>
                        <span>
                            <small>11:00am, 25th October 2025.</small>
                            <small>Written by Nurse Divine</small>
                        </span>
                        <Button flex={true} light={true} on:click={() => variable = true}>View
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                        </Button>
                    </li>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text lucide-icon customizable"><path d="M8 2v4"></path><path d="M12 2v4"></path><path d="M16 2v4"></path><rect width="16" height="18" x="4" y="4" rx="2"></rect><path d="M8 10h6"></path><path d="M8 14h8"></path><path d="M8 18h5"></path></svg>
                        <h3>Note Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus nam numquam, quisquam ullam est, cupiditate vitae quaerat exercitationem optio, libero architecto eligendi reiciendis? Laudantium laborum ex voluptatibus harum perspiciatis.</p>
                        <span>
                            <small>11:00am, 25th October 2025.</small>
                            <small>Written by Nurse Divine</small>
                        </span>
                        <Button flex={true} on:click={() => variable = true}>View
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                        </Button>
                    </li>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notepad-text-icon lucide-notepad-text lucide-icon customizable"><path d="M8 2v4"></path><path d="M12 2v4"></path><path d="M16 2v4"></path><rect width="16" height="18" x="4" y="4" rx="2"></rect><path d="M8 10h6"></path><path d="M8 14h8"></path><path d="M8 18h5"></path></svg>
                        <h3>Note Title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus nam numquam, quisquam ullam est, cupiditate vitae quaerat exercitationem optio, libero architecto eligendi reiciendis? Laudantium laborum ex voluptatibus harum perspiciatis.</p>
                        <span>
                            <small>11:00am, 25th October 2025.</small>
                            <small>Written by Nurse Divine</small>
                        </span>
                        <Button flex={true} light={true} on:click={() => variable = true}>View
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                        </Button>
                    </li>
                </ul>
            </div>
            <div class="records">
                <span class="flex justify-between items-center">
                    <h3 class="font-bold text-xl">Medical Records</h3>
                    {#if $Role == 'doctor'}
                        <Button light={true} on:click={() => variable4 = true}>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus lucide-icon customizable"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </Button>
                    {/if}
                </span>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <ul>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text lucide-icon customizable"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Record
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true} light={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text lucide-icon customizable"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Record
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text lucide-icon customizable"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Record
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true} light={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="prescribe">
                <span class="flex justify-between items-center">
                    <h3 class="font-bold text-xl">Prescriptions</h3>
                    {#if $Role == 'doctor'}
                        <Button light={true} on:click={() => variable5 = true}>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus lucide-icon customizable"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                        </Button>
                    {/if}
                </span>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                    </div>
                <ul>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse-icon lucide-heart-pulse lucide-icon customizable"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> prescription
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true} light={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse-icon lucide-heart-pulse lucide-icon customizable"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> prescription
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                    <li class="relative">
                        <p>
                            <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse-icon lucide-heart-pulse lucide-icon customizable"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg> prescription
                        </p>
                        <small>11:00am, 25th October 2025</small>
                        <small>Uploaded by Dr. James</small>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <Button flex={true} light={true}>View
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                            </Button>
                            <Button flex={true} light={true}>Download
                                <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download lucide-icon customizable"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                            </Button>
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</div>

<style>
    .records ul, .prescribe ul {
        display: flex;
        flex-direction: column;
    }
</style>
