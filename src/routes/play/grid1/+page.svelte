<script>
    let show = false
    function toggleMenu() {
        if (show) {
            show = false
        } else {
            show = true
        }
    }
</script>

<div class="grid grid-flow-col gap-1">
    <div class="row-span-4 bg-gray-800 p-4">
        <div class="flex justify-end">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                id="arrow"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                on:click={toggleMenu}
            >
                <path
                    fill="white"
                    d="M10.928 21a2.978 2.978 0 0 1-2.121-.879L1.686 13l7.121-7.121c1.133-1.134 3.109-1.134 4.242 0c.566.564.879 1.317.879 2.119c0 .746-.27 1.451-.764 2.002H18c1.654 0 3 1.346 3 3s-1.346 3-3 3h-4.836c.493.549.764 1.252.764 1.998a2.977 2.977 0 0 1-.879 2.124a2.983 2.983 0 0 1-2.121.878zm-6.414-8l5.707 5.707a1.023 1.023 0 0 0 1.414 0c.189-.189.293-.441.293-.708s-.104-.517-.291-.705L8.342 14H18a1.001 1.001 0 0 0 0-2H8.342l3.293-3.293a.996.996 0 0 0 .001-1.413a1.023 1.023 0 0 0-1.415-.001L4.514 13z"
                />
            </svg>
        </div>
        <nav class="mt-6">
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
                        {#if show}
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
                        {#if show}
                            <span>Expand</span>
                        {/if}
                    </a>
                </li>
            </ul>
        </nav>
    </div>
    <div class="col-span-3 bg-blue-400 p-4">ContextBar</div>
    <div class="col-span-3 row-span-2 bg-red-400 p-4">Content</div>
    <div class="col-span-3 bg-blue-400 p-4">Footer</div>
</div>
