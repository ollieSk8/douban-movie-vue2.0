<template>
    <div class="">
        <nv-head :text-type="textType"></nv-head>
        <div class="detail-card" v-if="movie.title">
            <div>
                <img :src="movie.images.large" style="width:100%">
            </div>
            <section class="subject-info">{{getMeta}}</section>
            <section class="subject-mark">
                <div class="mark-item">
                    <a >
                        <span>想看({{movie.wish_count}})</span>
                    </a>
                    <a><span>看过</span></a>
                </div>
            </section>
            <section class="subject-intro">
                <h2>{{movie.title}}的剧情介绍</h2>
                <div class="bd">
                    <p>
                        {{movie.summary}}
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    import nvHead from '../components/nvHead.vue';
    import axios from 'axios';
    export default {
        data(){
            return {
                movie:{}
            }
        },
        components:{
            'nv-head':nvHead
        },
        computed:{
            getMeta(){
                var cast = this.movie.casts.reduce((name,value)=>{
                    return name ? name +' / '+ value.name : value.name;
                }, '');
                return this.movie.countries.join(' / ') + ' / '+this.movie.genres.join(' / ') + ' / '+this.movie.directors[0].name +'(导演) / ' + cast;
            },
            textType(){
                //console.log(this.$route.params.textType)
                return this.$route.params.textType;
            },
            pageType(){
                //console.log(this.$route.params.pageType)
                return this.$route.params.pageType;
            }
        },
        created(){
            axios.get('/api/movie/subject/'+this.$route.params.id)
                .then((response) => {
                    console.log('111')
                    this.movie=response.data
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>
<style lang="scss" scoped >
    .detail-card {
        background: #fff;
        border-radius: 10px;
        padding: 10px 15px;;
        -webkit-text-size-adjust: 100%;
        margin-top:44px;
    .title {
        font-size: 16px;
        line-height: 32px;
        word-break: break-all;
    }
    section {
        margin-bottom: 30px;
        p {
            font-size: 15px;
            color: #494949;
            line-height: 1.5;
        }
    }
    .subject-info {
        position: relative;
        overflow: hidden;
        margin-top: 10px;
        line-height: 1.5;
    }
    .subject-mark{
        .mark-item{
            margin-bottom: 30px;
            display: -webkit-box;
            display: -moz-box;
            display: box;
            display: -webkit-flex;
            display: -moz-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -moz-box-align: center;
            box-align: center;
            -webkit-align-items: center;
            -moz-align-items: center;
            -ms-align-items: center;
            -o-align-items: center;
            align-items: center;
            -ms-flex-align: center;
            a{
                height: 30px;
                line-height: 30px;
                display: block;
                color:#42b983;
                border: 1px solid #42b983;
                border-radius: 3px;
                margin-right: 10px;
                font-size: 15px;
                text-align: center;
                -webkit-box-flex: 1;
                -moz-box-flex: 1;
                box-flex: 1;
                -webkit-flex: 1;
                -moz-flex: 1;
                -ms-flex: 1;
                flex: 1;
            }
        }
    }
    .subject-intro {

        h2 {
            color: #aaa;
            margin: 0 0 15px;
            font-size: 15px;
        }
    }
    }
</style>