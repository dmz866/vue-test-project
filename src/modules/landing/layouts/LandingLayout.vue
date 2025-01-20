<template>
    <nav>
       <RouterLink to="/">Home</RouterLink>
       <RouterLink :to="{name: 'features'}">Features</RouterLink>
       <RouterLink to="/contact">Contact</RouterLink>
       <RouterLink to="/pricing">Pricing</RouterLink>
    </nav>
    <main>
     <RouterView/>
    </main>
   </template>
   