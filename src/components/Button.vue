<script>
export default {
    props: ['route'],
};
</script>

<template>
    <router-link class="button" :to="route">
        <slot class="button-icon"></slot>
    </router-link>
</template>
