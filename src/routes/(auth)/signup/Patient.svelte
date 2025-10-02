<script>
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
</script>

<span class="flex gap-2.5 di">
    <input class="w-100" type="text" name="matric" id="matric" required placeholder="Enter your matric number...">
    <select class="w-100" name="department" id="department" required>
        <option value="" selected>Select your department</option>
        {#each departments as department}
            <option value={department}>{department}</option>            
        {/each}
    </select>
</span>
<span class="flex gap-2.5 di">
    <input class="w-100" type="date" name="date" id="date" required>
    <select class="w-100" name="Gender" id="Gender" required>
        <option value="" selected>Select your Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
</span>