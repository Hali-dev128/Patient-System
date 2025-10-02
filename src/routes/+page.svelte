<script>
	import { fade, fly } from "svelte/transition";
</script>

<svelte:head>
    <title>Bingham eClinic | Home</title>
</svelte:head>

<header class="header" transition:fade={{duration: 200}}>
    <img src="./f272943e5355a948e9430a8c79e6f1cb.jpg" role="presentation" loading="lazy" alt="background img">
    <h1 out:fly={{x: 400}} in:fly={{delay: 200, x: 400}} class="font-bold text-2xl">Bingham eClinic</h1>
    <p out:fly={{x: 400}} in:fly={{delay: 200, x: 400}}>Welcome to the official digital clinic of Bingham University. Access your health services conveniently anytime, anywhere. And is a secure platform for managing appointments, medical records, prescriptions, and billing for students and staff.</p>
</header>

<section class="toScrollAnimate about">
    <h2 class="font-bold text-xl">About</h2>
    <p>The Bingham University Clinic provides quality healthcare services for students, staff, and the university community. This system streamlines access to appointments, medical records, and billing.</p>
</section>

<section class="features">
    <h2 class="font-bold text-xl">Features</h2>
    <ul>
        <li class="toScrollAnimate">
            <h3 class="font-bold text-xl">📅 Appointments</h3>
            <p>The Appointment module enables patients to schedule clinic visits with doctors, while allowing doctors and administrators to manage, approve, and track appointments in real time. It eliminates manual booking, reduces wait time, and ensures better patient flow at the clinic.</p>
        </li>
        <li class="toScrollAnimate">
            <h3 class="font-bold text-xl">📁 Medical Records</h3>
            <p>The Medical Records module securely stores and manages each patient’s clinical history, including diagnoses, treatments, prescriptions, and test results. Patients can view their records, doctors can update them, and administrators ensure proper access control.</p>
        </li>
        <li class="toScrollAnimate">
            <h3 class="font-bold text-xl">💊 Prescriptions</h3>
            <p>The Prescriptions module allows doctors to issue digital prescriptions linked to patient records, ensuring easy access to medications and treatment plans. Patients can view prescriptions online, while administrators manage prescription history and prevent misuse.</p>
        </li>
        <li class="toScrollAnimate">
            <h3 class="font-bold text-xl">💳 Billing & Invoices</h3>
            <p>The Billing & Invoice module handles patient payments for consultations, medications, and lab tests. It allows patients to view and pay bills, doctors to log chargeable services, and administrators to generate invoices, track payments, and ensure transparency in financial records.</p>
        </li>
    </ul>
</section>

<section class="contact">
    <h2 class="font-bold text-xl">Contact / Support</h2>
    <div>
        <p>Clinic Address: Bingham University karu</p>
        <p>Phone: +234915692541</p>
        <p>Email: hali.dev128@gmail.com</p>
    </div>
</section>

<style>
    .header {
        height: 75vh;
        color: var(--pri-color);
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        border-bottom-left-radius: 150px;
    }

    .header h1, .header p {
        z-index: 3;
    }
        
    .header::before, .header img {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0009;
        backdrop-filter: blur(3px);
        width: 100%;
        height: 100%;
        z-index: 2;
        border-radius: inherit;
    }

    .header img {
        z-index: 1;
    }

    .about, .features li, .contact {
        border-radius: 10px;
        box-shadow: var(--set-shadow);
    }

    .about, .features li, .contact {
        background-color: var(--sec-color);
        padding: 20px;
        color: var(--pri-color);
    }

    .features {
        display: grid;
        gap: 10px;
    }

    .features ul {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .features li {
        /* max-width: 350px; */
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        min-height: 100px;
    }

    .contact {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>