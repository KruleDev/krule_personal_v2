<script>
  import SynthBackgroundVue from './components/SynthBackground.vue'
  export default {
    components: {
        SynthBackgroundVue
    }
  }
</script>

<template>


  <router-view v-slot="{Component}">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
    <SynthBackgroundVue/>

  
</template>

<style lang="scss">
@font-face {
  font-family: "Radwave";
  src: local("Radwave"),
   url(./assets/font/RadwaveFont.otf);
}
@font-face {
  font-family: "Streamster";
  src: local("Streamster"),
   url(./assets/font/Streamster.ttf) format("truetype");
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body,#app{
  display: grid;
  place-items: center;
  height: 100vh;
  position: fixed;
  width: 100vw;
  overflow: hidden;
  font-family: 'radwave';
  color:white;
}

  svg:not(.splide__arrow svg) {
    width: 30px;
    height: auto;
    cursor: pointer;
    overflow: visible;
    transform: rotate(90deg);

    polygon, path {
      transition: all 0.5s ease-in-out;
    }
    
    &:hover polygon, &:hover path {
      transition: all 1s ease-in-out;
    }
      
    &:hover .arrow {
      animation: arrow-anim 1.5s ease-in-out infinite;


    }
    &:hover .arrow-fixed {
      animation: arrow-fixed-anim 1.5s ease-in-out infinite;

    }
  }
.tooltip{
  visibility: hidden;
  position: absolute;
}
#arrow-left{
    transform: rotate(0deg) ;

}
.nav-left{
  position: fixed;
  bottom: 50%;
  left:20px;

    &:hover .tooltip{
    visibility: visible;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    left:50%;
    translate:50%;
    bottom:-100%;
  }
}
#arrow-right{
    transform: rotate(180deg) ;

}
.nav-right{
  position: fixed;
  bottom: 50%;
  right:20px;
  &__arrow{
    transform:translateY(-50%)rotate(90deg);

  }
  &:hover .tooltip{
    visibility: visible;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    right:50%;
    translate:50%;
    bottom:-100%;
    
  }

}

.nav-top{
  position: fixed;
  top: 20px;
  right:50%;
  &__arrow{
  transform:translate(50%);

  }
    &:hover .tooltip{
    visibility: visible;
    color: #fff;
    text-align: center;
    bottom: -100%;
    left: 50%;
    transform: translate(-50%);
  }
}
#arrow-bottom{
  transform: rotate(-90deg);
}
.nav-bottom{
  position: fixed;
  bottom: 20px;
  right:50%;
  &__arrow{
  transform:rotate(90deg);
  }
  &:hover .tooltip{
    visibility: visible;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    top:-100%;
    left: 50%;
    transform: translate(-50%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

@keyframes arrow-anim {
	0% {
		opacity: 1;
		transform: translateX(0);
	}
	5% {
		transform: translateX(-0.1rem);
	}
	100% {
		transform: translateX(1rem);
		opacity: 0;
	}
}

@keyframes arrow-fixed-anim {
	5% {
		opacity: 0;
	}
	20% {
		opacity: 0.4;
	}
	100% {
		opacity: 1;
	}
}

</style>
