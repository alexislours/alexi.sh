<script lang="ts">
    import { isDarkMode } from "$utils/theme";
    import { onMount } from "svelte";

    function updateTheme() {
        if (document.querySelector(".utterances-frame")) {
            const theme = isDarkMode() ? "github-dark" : "github-light"
            const message = {
                type: "set-theme",
                theme: theme,
            };
            const iframe: HTMLIFrameElement | null = document.querySelector(".utterances-frame");
            iframe?.contentWindow?.postMessage(message, "https://utteranc.es");
        }
    }

    onMount(() => {
        window.addEventListener("isDarkModeChange", updateTheme);
    });
</script>

<div>
    <script
        src="https://utteranc.es/client.js"
        repo="alexislours/alexi.sh"
        issue-term="pathname"
        theme={isDarkMode() ? "github-dark" : "github-light"}
        crossorigin="anonymous"
        async
    >
    </script>
</div>
