<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-box">
                <router-link to="/" class="header-logo logo">
                    <img src="../assets/images/logo.png" alt="Логотип">
                </router-link>
                <div class="footer-nav">
                    <ul>
                        <li><router-link to="/rest">Ресторанам</router-link></li>
                        <li><router-link to="/rest">Курьерам</router-link></li>
                        <li><router-link to="/rest">Пресс-центр</router-link></li>
                        <li><router-link to="/rest">Контакты</router-link></li>
                    </ul>
                </div>
                <ul class="footer-social">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                            <path fill="url(#a)"
                                d="M17.19 0H7.8A7.8 7.8 0 0 0 0 7.81v9.38C0 21.5 3.5 25 7.81 25h9.38C21.5 25 25 21.5 25 17.19V7.8C25 3.5 21.5 0 17.19 0m5.47 17.19a5.47 5.47 0 0 1-5.47 5.47H7.8a5.47 5.47 0 0 1-5.47-5.47V7.8a5.47 5.47 0 0 1 5.47-5.47h9.38a5.47 5.47 0 0 1 5.47 5.47z" />
                            <path fill="url(#b)"
                                d="M12.5 6.25a6.25 6.25 0 1 0 0 12.5 6.25 6.25 0 0 0 0-12.5m0 10.16a3.91 3.91 0 1 1 .01-7.83 3.91 3.91 0 0 1-.01 7.83" />
                            <path fill="url(#c)" d="M19.22 6.61a.83.83 0 1 0 0-1.66.83.83 0 0 0 0 1.66" />
                            <defs>
                                <linearGradient id="a" x1="2.29" x2="22.71" y1="22.71" y2="2.29"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ffc107" />
                                    <stop offset=".51" stop-color="#f44336" />
                                    <stop offset=".99" stop-color="#9c27b0" />
                                </linearGradient>
                                <linearGradient id="b" x1="8.08" x2="16.92" y1="16.92" y2="8.08"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ffc107" />
                                    <stop offset=".51" stop-color="#f44336" />
                                    <stop offset=".99" stop-color="#9c27b0" />
                                </linearGradient>
                                <linearGradient id="c" x1="18.63" x2="19.81" y1="6.37" y2="5.19"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#ffc107" />
                                    <stop offset=".51" stop-color="#f44336" />
                                    <stop offset=".99" stop-color="#9c27b0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 25 25">
                            <path fill="#1976d2"
                                d="M21.88 0H3.13A3.13 3.13 0 0 0 0 3.13v18.75C0 23.6 1.4 25 3.13 25h18.75C23.6 25 25 23.6 25 21.88V3.13C25 1.4 23.6 0 21.88 0" />
                            <path fill="#fafafa"
                                d="M21.1 12.5h-3.91V9.38c0-.87.7-.79 1.56-.79h1.56V4.7H17.2a4.7 4.7 0 0 0-4.69 4.68v3.13H9.38v3.9h3.12V25h4.69v-8.6h2.34z" />
                        </svg>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="20" fill="none" viewBox="0 0 36 20">
                            <path fill="#1e88e5"
                                d="M17.15 19.92h2.1s.63-.07.95-.42c.3-.32.29-.92.29-.92s-.04-2.81 1.26-3.23c1.29-.4 2.94 2.72 4.7 3.92 1.31.91 2.32.71 2.32.71l4.68-.06s2.45-.16 1.29-2.08c-.1-.16-.68-1.43-3.48-4.03-2.94-2.72-2.54-2.28 1-7 2.15-2.86 3-4.62 2.74-5.37-.26-.71-1.84-.52-1.84-.52l-5.27.03s-.39-.05-.68.12c-.28.17-.46.56-.46.56s-.84 2.23-1.95 4.11c-2.35 3.99-3.29 4.2-3.67 3.95-.9-.57-.67-2.32-.67-3.55 0-3.86.58-5.47-1.14-5.89-.58-.14-1-.23-2.46-.25-1.88-.02-3.48.01-4.38.45-.6.3-1.06.95-.78.99.35.04 1.14.21 1.56.78.54.73.52 2.39.52 2.39s.31 4.54-.72 5.1c-.72.4-1.7-.4-3.78-4.01a34 34 0 0 1-1.89-3.9s-.15-.38-.43-.59C6.62.96 6.15.9 6.15.9l-5 .03S.38.94.1 1.26c-.24.3-.02.9-.02.9s3.93 9.17 8.37 13.8c4.07 4.23 8.7 3.96 8.7 3.96" />
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script></script>

<style scoped>
.footer {
    display: flex;
    align-items: center;
    min-height: 156px;
    padding: 60px 0;
}

.footer-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 36px;
    height: 100%;
}

.footer-nav {
    flex-grow: 1;
}

.footer-nav ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.footer-nav ul li a {
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    color: #595959;
}

.footer-social {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
}
</style>