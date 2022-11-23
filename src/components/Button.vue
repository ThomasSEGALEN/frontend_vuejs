<template>
    <button class="button">
        <slot class="button-text"></slot>
    </button>
    <!-- <span class="button-text">Get Started</span> -->
</template>

<script>
export default {
    props: {
        buttonText: String,
    },
};
</script>

<style>
.button {
    border: none;
}
</style>
