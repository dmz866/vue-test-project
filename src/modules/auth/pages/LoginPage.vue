<script lang="ts" setup>

import { useRouter } from 'vue-router';
const router = useRouter();
const loginHandler = () =>{
    localStorage.setItem('userId', '123456');
    router.replace('/home');    
}
</script>
<template>
    Login Page

    <button v-on:click="loginHandler">Login</button>
</template>