<template>
   <div>
       <div class="nv-bg" v-if="showFlag" v-on:click="emitHead"></div>
       <div class="nv-menu" v-bind:class="{'menu-show':showFlag}">
            <ul>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'in_theaters',textType:'正在热映'}}"><span class="fa fa-star"></span> 正在热映</router-link></li>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'coming_soon',textType:'即将上映'}}"><span class="fa fa-play-circle"></span>即将上映</router-link></li>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'top250',textType:'Top250'}}"><span class="fa fa-bar-chart"></span>Top250</router-link></li>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'weekly',textType:'口碑榜'}}"><span class="fa fa-bullhorn"></span>口碑榜</router-link></li>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'us_box',textType:'北美票房榜'}}"><span class="fa fa-bookmark"></span>北美票房榜</router-link></li>
                <li v-on:click="emitHead"><router-link :to="{ name: 'list', query: { pageType: 'new_movies',textType:'新片榜'}}"><span class="fa fa-certificate"></span>新片榜</router-link></li>
            </ul>
       </div>
   </div>
</template>
<script>
    export default {
        name:'nvMenu',
        props:['showFlag'],
        methods:{
            emitHead(){
                this.$emit('showFlagFalse');
            }
        }
    }
</script>
<style lang="scss" scoped>
.nv-bg{
    position:fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    z-index:9998;
    background-color:rgba(0,0,0,.5);
}
.nv-menu{
    position:fixed;
    left:-200px;
    top:0;
    bottom:0;
    background:#fff;
    width:200px;
    z-index:9999;
    box-sizing:border-box;
    padding:20px;
    transition:all .3s ease;
    ul li{
        width:100%;
        height:50px;
        line-height:50px;
        span{display:inline-block;margin-right:10px;}
        a{
            color:#000;
            text-decoration:none;
        }
    }
}
.menu-show{
    left:0;
}
</style>