<script>
    import Button from "$lib/shared/Button.svelte";
    import toast from "svelte-french-toast";

    const departments = ["Accounting","Anatomy","Architecture","Biochemistry","Biology","Botany","Business Administration","Chemistry","Computer Science","Economics",
"English Language",
"Entrepreneurship",
"Environmental Management",
"Estate Management",
"Guidance and Counseling",
"Industrial Chemistry",
"Industrial Mathematics",
"Information Technology",
"Law",
"Library and Information Science",
"Mass Communication",
"Mathematics",
"Medical Laboratory Science",
"Medicine and Surgery",
"Microbiology",
"Nursing",
"Optometry",
"Pharmacy",
"Philosophy",
"Physics",
"Physiology",
"Political Science",
"Public Health",
"Quantity Surveying",
"Religious Studies",
"Sociology",
"Zoology",
"Radiography and Radiation Science",
"Landscape Architecture",
"Cyber Security",
"Educational Psychology"];
    let depart = 'Computer Science';
</script>

<section>
    <label for="name" class="font-bold">Personal Information</label>
    <span class="flex gap-2.5 di">
        <input class="w-100" type="text" name="name" id="name" value="Odumu Muhammad" required placeholder="Enter your fullname...">
        <input class="w-100" type="date" name="DOB" id="DOB" required>
    </span>
    <select name="Gender" id="Gender" required>
        <option value="Male" selected>Male</option>
        <option value="Female">Female</option>
    </select>
    <span class="flex gap-2.5 di">
        <input type="number" class="w-100" name="phone" id="phone" value="09123350525" required placeholder="Enter your phone number...">
        <input type="email" class="w-100" name="email" id="email" value="haliduodumu532@gmail.com" required placeholder="Enter your email...">
    </span>
    <input type="text" name="address" id="address" required placeholder="Enter your Address...">
    <label for="department" class="font-bold">Student Information</label>
    <span class="flex gap-2.5 di">
        <input class="w-100" type="text" name="matric" id="matric" value="BHU/23/04/05/0040" readonly title="Matric Number">
        <select class="w-100" name="department" id="department" required>
            <option value={depart} selected>{depart}</option>
            {#each departments.filter(d => d !== depart) as department}
                <option value={department}>{department}</option>            
            {/each}
        </select>
    </span>
    <label for="bloodG" class="font-bold">Medical Information</label>
    <select name="bloodG" id="bloodG" required>
        <option value="" selected>Select your blood group</option>
        <option value="A-">A-</option>
        <option value="A+">A+</option>
        <option value="B-">B-</option>
        <option value="B+">B+</option>
        <option value="AB-">AB-</option>
        <option value="AB+">AB+</option>
        <option value="O-">O-</option>
        <option value="O+">O+</option>
    </select>
    <textarea name="allergies" id="allergies" placeholder="Enter Your allergies..."></textarea>
    <textarea name="chronicConditions" id="chronicConditions" placeholder="Enter any chronic conditions you have..."></textarea>

    <Button type={'button'} light={true}>Change Password</Button>
    <Button type={'submit'} light={true}>Save Changes</Button>
</section>