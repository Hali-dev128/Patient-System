<script>
    import Button from "$lib/shared/Button.svelte";
	import Calender from "$lib/shared/Calender.svelte";
	import { scale } from "svelte/transition";
    
    $: select = 'Upcoming';
</script>

<div class="dash dash2">
    <h2 class="font-bold text-xl">Appointments</h2>

    <article>
        <section class="top">
            <form class="form top" in:scale={{duration: 200, delay: 400}} out:scale>
                <span>
                    <h3 class="font-bold text-xl">Book your next appointment</h3>
                </span>

                <section>
                    <Calender />
                    <ul class="grid grid-cols-3 justify-between gap-1.5">
                        <li><Button light={true} rad={true}>10:00am</Button></li>
                        <li><Button light={true} rad={true}>10:30am</Button></li>
                        <li><Button light={true} rad={true}>12:00pm</Button></li>
                        <li><Button light={true} rad={true}>12:30pm</Button></li>
                        <li><Button light={true} rad={true}>02:00pm</Button></li>
                        <li><Button light={true} rad={true}>02:30pm</Button></li>
                        <li><Button light={true} rad={true}>04:00pm</Button></li>
                        <li><Button light={true} rad={true}>04:30pm</Button></li>
                        <li><Button light={true} rad={true}>05:00pm</Button></li>
                    </ul>
                    <select name="doctor" id="doctor" required>
                        <option value="" selected>Select Doctor</option>
                        <option value="Dr. jerry">Dr. jerry</option>
                        <option value="Dr. Thompson">Dr. Thompson</option>
                        <option value="Dr. Phil">Dr. Phil</option>
                        <option value="Dr. Jason">Dr. Jason</option>
                    </select> 
                    <!-- <input type="time" name="time" id="time" required placeholder="Select a time"> -->
                    <textarea name="reason" id="reason" required placeholder="Enter reason for visit..."></textarea>

                    <Button type={'submit'} light={true}>Book Appointment</Button>
                </section>
            </form>
        </section>
        <section>
            <div in:scale={{duration: 200, delay: 600}} class="notes appoint" out:scale>
                <span class="flex justify-between items-center">
                    <h3 class="font-bold text-xl">{select == 'Upcoming' ? select : select+"'s"} Appointments</h3>
                    <select style="color: var(--sec-color); border-radius: 10px;" bind:value={select}>
                        <option value="Upcoming">Upcoming</option>
                        <option value="Today">Today</option>
                    </select>
                </span>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <ul>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alarm-clock-icon lucide-alarm-clock lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Pending</p>
                        <Button flex={true} light={true}>Cancel
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        </Button>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alarm-clock-icon lucide-alarm-clock lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>In Consultation</p>
                        <Button flex={true}>Cancel
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        </Button>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                    <li>
                        <svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alarm-clock-icon lucide-alarm-clock lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M12 9v4l2 2"></path><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Waiting</p>
                        <Button flex={true} light={true}>Cancel
                            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-x-icon lucide-x lucide-icon customizable"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                        </Button>
                        <!-- <span><svg data-v-14c8c335="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-ellipsis-icon lucide-circle-ellipsis lucide-icon customizable"><circle cx="12" cy="12" r="10"></circle><path d="M17 12h.01"></path><path d="M12 12h.01"></path><path d="M7 12h.01"></path></svg></span> -->
                    </li>
                </ul>
            </div>
            <div in:scale={{duration: 200, delay: 800}} class="notes appoint" out:scale>
                <h3 class="font-bold text-xl">Past Appointments</h3>
                <div class="pass">
                    <input type="text" id="search" placeholder="Search...">
                    <label for="search">
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    </label>
                </div>
                <ul>
                    <li>
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-alarm-clock-check-icon lucide-alarm-clock-check lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path><path d="m9 13 2 2 4-4"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Seen</p>
                    </li>
                    <li>
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-alarm-clock-check-icon lucide-alarm-clock-check lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path><path d="m9 13 2 2 4-4"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Missed</p>
                    </li>
                    <li>
                        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-alarm-clock-check-icon lucide-alarm-clock-check lucide-icon customizable"><circle cx="12" cy="13" r="8"></circle><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path><path d="m9 13 2 2 4-4"></path></svg>
                        <p>Dr. Jerry</p>
                        <p>Check up for malaria</p>
                        <p>11:00am, 25th October 2025</p>
                        <p>Missed</p>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</div>

<style>
    .dash form.form {
        width: 100%;
        margin: 0;
    }

    .dash.dash2 article > section.top {
        position: static;
    }
</style>