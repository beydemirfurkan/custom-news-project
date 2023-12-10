<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>


<script setup>

useHead({
  title: 'Türkiye Haberleri',
  meta: [{ hid: 'description', name: 'description', content: 'My custom description' }],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', },
    { rel: 'stylesheet', href: '/styles.css', }
  ],
  script: [
    { src: '/index.bundle.js', },
  ],
});


</script>






