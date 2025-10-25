<script>
	import Button from "$lib/shared/Button.svelte";    
</script>

<div class="dash">
    <h2 class="font-bold text-xl">Payments</h2>
    
    <article>
        <section class="top">
            <div class="flex flex-col gap-2.5">
                <h3 class="font-bold">Send bill:</h3>
                <form class="flex flex-col gap-2.5">
                    <select name="patients" class="pay">
                        <option value="None Selected">Select Patient</option>
                        <option value="Lab Results">Lab Results</option>
                        <option value="Drugs">Drugs</option>
                    </select>
                    <select name="serviceType" class="pay">
                        <option value="None Selected">Select Service Type</option>
                        <option value="Prescription">Prescription</option>
                        <option value="Lab Test">Lab Test</option>
                        <option value="Consultation Fee">Consultation Fee</option>
                    </select>
                    <input type="number" name="amount" id="amount" required placeholder="Enter amount...">
                    <textarea name="paymentNote" placeholder="Notes (optional)..." required></textarea>
                    <Button light={true} type="submit">Generate Bill</Button>
                </form>
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
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Unpaid</small></span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-bell-ring-icon lucide-bell-ring lucide-icon customizable"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg></span>
                            <span title="View Payment History" class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-eye-icon lucide-eye lucide-icon customizable"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Unpaid</small></span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-bell-ring-icon lucide-bell-ring lucide-icon customizable"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg></span>
                            <span title="View Payment History" class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-eye-icon lucide-eye lucide-icon customizable"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
                        </div>
                    </div>
                </li>
                <li class="relative">
                    <div class="w-100 flex flex-col">
                        <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Paid</small></span>
                        <span><strong>Amount:</strong> 15,000</span>
                        <span><strong>Payment Type:</strong> Lab Tests</span>
                        <span><strong>Date:</strong> 11/09/2025</span>
                        <div class="flex gap-1.5 flex-wrap self-end absolute bottom-1.5">
                            <span title="View Payment History" class="cursor-pointer" style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;"><svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-eye-icon lucide-eye lucide-icon customizable"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg></span>
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

    span.cursor-pointer:active {
        scale: .96;
    }
</style>
