<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
});

</script>

<template>
    <div class="mb-3">
        <!-- Post Article -->
        <div class="card__post card__post-list">
            <div class="image-sm">
                <a href="">
                    <img :src="props.data?.urlToImage || '/images/placeholder/500x400.jpg'" class="img-fluid" alt="">
                </a>
            </div>

            <div class="card__post__body ">
                <div class="card__post__content">

                    <div class="card__post__author-info mb-2">
                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <span class="text-primary">
                                    {{ props.data?.author }}
                                </span>
                            </li>
                            <li class="list-inline-item">
                                <span class="text-dark text-capitalize">
                                    {{ props.data?.publishedAt }}
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="card__post__title">
                        <h6>
                            <a href="">
                                {{ props.data?.title }}
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>