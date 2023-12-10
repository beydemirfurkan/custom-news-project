<script setup>

const route = useRoute();

</script>

<template>
    <h1>Haber Detayı {{ route.params.id }}</h1>
</template>