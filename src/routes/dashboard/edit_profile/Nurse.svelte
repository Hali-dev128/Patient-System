<script>
    import Button from "$lib/shared/Button.svelte";
    import toast from "svelte-french-toast";
</script>

<section>
    <label for="name" class="font-bold">Personal Information</label>
    <span class="flex gap-2.5 di">
        <input class="w-100" type="text" name="name" id="name" value="Odumu Muhammad" required placeholder="Enter your fullname...">
        <select class="w-100" name="Gender" id="Gender" required>
            <option value="Male" selected>Male</option>
            <option value="Female">Female</option>
        </select>
    </span>
    <span class="flex gap-2.5 di">
        <input type="number" class="w-100" name="phone" id="phone" value="09123350525" required placeholder="Enter your phone number...">
        <input type="email" class="w-100" name="email" id="email" value="haliduodumu532@gmail.com" required placeholder="Enter your email...">
    </span>

    <label for="" class="font-bold">Professional Information</label>
    <input type="text" name="staffId" id="staffId" value={`${crypto.randomUUID()}`} readonly title="Staff ID">
    <input type="text" name="unit" id="unit" value="General Ward" readonly title="Unit">
    <input type="text" name="license" id="license" value={`${crypto.randomUUID()}`} readonly title="NMCN License Number">
    <input type="text" name="years" id="years" value={`15 Years`} readonly title="Years Of Experience">
    <input type="text" name="link" id="link" value={`https//jam.com`} readonly title="Document URL">

    <Button type={'button'} light={true}>Change Password</Button>
    <Button type={'submit'} light={true}>Save Changes</Button>
</section>
