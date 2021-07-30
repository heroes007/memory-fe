<template>
    <div>
        <div class="head">
            <a-icon type="menu-unfold" class="unfold" @click="handleClick"/>
            <div>
                <img src="../../assets/head.jpeg" alt="" class="img">
                <span>{{name}}</span>
            </div>
        </div>
        <div class="menu" ref="menu">
            <div class="cover" @click="hideMenu"/>
            <div :class="menuBody" ref="menuBody">
                <div class="menu-title">🐷郝冬冬大可爱</div>
                <a-menu theme="dark" mode="inline" class="menu-list" @click="menuClick">
                    <a-menu-item key="/">首页</a-menu-item>
                    <a-sub-menu title="管理">
                        <a-menu-item key="/upload">上传</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                name: '大帅比',
                menuBody: 'menu-body-unfold'
            }
        },
        methods: {
            handleClick() {
                this.menuBody = 'menu-body-unfold'
                this.$refs.menu.style.display = 'inline-block';
            },
            hideMenu() {
                this.menuBody = 'menu-body-fold'
                setTimeout(() => {
                    this.$refs.menu.style.display = 'none';
                }, 700)
            },
            menuClick(item) {
                this.$router.push(item.key).then(() => {
                    this.hideMenu();
                }).catch(() => {});
            }
        }
    }
</script>

<style scoped>
    .head{
        height: 1.2rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0 0.4rem;
        justify-content: space-between;
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        z-index: 998;
    }
    .unfold{
        font-size: 0.4rem;
    }
    .menu{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: none;
        z-index: 990;
    }
    .menu-title{
        padding: 0.2rem;
        background: #001529;
        color: white;
        font-size: 0.4rem;
        font-weight: 600;
        text-align: center;
        padding: 0.2rem;
    }
    .menu-list{
        height: 100%;
    }
    .menu-body-unfold{
        width: 70%;
        height: 100%;
        animation-duration: 1s;
        animation-name: unflod;
    }
    .menu-body-fold{
        width: 70%;
        height: 100%;
        animation-duration: 0.7s;
        animation-name: flod;
    }
    @keyframes unflod {
        from {
            margin-left: -70%;
        }

        to {
            margin-left: 0;
        }
    }
    @keyframes flod {
        from {
            margin-left: 0;
        }

        to {
            margin-left: -70%;
        }
    }
    .cover{
        height: 100%;
        width: 100%;
        position: absolute;
        background: rgba(0,0,0,0.2);
    }
    .img{
        height: 0.4rem;
        border-radius: 100%;
        margin-right: 0.18rem;
    }
</style>