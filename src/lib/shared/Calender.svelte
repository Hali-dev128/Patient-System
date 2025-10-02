<script>
    
    const date = new Date();
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    $: year = date.getFullYear();
    $: month = date.getMonth();
    $: getFirstDayIndex = new Date(year, month, 1).getDay();
    $: numOfDays = new Date(year, month+1, 0).getDate();

    $: currDay = date.getDate();

    const prevMonth = () => {
        if (month <= 0) {
            year--
            month = 11 + 1
        }
        month--
    }

    const nextMonth = () => {
        if (month >= 11) {
            year++
            month = 0 - 1
        }
        month++
    }
</script>

<section>
    <div class="month">
        <ul>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <li class="prev" on:click={prevMonth}>&#10094;</li>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <li class="next" on:click={nextMonth}>&#10095;</li>
            <li>{months[month]} </li>
            <span>{year}</span>
        </ul>
    </div>

    <ul class="weakDays">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
    </ul>

    <ul class="days">
        {#each Array(numOfDays+getFirstDayIndex) as _, i}
            {#if i < getFirstDayIndex || i >= numOfDays+getFirstDayIndex}
            <li>&nbsp;</li>
            {:else}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <li class:active={i == currDay+getFirstDayIndex-1} on:click={() => currDay = i-getFirstDayIndex + 1}>{i - getFirstDayIndex + 1}</li>
            {/if}
        {/each}
    </ul>
</section>

<style>
    .month {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding: 50px 25px;
        width: 100%;
        background-color: var(--pri-color);
        text-align: center;
        position: relative;
        display: inline-block;
        color: var(--sec-color);
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
    }

    .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }
    .prev {
        left: 10px;
    }
    .next {
        right: 10px;
    }
    
    .weakDays {
        padding: 10px;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 5px;
        background-color: #ddd;
    }
    .weakDays li {
        color: var(--sec-color);
        text-align: center;
        border-radius: 10px;
        border: 1px solid var(--sec-color);
    }

    .days {
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        padding: 10px;
        background-color: #eee;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-gap: 5px;
    }
    .days li {
        text-align: center;
        padding: 5px;
        font-size: 12px;
        cursor: pointer;
        font-size: 13px;
        transition: 200ms ease-in-out;
        color: var(--sec-color);
        border-radius: 10px;
        border: 1px solid var(--sec-color);
    }

    .days li:hover, li.active {
        padding: 5px !important;
        background-color: var(--sec-color) !important;
        color: #fff !important;
    }

    .days li:active {
        scale: .98;
    }

    .days li:nth-of-type(2n), .weakDays li:nth-of-type(2n) {
        background-color: #fff;
        color: var(--sec-color);
    }
</style>