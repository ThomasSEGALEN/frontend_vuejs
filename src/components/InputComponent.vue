<template>
    <input class="input" placeholder="{{placeholder}}" />
</template>

<style>
input {
    padding-left: 20px;
}

input::placeholder {
    font-family: 'Satoshi';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    text-transform: capitalize;
    color: #aeaeae;
}
</style>
