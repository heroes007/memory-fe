<template>
    <div>
        <a-form-model :model="form" style="width: 80%; margin: 1rem auto;">
            <a-form-item label="标题:">
                <a-input v-model="form.title" placeholder="请输入标题"/>
            </a-form-item>
            <a-form-item label="描述:">
                <a-input type="textarea" v-model="form.description" placeholder="请输入描述"/>
            </a-form-item>
            <a-form-item label="图片:">
                <a-upload
                        name="avatar"
                        list-type="picture-card"
                        class="avatar-uploader"
                        :show-upload-list="false"
                        :before-upload="beforeUpload"
                        @change="handleChange"
                >
                    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
                    <div v-else>
                        <a-icon :type="loading ? 'loading' : 'plus'" />
                        <div class="ant-upload-text">
                            上传
                        </div>
                    </div>
                </a-upload>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
                <a-button type="primary">保存</a-button>
                <a-button style="margin-left: 0.5rem;">取消</a-button>
            </a-form-item>
        </a-form-model>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                form: {
                    title: '',
                    description: '',
                    file: {},
                },
                imageUrl: '',
                loading: false
            }
        },
        methods: {
            beforeUpload() {

            },
            handleChange() {

            }
        }
    }
</script>

<style scoped>
    .avatar-uploader > .ant-upload {
        width: 128px;
        height: 128px;
    }
    .ant-upload-select-picture-card i {
        font-size: 32px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }
</style>