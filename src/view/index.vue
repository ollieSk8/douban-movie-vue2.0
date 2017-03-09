<template>
    <div></div>
</template>
<script>
    export default {
        mounted(){
            this.$router.push({ name: 'list', params: { pageType: 'in_theaters',textType:'正在热映'}})
        }
    }
</script>
<style lang="scss">

</style>