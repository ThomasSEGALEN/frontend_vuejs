<script>
export default {
    props: ['route', 'label'],
};
</script>

<template>
    <router-link class="button-component" :to="route">{{ label }} </router-link>
</template>

<style>
.button-component {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
