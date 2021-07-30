<template>
    <div class="contain">
        <div class="mask"/>
        <div class="title">欢迎来看你的大可爱</div>
        <a-form-model :model="formModel" :label-col="labelCol" :wrapper-col="wrapperCol" style="width: 80%;">
            <a-form-model-item label="账号:">
                <a-input class="input" v-model="formModel.username" placeholder="请输入账号"/>
            </a-form-model-item>
            <a-form-model-item label="密码:">
                <a-input class="input" v-model="formModel.password" placeholder="请输入密码"/>
            </a-form-model-item>
            <a-form-item>
                <div style="text-align: center; margin-top: 1.8rem;">
                    <a-button @click="handleSubmit" type="primary" style="width: 2rem">登录</a-button>
                </div>
            </a-form-item>
        </a-form-model>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
                formModel: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            handleSubmit() {

            }
        }
    }
</script>

<style scoped>
    .contain{
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-top: 30%;
        height: 100vh;
        background-image: url("../../assets/login.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
    .mask{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.4);
    }
    .title{
        font-size: 0.4rem;
        margin-bottom: 1rem;
        text-align: center;
        color: rgba(0, 0, 0, 0.8);
        z-index: 10;
    }
</style>