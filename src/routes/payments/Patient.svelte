<script>
	import Calender from "$lib/shared/Calender.svelte";
    import Button from "$lib/shared/Button.svelte";
	import { fade } from "svelte/transition";
</script>


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
            <h3 class="font-bold text-xl">Ongoing Payments</h3>
            <span class="pass">
                <input type="text" id="search" placeholder="Search...">
                <label for="search">
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                </label>
            </span>

            <ul class="patientPay">
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Pending</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-shopping-cart-icon lucide-shopping-cart lucide-icon customizable"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-refresh-cw-icon lucide-refresh-cw lucide-icon customizable"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Pending</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-shopping-cart-icon lucide-shopping-cart lucide-icon customizable"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-refresh-cw-icon lucide-refresh-cw lucide-icon customizable"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Pending</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-shopping-cart-icon lucide-shopping-cart lucide-icon customizable"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-refresh-cw-icon lucide-refresh-cw lucide-icon customizable"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></span>
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
            </ul>
            
            <h3 class="font-bold text-xl">Payments History</h3>
            <span class="pass">
                <input type="text" id="search" placeholder="Search...">
                <label for="search">
                    <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                </label>
            </span>
            
            <ul class="patientPay">
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Approved</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Approved</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>RRR#:</strong> {crypto.randomUUID()}</span>
                        <span><strong>Order#:</strong> {crypto.randomUUID().replaceAll('-', '')}</span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Approved</small></span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <span><strong>Action:</strong> 09156594125</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-printer-icon lucide-printer lucide-icon customizable"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect x="6" y="14" width="12" height="8" rx="1"></rect></svg></span>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</div>

<style>
    select option {
        color: var(--sec-color);
    }

    .patientPay li {
        display: flex;
        gap: 20px;
        align-items: center;
        border-radius: 10px;
        padding: 5px 10px;
        justify-content: space-between;
        transition: 150ms ease-in-out;
        border: 0;
        background-color: var(--sec-color);
        color: var(--pri-color);
    }

    .patientPay {
        grid-template-columns: repeat(auto-fit, minmax(259px, 1fr));
        padding: 5px;
        max-height: 500px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        overscroll-behavior: contain;
    }

    span.cursor-pointer:active {
        scale: .96;
    }
</style>
