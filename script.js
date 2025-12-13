const modalFunction = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector('#cart-button');

    const openModal = () => {
        modal.classList.add('open');
    }

    const closeModal = () => {
        modal.classList.remove('open');
    }

    cartBtn.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

const restsFunction = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [
        {
            id: 1,
            title: 'Пицца плюс',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-1.jpg'
        },
        {
            id: 2,
            title: 'Тануки',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-2.jpg'
        },
        {
            id: 3,
            title: 'FoodBand',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-3.jpg'
        },
        {
            id: 4,
            title: 'Жадина-пицца',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-4.jpg'
        },
        {
            id: 5,
            title: 'Точка еды',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-5.jpg'
        },
        {
            id: 6,
            title: 'PizzaBurger',
            time: 50,
            raiting: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'rest-6.jpg'
        }
    ];

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';
    };

    const randerRests = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <a href="goods.html?id=${card.id}" class="products-card">
                    <div class="products-card__image">
                        <img src="/images/rests/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h4 class="products-card__description--title">${card.title}</h4>
                            <div class="products-card__description--badge">${card.time} мин</div>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-info">
                                <div class="products-card__description-info--raiting">
                                    <img src="images/icons/Star.svg" alt="Star">
                                    ${card.raiting}
                                </div>
                                <div class="products-card__description-info--price">От ${card.price} ₽</div>
                                <div class="products-card__description-info--group">${card.type}</div>
                            </div>
                        </div>
                    </div>
                </a>
            `)
        });
    };

    if (container) {
        loading();

        setTimeout(() => {
            randerRests(restArray);
        }, 1000);
    };
};

const goodsFunction = () => {
    const container = document.querySelector('#goods-container');

    const goodArray = [
        {
            id: 1,
            title: 'Ролл угорь стандарт',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'good-1.jpg'
        },
        {
            id: 2,
            title: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'good-2.jpg'
        },
        {
            id: 3,
            title: 'Окинава стандарт',
            description: ' Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'good-3.jpg'
        },
        {
            id: 4,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'good-4.jpg'
        },
        {
            id: 5,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'good-5.jpg'
        },
        {
            id: 6,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'good-6.jpg'
        }
    ];

    const loading = () => {
        container.innerHTML = '<p style="width: 100%; text-align: center;">Загрузка</p>';
    };

    const randerGoods = (array) => {
        container.innerHTML = '';

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
                <div class="products-card">
                    <div class="products-card__image">
                        <img src="/images/goods/${card.image}" alt="${card.image}">
                    </div>
                    <div class="products-card__description">
                        <div class="products-card__description-row">
                            <h5 class="products-card__description--name">${card.title}</h5>
                        </div>
                        <div class="products-card__description-row">
                            <p class="products-card__description--text">${card.description}</p>
                        </div>
                        <div class="products-card__description-row">
                            <div class="products-card__description-controls">
                                <button class="btn btn-primary">
                                В корзину
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M14.42 10.97h-9.3l.46-.95 7.77-.02c.26 0 .48-.19.53-.45l1.07-6.01a.54.54 0 0 0-.53-.64l-9.87-.03-.09-.4a.56.56 0 0 0-.54-.44H1.51a.55.55 0 1 0 0 1.1h1.96l.37 1.76.91 4.4-1.17 1.9a.6.6 0 0 0-.04.58c.09.18.28.3.49.3H5a1.6 1.6 0 1 0 2.56 0h2.52a1.6 1.6 0 1 0 2.56 0h1.77c.3 0 .55-.25.55-.55a.55.55 0 0 0-.55-.55M4.78 3.95l9 .03-.89 4.94-7.07.01zm1.51 9.58a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1m5.08 0a.5.5 0 0 1 0-1 .5.5 0 0 1 0 1" />
                                </svg>
                                </button>
                                <span class="products-card__description-controls--price">${card.price} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        });
    };

    if (container) {
        loading();

        setTimeout(() => {
            randerGoods(goodArray);
        }, 1000);
    };
};

modalFunction();
restsFunction();
goodsFunction();