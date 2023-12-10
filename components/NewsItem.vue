<script setup>

const props = defineProps({
    data: {
        type: Object,
        required: true
    },
});

</script>

<template>
    <div class="card__post">
        <div class="card__post__body card__post__transition">
            <a :href="props.data?.url" target="_blank">
                <img src="/images/placeholder/600x400.jpg" class="img-fluid" :alt="props.data?.title" />
            </a>
            <div class="card__post__content bg__post-cover">
                <div class="card__post__category">
                    politics
                </div>
                <div class="card__post__title">
                    <h5><a :href="props.data?.url" target="_blank"> {{ props.data?.title }}</a> </h5>
                </div>
                <div class="card__post__author-info">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a href="">
                                {{ props.data?.author }}
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <span>
                                {{ props.data?.publishedAt }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>