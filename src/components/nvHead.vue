<template>
  <div>
    <div class="header" v-bind:class="{' pull-right':showFlag}" >
      <div class="toolbar-nav" v-on:click="toggleMenu" v-if="!backBtnShow">
        <div class="icon fa fa-align-justify"></div>
      </div>
      <div class="toolbar-nav" v-on:click="goback" v-if="backBtnShow">
        <div class="icon fa fa-chevron-left"></div>
      </div>
      <div class="toolbar-text">{{textType}}</div>
    </div>
    <nv-menu :showFlag="showFlag" v-on:showFlagFalse="showFlagFalse"></nv-menu>
  </div>
</template>
<script>
  import nvMenu from './nvMenu.vue';
  export default {
      name:'nvhead',
      data(){
          return {
              showFlag:false
          }
      },
      components:{
          'nv-menu':nvMenu
      },
      props:['textType','backBtnShow'],
      methods:{
          toggleMenu(){
            this.showFlag=true;
          },
          showFlagFalse(){
              this.showFlag=false;
          },
          goback(){
              this.$router.go(-1);
          }
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->+
<style lang="scss" scoped>
  .header{
    width:100%;
    height:44px;
    line-height:44px;
    border-bottom:1px solid rgba(0,0,0,.25);
    transition:all .3s ease;
    position:fixed;
    left:0;
    top:0;
    z-index:10;
    background-color:#fff;
  }
  .toolbar-nav{
    width:44px;
    height:44px;
    text-align:center;
    color:#42b983;
    position:absolute;
    left:0;
    top:0;
    .icon{
      color:#42b983;
    }
  }
  .toolbar-text{
    height:44px;
    line-height:44px;
    text-align:center;
  }
  .pull-right{
    transform:translate3d(200px,0,0);
  }
</style>
