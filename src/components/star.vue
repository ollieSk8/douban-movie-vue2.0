<template>
    <div class="star-container">
        <div class="star fa" v-for="item in itemClasses" v-bind:class="item"></div>
        <div class="score">{{score}}</div>
    </div>
</template>
<script>
    export default {
        props:['score'],
        computed:{
            itemClasses() {
                let result = [];
                let score = Math.floor(this.score/2 * 2) / 2;
                let hasDecimal = score % 1 !== 0;
                let integer = Math.floor(score);
                for (let i = 0; i < integer; i++) {
                    result.push('fa-star');
                };
                if (hasDecimal) {
                    result.push('fa-star-half-o');
                };
                while (result.length < 5) {
                    result.push('fa-star-o');
                };
                return result;
            }
        }
    }
</script>
<style lang="scss" scoped>
    .star-container{
        width:100%;
        .star{
            font-size:12px;
            color:rgb(228, 168, 19);
            margin:0 2px;
        }
        .score{
            display:inline-block;
            font-size:12px;
            color:rgb(228, 168, 19);
        }
    }
</style>