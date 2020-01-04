<template lang="pug">
    div.page
        header#page-header
            .container
                nuxt-link.title(
                    to="/"
                )
                    span Haden Fletcher
        #page-content
            nuxt
</template>

<style lang="postcss">
#__nuxt {
    @apply w-screen min-h-screen;
}

#__layout {
    @apply w-screen min-h-screen;
}

.page {
    @apply h-screen flex flex-col;
}

#page-header {
    @apply border-0 border-b-2 border-solid py-4 px-2;

    border-color: rgba(255, 255, 255, 0.1);

    .title {
        @apply leading-tight inline-flex font-black no-underline text-3xl;

        letter-spacing: -1.5px;

        span {
            @apply px-4 py-2 text-black;

            background: #f2c94c;
        }
    }
}

#page-content {
    @apply overflow-y-scroll h-full;
}

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0;
}
</style>
