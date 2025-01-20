<template>
    <nav>
       <RouterLink to="/">Home</RouterLink>
       <RouterLink :to="{name: 'features', params: {id: 1}}">Features</RouterLink>
       <RouterLink to="/contact">Contact</RouterLink>
       <RouterLink to="/pricing">Pricing</RouterLink>
    </nav>
    <main>
     <RouterView v-slot="{Component}">
      <KeepAlive>
         <component :is="Component"/>
      </KeepAlive>
     </RouterView>
    </main>
   </template>
   