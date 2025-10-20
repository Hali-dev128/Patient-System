<script>
	import Calender from "$lib/shared/Calender.svelte";
    import Button from "$lib/shared/Button.svelte";
	import { fade } from "svelte/transition";
</script>

<!-- <div class="pass">
    <input type="text" id="search" placeholder="Search...">
    <label for="search">
        <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
    </label>
</div> -->

<div class="dash">
    <h2 class="font-bold text-xl">Payments</h2>

    <article>
        <section class="top">
            <div class="flex flex-col gap-2.5">
                <ul class="flex flex-col">
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Matric Number</span>
                        <span>BHU/23/04/05/0040</span>
                    </li>
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Name</span>
                        <span>MUHAMMAD HALIDU ODUMU</span>
                    </li>
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Programme</span>
                        <span>COMPUTER SCIENCE</span>
                    </li>
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Level</span>
                        <span>300 Level</span>
                    </li>
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Email</span>
                        <span>haliduodumu432@gmail.com</span>
                    </li>
                    <li class="flex justify-between py-2 border-b-2 border-e-white">
                        <span class="font-bold">Phone</span>
                        <span>09156594125</span>
                    </li>
                </ul>
                <h3 class="font-bold">Payment for:</h3>
                <select name="payment" class="pay">
                    <option value="None Selected">None Selected</option>
                    <option value="Lab Results" data-price="10000">Lab Results</option>
                    <option value="Drugs" data-price="5500">Drugs</option>
                </select>
                <Button light={true}>Generate RRR</Button>
            </div>
        </section>
        <section>
            <div class="pay">
                <h3 class="font-bold text-xl">Ongoing Payments</h3>

                <ul>
                    <li>
                        <span class="font-bold">RRR#</span>
                        <span class="font-bold">Order#</span>
                        <span class="font-bold">Amount</span>
                        <span class="font-bold">Status</span>
                        <span class="font-bold">Payment Type</span>
                        <span class="font-bold">Date</span>
                        <span class="font-bold">Action</span>
                    </li>
                    <li>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                        <span class="font-bold"></span>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</div>

<style>
    select option {
        color: var(--sec-color);
    }

    .pay ul {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .pay ul li {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 5px;
    }
</style>
