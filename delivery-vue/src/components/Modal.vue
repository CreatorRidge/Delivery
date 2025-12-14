<template>
    <div class="cart-modal__overlay" :class="{ open: isOpen }" @click.self="closeModal()">
        <div class="cart-modal">
            <div class="cart-modal__header">
                <h2 class="cart-modal__header--title">Корзина</h2>
                <span class="cart-modal__header--close" @click="closeModal()">
                    <img src="../assets/images/icons/close.svg" alt="close">
                </span>
            </div>
            <div class="cart-modal__body">
                <div class="cart-item">
                    <p class="cart-item__title">Ролл угорь стандарт</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">Ролл угорь стандарт</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">Ролл угорь стандарт</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">Ролл угорь стандарт</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
                <div class="cart-item">
                    <p class="cart-item__title">Ролл угорь стандарт</p>
                    <div class="cart-item__controls">
                        <div class="cart-item__controls--price">250 ₽</div>
                        <button class="btn btn-outline">-</button>
                        <div class="cart-item__controls--count">1</div>
                        <button class="btn btn-outline">+</button>
                    </div>
                </div>
            </div>
            <div class="cart-modal__footer">
                <div class="cart-modal__footer--price">1250 ₽</div>
                <div class="cart-modal__footer--controls">
                    <button class="btn btn-primary">Оформить заказ</button>
                    <button class="btn btn-outline">Отмена</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { isOpen } = defineProps({ isOpen: Boolean })
const emit = defineEmits(['toggleModal'])
const closeModal = () => emit('toggleModal')
</script>

<style scoped>
.cart-modal__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.40);
}

.cart-modal__overlay.open {
    display: flex;
}

.cart-modal {
    width: 100%;
    max-width: 780px;
    padding: 40px 45px;
    background: #FFFFFF;
    border-radius: 5px;
}

.cart-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
}

.cart-modal__header--title {
    margin: 0;
    font-size: 36px;
    font-weight: 700;
    color: #000000;
}

.cart-modal__header--close {
    cursor: pointer;
}

.cart-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
}

.cart-item:not(:last-child) {
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #D9D9D9;
}

.cart-item__title {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: #000000;
}

.cart-item__controls {
    display: flex;
    align-items: center;
}

.cart-item__controls--price {
    margin-right: 47px;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: #000000;
}

.cart-item__controls button {
    color: #40A9FF;
    border: 1px solid #40A9FF;
}

.cart-item__controls--count {
    margin-right: 15px;
    margin-left: 15px;
}

.cart-modal__footer {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    margin-top: 50px;
}

.cart-modal__footer--price {
    padding: 15px 20px;
    font-size: 20px;
    font-weight: 700;
    color: #FAFAFA;
    background: #262626;
    border-radius: 5px;

}

.cart-modal__footer--controls {
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>