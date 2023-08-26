<script>
    import {show} from "$lib/store.js"
    import Collapse from "./Collapse.svelte"
    
</script>

<nav class="w-80 bg-gray-900 p-4">
    <Collapse />
    <ul>
        <li class="rounded-md py-2 pl-4 hover:bg-gray-700">
            <a
                class="flex gap-x-3 p-2 text-sm font-semibold leading-6 text-white"
                href="/"
            >
                <svg
                    class="h-6 w-6 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                </svg>
                {#if $show}
                    <span>Home</span>
                {/if}
            </a>
        </li>
        <li class="rounded-md py-2 pl-4 hover:bg-gray-700">
            <a
                class="flex gap-x-3 p-2 text-sm font-semibold leading-6 text-white"
                href="/"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="white"
                        d="M12 21c-.801 0-1.555-.312-2.121-.879S8.999 18.8 9 17.998c0-.746.271-.998.764-1.998H4.928c-1.654 0-3-1.347-3-3c0-1.654 1.346-3 3-3h4.836C9.27 9 9 8.745 9 7.999a2.979 2.979 0 0 1 .88-2.121c1.132-1.132 3.108-1.133 4.241.001L21.242 13l-7.121 7.121A2.978 2.978 0 0 1 12 21zm-7.072-9a1.001 1.001 0 0 0 0 2h9.658l-3.293 3.293a.99.99 0 0 0-.293.706c0 .269.104.519.293.708a1.023 1.023 0 0 0 1.414 0L18.414 13l-5.707-5.707a1.023 1.023 0 0 0-1.414 0a.99.99 0 0 0-.293.706c0 .268.104.519.293.708L14.586 12H4.928z"
                    />
                </svg>
                {#if $show}
                    <span>Expand</span>
                {/if}
            </a>
        </li>
    </ul>
</nav>