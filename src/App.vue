<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
 <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/features">Features</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <RouterLink to="/pricing">Pricing</RouterLink>
 </nav>
 <main>
  <RouterView/>
 </main>
</template>
