<script>
    import SynthBackgroundVue from "./SynthBackground.vue";

    export default {
        name:"Home",
        components: {
            SynthBackgroundVue
        }
    }
</script>

<template>
    <section class="home-section">
        <div class="hero-synth">
            <h1>
                <div class="hero-synth__title">
                    <div class="word">
                        <div class="letter">H</div>
                        <div class="letter">e</div>
                        <div class="letter">y</div>
                    </div>
                    <div class="word">
                        <div class="letter">I'</div>
                        <div class="letter">m</div>
                    </div>
                    </div>
            </h1>
            <h1>
                <div class="hero-synth__title">
                    <div class="word">
                        <div class="letter">C</div>
                        <div class="letter">h</div>
                        <div class="letter">r</div>
                        <div class="letter">i</div>
                        <div class="letter">s</div>
                    </div>
                </div>
            </h1>
            <p class="hero-synth__description">A web developper.</p>
        </div>

        <router-link to="/skills" class="nav-left">
            <svg  width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon fill="#00ffee" class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <polygon fill="#00ffee" class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <path fill="#00ffee" d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
            </svg>
        </router-link>
        <router-link to="/contact" class="nav-right">
            <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon fill="#00ffee" class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <polygon fill="#00ffee" class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <path fill="#00ffee" d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
            </svg>
        </router-link>
        <router-link to="/projects" class="nav-top">
            <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon fill="#00ffee" class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <polygon fill="#00ffee" class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <path fill="#00ffee" d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
            </svg>
        </router-link>
    </section>
   


</template>

<style lang="scss">

    .hero-synth{
        display: flex;
        flex-direction: column;
        gap:1rem;
        position: relative;
        &::before{
            content: '';
            position: absolute;
            z-index: -1;
            top: -2.3rem;
            left: .4rem;
            //Triangle
            border-top: rgba(207, 51, 217, 0.24) 400px solid;
            border-left: transparent 80px solid;
            border-right: transparent 270px solid;
            transform: skewX(20deg) rotate( 5deg);
            //Second triangle
            filter: drop-shadow(-10px 14px 0px rgba(109, 208, 238, 0.57));
        }
        &__title{
            font-size: 1.25em;
            text-transform: uppercase;
            position: relative;
            display: flex;
            gap:3rem;
            letter-spacing: 4px;
            font-family: 'streamster';
        }

        .letter{
            -webkit-text-stroke: 2px #2de3e6;;
              display: inline-block;
            &:hover{
                filter: drop-shadow(0 0 6px #CF33D9) drop-shadow(0 0 6px #CF33D9);
            }
        }
        
    h1{
        margin-left: 2rem;
    }


        &__description{
            max-width: 180px;
            text-align: center;
            line-height: 1.3;
            font-size: 14px;
            margin-left: 2rem;
        }
    }


</style>
