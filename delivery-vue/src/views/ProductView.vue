<template>
    <section class="products">
        <div class="container">
            <div class="products-wrapper" id="goods-container">
                <div class="products-card" v-for="good in goodArray" :key="good.id">
                    <div class="products-card__image">
                        <img :src="getUrl(good.image)" alt="{{ good.image }}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">{{ good.title }}</h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">{{ good.description }}</p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                    В корзину
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M14.42 10.97h-9.3l.46-.95 7.77-.02c.26 0 .48-.19.53-.45l1.07-6.01a.54.54 0 0 0-.53-.64l-9.87-.03-.09-.4a.56.56 0 0 0-.54-.44H1.51a.55.55 0 1 0 0 1.1h1.96l.37 1.76.91 4.4-1.17 1.9a.6.6 0 0 0-.04.58c.09.18.28.3.49.3H5a1.6 1.6 0 1 0 2.56 0h2.52a1.6 1.6 0 1 0 2.56 0h1.77c.3 0 .55-.25.55-.55a.55.55 0 0 0-.55-.55M4.78 3.95l9 .03-.89 4.94-7.07.01zm1.51 9.58a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1m5.08 0a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1" />
                                    </svg>
                                </button>
                                <span class="products-card__description-controls--price">{{ good.price }} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {goodArray} from '../constants/goods'

const getUrl = (name) => {
    return new URL(`../assets/images/goods/${name}`, import.meta.url)
}
</script>