<script setup>

const apiKey = '4230589ff0e44673bbaa1b4341c2cf26';
const baseUrl = 'https://newsapi.org/v2/top-headlines?country=tr&apiKey=' + apiKey;

const articles = ref([]);
const categories = ['business', 'technology', 'health', 'sports', 'entertainment', 'science', 'general'];
const articlesByCategory = ref({});

const fetchArticles = async (category) => {
    const articlesCookie = useCookie(category);
    const cachedArticles = articlesCookie.value;

    if (cachedArticles) {
        articlesByCategory.value[category] = cachedArticles;
    } else {
        const response = await fetch(`${baseUrl}&category=${category}`);
        const data = await response.json();
        articlesByCategory.value[category] = data.articles;
        articlesCookie.value = data.articles;
    }
};

onMounted(() => {
    categories.forEach(category => {
        fetchArticles(category);
    });
});


</script>

<template>
    <!-- Popular news -->
    <section>
        <!-- Popular news  header-->
        <div class="popular__news-header">
            <div class="container">
                <div class="row no-gutters">
                    <div class="col-md-8">
                        <Swiper class="card__post-carousel" :modules="[SwiperAutoplay]" :slides-per-view="1" :loop="true"
                            :autoplay="{
                                delay: 3000,
                                disableOnInteraction: true,
                            }">
                            <SwiperSlide v-for="(article, index) in articlesByCategory['general']" :key="index"
                                class="px-2">
                                <NewsItem :data="article" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="col-md-4">
                        <NewsItem :data="articlesByCategory.health[0]"
                            v-if="articlesByCategory.health && articlesByCategory.health.length > 0" />
                    </div>
                </div>
            </div>
        </div>
        <!-- End Popular news header-->
        <!-- Popular news carousel -->
        <div class="popular__news-header-carousel">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <Swiper class="top__news__slider" :modules="[SwiperAutoplay, SwiperEffectCreative]"
                            :slides-per-view="4" :autoplay="{
                                delay: 3000,
                                disableOnInteraction: true,
                            }">
                            <SwiperSlide v-for="(article, index) in articlesByCategory['science']" :key="index"
                                class="px-2">
                                <PopularNews :data="article" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Popular news category -->
    <section class="pt-0">

        <div class="popular__section-news">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-lg-8">
                        <div class="wrapper__list__article">
                            <h4 class="border_section">recent post</h4>
                        </div>
                        <div class="row ">
                            <div class="col-sm-12 col-md-6 mb-4"
                                v-if="articlesByCategory.business && articlesByCategory.business.length > 0">
                                <NewsItem :data="articlesByCategory.business[0]" />
                            </div>
                            <div class="col-sm-12 col-md-6 mb-4"
                                v-if="articlesByCategory.technology && articlesByCategory.technology.length > 1">
                                <NewsItem :data="articlesByCategory.technology[1]" />
                            </div>
                        </div>
                        <div class="row ">
                            <div class="col-sm-12 col-md-6">
                                <div class="wrapp__list__article-responsive">

                                    <NewsItem2 :data="articlesByCategory.health[0]"
                                        v-if="articlesByCategory.health && articlesByCategory.health.length > 0" />
                                    <NewsItem2 :data="articlesByCategory.health[1]"
                                        v-if="articlesByCategory.health && articlesByCategory.health.length > 1" />
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 ">
                                <div class="wrapp__list__article-responsive">
                                    <NewsItem2 :data="articlesByCategory.sports[0]"
                                        v-if="articlesByCategory.sports && articlesByCategory.sports.length > 0" />
                                    <NewsItem2 :data="articlesByCategory.sports[1]"
                                        v-if="articlesByCategory.sports && articlesByCategory.sports.length > 1" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-12 col-lg-4">
                        <aside class="wrapper__list__article">
                            <h4 class="border_section">popular post</h4>
                            <NewsItemRight v-if="articlesByCategory.health && articlesByCategory.health.length > 0"
                                :data="articlesByCategory['health']" />
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        <section class="pt-0" v-for="category in categories" :key="category">
            <div class="container">
                <aside class="wrapper__list__article">
                    <h4 class="border_section">{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h4>
                </aside>
                <Swiper class="top__news__slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="4"
                    :autoplay="{
                        delay: 3000,
                        disableOnInteraction: true,
                    }">
                    <SwiperSlide v-for="(article, index) in articlesByCategory[category]" :key="index" class="px-2">
                        <PopularNews :data="article" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

    </section>
</template>