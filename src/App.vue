<script setup></script>

<template>
    <router-view></router-view>
    <!-- <router-view v-slot="{ Component }" id="app">
        <component :is="Component" />
    </router-view> -->
</template>

<style scoped>
@font-face {
    font-family: 'Satoshi';
    src: local('Satoshi'),
        url('./assets/fonts/Satoshi-Regular.otf') format('opentype');
}
</style>
