<template>
    <div class="container">
        <nv-head :text-type="textType"></nv-head>
        <div class="movie-list" v-infinite-scroll="fetchData" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <ul>
                <li v-for="moive in moives">
                    <router-link :to="{ name: 'moviedetail', params:{id : moive.id},query: { id : moive.id,textType:moive.title}}">
                        <div class="cover"><img v-bind:src="moive.images.medium" alt=""></div>
                        <div class="info"><h3>{{moive.title}}</h3></div>
                        <star :score="moive.rating.average"></star>
                    </router-link>
                </li>
            </ul>
            <div class="loading fa fa-spinner fa-2x fa-spin" v-show="loading"></div>
            <div class="error" v-if="error">
                <p>服务器出错了</p>
                <div class="fa fa-exclamation-triangle"></div>
            </div>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import nvHead from '../components/nvHead.vue';
    import star from  '../components/star.vue';
    import infiniteScroll from 'vue-infinite-scroll'
    import store from '../util'
    Vue.use(infiniteScroll)
    export default {
        name: 'list',
        components:{
            'nv-head':nvHead,
            'star':star
        },
        computed:{
            textType(){
                //console.log(this.$route.query.textType
                return this.$route.query.textType;
            },
            pageType(){
                //console.log(this.$route.query.pageType)
                return this.$route.query.pageType;
            }
        },
        data(){
            return {
                moives:[],
                busy: false,
                text:'正在加载',
                count:0,
                error:false,
                loading:false
            }
        },
        directives: {infiniteScroll},
        methods:{
            fetchData(){
                this.busy = true;
                this.loading=true;
                let key=this.pageType+''+this.count;
                if(store.get(key)){
                    this.busy = false;
                    this.loading=false;
                    this.moives=this.moives.concat(store.get(key));
                    this.count+=10;
                }else{
                    this.$http.get('/api/movie/'+this.pageType+'?start='+this.count+'&count=10')
                        .then((response) => {
                            if(response.data.subjects.length!=0){
                                this.busy = false;
                                this.loading=false;
                                this.moives=this.moives.concat(response.data.subjects);
                                store.set(key,response.data.subjects,10000*100);
                                this.total=response.data.total;
                                this.count+=10;
                            }else{
                                this.loading=false;
                            }
                        }, response => {
                            this.loading=false;
                            this.error=true;
                            console.log('error');
                        })
                }

            }
        },
        watch: {
            // 切换页面
            '$route' (to, from) {
                // 如果是当前页面切换分类的情况
                if (to.query.pageType) {
                    this.count=0;
                    this.error=false;
                    this.moives=[];
                    window.scrollTo(0,0);
                    this.fetchData();
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .container{width:100%;overflow:hidden;}
    .movie-list{
        width:100%;
        margin-top:44px;
        position:relative;
        z-index:1;
        ul{
            width:100%;
            display:block;
            box-sizing:border-box;
            padding:10px;
            font-size:0;
        }
        ul:after{
            width:100%;
            content:'';
            height:1px;
            clear:both;
            display:block;
        }
        ul li{
            width:33.333%;
            display:inline-block;
            text-align:center;
            color:#000;
            box-sizing:border-box;
            padding:5px;
            float:left;

            a{
                display:block;
                color:#fff;
                text-decoration: none;
            }
        }
        ul li .cover{width:100%;height:150px;overflow:hidden;}
        ul li .cover img{width:100%;height:auto;display:block;}
        .loading{
            width:100%;
            height:30px;
            text-align:center;
            color:#42b983;
            line-height:30px;
            margin-bottom:20px;
        }
        .error{
            width:100%;
            height:30px;
            text-align:center;
            color:#42b983;
            line-height:30px;
            margin-bottom:20px;
            position:fixed;
            top:50%;
            div,p{
                display:inline-block;
            }
        }
        ul li .info{
            width:100%;
            display:block;
        }
        ul li .info h3{
            width:100%;
            text-align:center;
            color:#000;
            display:block;
            font-size:14px;
            font-weight: normal;
            height:30px;
            line-height:30px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
</style>