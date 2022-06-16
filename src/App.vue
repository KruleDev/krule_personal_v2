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

  svg {
    width: 40px;
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

.nav-left{
  position: fixed;
  bottom: 50%;
  left:20px;
  transform:translateY(-50%)rotate(-90deg);
}
.nav-right{
  position: fixed;
  bottom: 50%;
  right:20px;
  transform:translateY(-50%)rotate(90deg);
}
.nav-top{
  position: fixed;
  top: 20px;
  left:50%;
  transform:translate(-50%);
}
.nav-bottom{
  position: fixed;
  bottom: 20px;
  right:50%;
  transform:translate(-50%) rotate(180deg);
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
