<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true,
    },
});

</script>

<template>
    <!-- Post Article -->
    <div class="article__entry">
        <div class="article__image">
            <a :href="props.data?.url">
                <img :src="props.data?.urlToImage || '/images/placeholder/500x400.jpg'" :alt="props.data?.title"
                    class="img-fluid">
            </a>
        </div>
        <div class="article__content">
            <ul class="list-inline">
                <li class="list-inline-item">
                    <span class="text-primary">
                        {{ props.data?.author }}
                    </span>,
                </li>

                <li class="list-inline-item">
                    <span>
                        {{ props.data?.publishedAt }}
                    </span>
                </li>
            </ul>
            <h5>
                <a :href="props.data?.url">
                    {{ props.data?.title }}
                </a>
            </h5>
        </div>
    </div>
</template>