<script>
	import Button from "$lib/shared/Button.svelte";    
</script>

<div class="dash">
    <h3 class="font-bold text-xl">Uncleared Bills</h3>
    <span class="pass">
        <input type="text" id="search" placeholder="Search...">
        <label for="search">
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        </label>
    </span>

    <ul class="patientPay">
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Unpaid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Unpaid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Unpaid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
    </ul>
    
    <h3 class="font-bold text-xl">Cleared Bills</h3>
    <span class="pass">
        <input type="text" id="search" placeholder="Search...">
        <label for="search">
            <svg data-v-15b35c9e="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-icon customizable lucide-search-icon lucide-search lucide-icon customizable"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
        </label>
    </span>

    <ul class="patientPay">
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Paid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Paid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
        <li>
            <div class="w-100 flex flex-col">
                <span><strong>Name:</strong> James Jeff</span>
                <span><strong>Matric:</strong> BHU/23/02/04/0054</span>
                <span><strong>Status:</strong> <small style="background-color: var(--pri-color); color: var(--sec-color); padding: 4px 8px; border-radius: 100vmax;">Paid</small></span>
                <span><strong>Amount:</strong> 15,000</span>
                <span><strong>Payment Type:</strong> Lab Tests</span>
                <span><strong>Date:</strong> 11/09/2025</span>
            </div>
        </li>
    </ul>
</div>
