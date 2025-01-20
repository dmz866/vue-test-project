<template>
    <nav>
       <RouterLink to="/" exact-active-class="underline">Home</RouterLink>
       <RouterLink :to="{name: 'features', params: {id: 1}}" exact-active-class="underline">Features</RouterLink>
       <RouterLink to="/contact" exact-active-class="underline text-white">Contact</RouterLink>
       <RouterLink to="/pricing" exact-active-class="underline">Pricing</RouterLink>
    </nav>
    <main>
     <RouterView v-slot="{Component}">
      <KeepAlive>
         <component :is="Component"/>
      </KeepAlive>
     </RouterView>
    </main>
   </template>
   