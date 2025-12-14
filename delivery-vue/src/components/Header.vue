<template>
    <header class="header">
        <div class="container">
            <div class="header-box">
                <router-link to="/" class="header-logo logo">
                    <img src="../assets/images/logo.png" alt="Логотип">
                </router-link>
                <div class="header-controls">
                    <button class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path
                                d="M13.41 11.93A5.8 5.8 0 0 0 10.3 8.8h-.02a3.87 3.87 0 1 0-4.54 0h-.02a5.8 5.8 0 0 0-3.12 3.13 6 6 0 0 0-.46 2.2.1.1 0 0 0 .12.09h.94q.11-.02.12-.12A4.66 4.66 0 0 1 8 9.53a4.66 4.66 0 0 1 4.69 4.57q0 .11.12.12h.94a.12.12 0 0 0 .13-.13 6 6 0 0 0-.47-2.16M8 8.34a2.67 2.67 0 0 1-2.69-2.68A2.67 2.67 0 0 1 8 2.96a2.67 2.67 0 0 1 2.69 2.7A2.67 2.67 0 0 1 8 8.34" />
                        </svg>
                        Войти
                    </button>
                    <button class="btn btn-outline" @click="openModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                            <path fill="#8c8c8c"
                                d="M14.42 10.97h-9.3l.46-.95 7.77-.02c.26 0 .48-.19.53-.45l1.07-6.01a.54.54 0 0 0-.53-.64l-9.87-.03-.09-.4a.56.56 0 0 0-.54-.44H1.51a.55.55 0 1 0 0 1.1h1.96l.37 1.76.91 4.4-1.17 1.9a.6.6 0 0 0-.04.58c.09.18.28.3.49.3H5a1.6 1.6 0 1 0 2.56 0h2.52a1.6 1.6 0 1 0 2.56 0h1.77c.3 0 .55-.25.55-.55a.55.55 0 0 0-.55-.55M4.78 3.95l9 .03-.89 4.94-7.07.01zm1.51 9.58a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1m5.08 0a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1" />
                        </svg>
                        Корзина
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
const emit = defineEmits(['toggleModal'])
const openModal = () => emit('toggleModal')
</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    min-height: 124px;
}

.header-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.header-controls {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}
</style>