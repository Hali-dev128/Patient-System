<script>
    import { goto } from "$app/navigation";
	import { onMount } from "svelte";
    import { IsUserLogin } from "$lib/stores/ManagementStore";

    onMount(() => {
        if ($IsUserLogin == '') {
            goto('/login')
        }
    })
</script>
payments