<script setup>

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
});

</script>


<template>
    <div class="wrapper__list-number">
        <div class="card__post__list" v-for="(item, index) in props.data?.slice(0, 5)" :key="index">
            <div class="list-number">
                <span>
                    {{ index + 1 }}
                </span>
            </div>
            <a href="#" class="category">
                Popular
            </a>
            <ul class="list-inline">
                <li class="list-inline-item">
                    <h5>
                        <a :href="data.url">
                            {{ item.title }}
                        </a>
                    </h5>
                </li>
            </ul>
        </div>
    </div>
</template>