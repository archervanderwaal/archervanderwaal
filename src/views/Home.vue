<template>
  <div>
    <div>
      <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
        <swiper-slide class="swiper-slide">
          <div class="page2">
            <div class="wrap">
              <img
                class="avatar"
                src="https://avatars.githubusercontent.com/u/18182408?s=400&u=d2f73871a851aebf10e209553f9e7811badba593&v=4"
                alt
              />
              <div :class="scrollToP2 ? 'text fadeIn' : 'text'">
                <p>手持烟火以谋生活，心怀诗意以谋爱</p>
              </div>
            </div>
            <div class="copyright">
                <p class="title">Designed and developed by archervanderwaal.</p>
                <a target="_blank" href="https://beian.miit.gov.cn/"
                  >京ICP备19009805号-1</a
                >
              </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Home",
  data() {
    return {
      scrollToP2: true,
      activePage: "0",
      swiperOption: {
        speed: 600,
        notNextTick: true,
        direction: "vertical",
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          bulletElement: "li",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
};
</script>
 
<style lang='less' scoped>
#swiperBox{
  min-width: 1420px;
}
.fadeIn {
  animation: fadeInUp 0.5s ease 300ms;
  animation-fill-mode: forwards;
}

.page2 {
  background: url("https://resources.archervanderwaal.com/jingbaobao.jpeg")
    center center no-repeat;
  background-size: 100%;
  min-width: 1420px;
  width: 100%;
  height: 100%;
  .wrap {
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .avatar {
      position: absolute;
      width: 200px;
      height: 200px;
      left: 48%;
      top: 15%;
      transform: translate(-50%);
      border-radius: 50%;
      transition: 500ms;
    }
    .avatar:hover {
      box-shadow: 0 0 30px #fff;
    }
    .text {
      opacity: 0;
      position: absolute;
      top: 350px;
      left: 460px;
      font-family: youzai;
      color: white;
      font-size: 20px;
      line-height: 45px;
      text-align: center;
    }
  }
  .copyright {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translate(-50%);
      text-align: center;
      .title {
        text-align: center;
        font-size: 14px;
        font-family: netsrak;
        color: #939393;
        margin-bottom: 20px;
      }
      a {
        font-size: 14px;
        color: #939393;
        padding: 5px;
      }
    }
}
</style>

<style lang="less">
@keyframes shadowFadeIn {
  from {
    box-shadow: 0 0 0 0 #409eff;
  }
  to {
    box-shadow: 0 0 0 10px rgba(37, 143, 184, 0);
  }
}
.my-bullet {
  width: 8px;
  height: 8px;
  border: 3px solid #ddd;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  margin: 20px;
}
.my-bullet-active {
  background-color: #409eff;
  animation: shadowFadeIn 1.2s ease infinite;
}
</style>
