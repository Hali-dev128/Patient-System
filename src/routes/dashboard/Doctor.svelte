<script>
    import Button from "$lib/shared/Button.svelte";
	import { fade } from "svelte/transition";
</script>

<div class="dash">
    <h2 class="font-bold text-xl">Hey Doc</h2>

    <article>
        <section>
            <div>
                <span class="profileImg">
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                </span>
                <span class="nameNage text-center">
                    <h3 class="font-bold text-xl">Dr. Odumu Muhammad</h3>
                </span>
                <a href="dashboard/edit_profile">
                    <Button full={true} light={true}>Update</Button>
                </a>
            </div>
            <div>
                <h3 class="font-bold text-xl">Information:</h3>
                <ul class="info">
                    <li style="font-size: 14px;"><span class="font-bold">Gender: </span> Male</li>
                    <li style="font-size: 14px;"><span class="font-bold">Phone Number: </span> 09123350525</li>
                    <li style="font-size: 14px;"><span class="font-bold">Email: </span> james344@gmail.com</li>
                    <li style="font-size: 14px;"><span class="font-bold">Staff ID: </span> {crypto.randomUUID().replaceAll('-', '')}</li>
                    <li style="font-size: 14px;"><span class="font-bold">Specialization: </span> Surgeon</li>
                    <li style="font-size: 14px;"><span class="font-bold">License Number:</span>  345678907</li>
                    <li style="font-size: 14px;"><span class="font-bold">Years Of Experience:</span>  14</li>
                </ul>
            </div>
        </section>
        <section>
            <div class="records">
                <h3 class="font-bold text-xl">Today's Appointments</h3>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <ul>
                    <li class="relative">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                        <p>Lionel Messi</p>
                        <p>BHU/23/03/05/0045</p>
                        <p>08133234404</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p></p>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <a href={`/dashboard/${crypto.randomUUID()}`}>
                                <Button flex={true} light={true}>View
                                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                                </Button>
                            </a>
                            <Button flex={true} light={true}>Cancel
                                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </Button>
                        </span>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                    <li class="relative">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                        <p>Lionel Messi</p>
                        <p>BHU/23/03/05/0045</p>
                        <p>08133234404</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Waiting</p>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <a href={`/dashboard/${crypto.randomUUID()}`}>
                                <Button flex={true}>View
                                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                                </Button>
                            </a>
                            <Button flex={true}>Cancel
                                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </Button>
                        </span>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                    <li class="relative">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-circle-user-round-icon lucide-circle-user-round lucide-icon customizable"><path d="M18 20a6 6 0 0 0-12 0"></path><circle cx="12" cy="10" r="4"></circle><circle cx="12" cy="12" r="10"></circle></svg>
                        <p>Lionel Messi</p>
                        <p>BHU/23/03/05/0045</p>
                        <p>08133234404</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p></p>
                        <span class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <a href={`/dashboard/${crypto.randomUUID()}`}>
                                <Button flex={true} light={true}>View
                                    <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-text-icon lucide-book-open-text lucide-icon customizable"><path d="M12 7v14"></path><path d="M16 12h2"></path><path d="M16 8h2"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path><path d="M6 12h2"></path><path d="M6 8h2"></path></svg>
                                </Button>
                            </a>
                            <Button flex={true} light={true}>Cancel
                                <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </Button>
                        </span>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                </ul>
            </div>
        </section>
    </article>
</div>

<style>
    .records {
        max-height: 100%;
    }
    .records ul {
        display: flex;
        flex-direction: column;
    }
    .records ul li {
        gap: 0px;
    }
</style>