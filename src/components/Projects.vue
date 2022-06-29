<script>

</script>
<template>
    <section class="project-section">
        <Splide :options="{ rewind: true, pagination: false, }" >
            <SplideSlide>
                <article class="project-card">
                    <h2 class="project-card__title">Project 1</h2>
                    <div class="project-card__body">
                        <img src="../assets/img/project-2.png" alt="" class="project-card__body__image">
                        <div class="prject-card__body__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem eligendi eveniet est, ut voluptate!
                        </div>
                    </div>
                    <button  class="project-card__cta">Website live </button>
                </article>
            </SplideSlide>
            <SplideSlide>
                <article class="project-card">
                    <h2 class="project-card__title">Project 1</h2>
                    <div class="project-card__body">
                        <img src="../assets/img/project-3.png" alt="" class="project-card__body__image">
                        <div class="prject-card__body__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem eligendi eveniet est, ut voluptate!
                        </div>
                    </div>
                    <button  class="project-card__cta">Website live </button>
                </article>
            </SplideSlide>
        </Splide>
        <router-link to="/" class="nav-bottom">
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
@import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
.project-section{
   width:clamp(20rem, 95vw, 68rem);
}
.project-card{
    display: flex;
    flex-direction: column;
    gap:2rem;
    width:clamp(18rem, 60vw, 60rem);
    margin:auto;
    
    background: linear-gradient(180deg, rgba(80, 18, 83, 0.6) 11.81%, #311949 111.81%);
    &__title{
        position: relative;
        font-family: 'Streamster';
        text-transform: uppercase;
        padding:1rem;
        text-indent:6.5vw;
        font-size: clamp(1rem, 2vw, 1.5rem);
        margin-bottom: 1rem;
        color:#2de3e6;
        &::before{
            content:"";
            position: absolute;
            border-left: clamp(3.6rem,12vw,12rem) solid transparent;
            border-right: clamp(14.4rem,48vw,48rem) solid transparent;
            border-top: clamp(5rem, 6.5vw, 6rem) solid rgba(75, 132, 149, .24);
            left: 0;
            top:0;
        }
    }
    &__body{
        display: flex;
        flex-direction: column;
        gap:2rem;
        max-width: 90%;
        margin: auto;
        &__image{
            max-width: 25rem;
        }

    }
     &__cta{
        padding: .75rem 3rem;
        background-color: rgba(75, 132, 149, .24);
        outline: none;
        color:white;
        font-family: 'Radwave';
        isolation: isolate;
        position: relative;
        border:0;
        cursor: pointer;
        max-width: 90%;
        align-self: flex-end;
        margin:0 5% 1.5rem 0;

        clip-path: polygon(
            1rem 0%,
            100% 0,
            100% calc(100% - 1rem),
            calc(100% - 1rem) 100%,
            0 100%,
            0% 1rem
        );

        &::before {
            content: '';
            position: absolute;
            inset:0;
            background: rgba(75, 132, 149, .12);
            z-index: -2;


        }   
        &:after {
            content: "";
            position: absolute;
            inset: 0;
            background-color: rgba(75, 132, 149, .12);
            z-index: -1;
            clip-path: polygon(
                // top left 1
                2px calc(2px + 2px * 0.5),
                // top left 2
                calc(2px + 2px * 0.5) 2px,
                // top right
                calc(100% - 2px) 2px,
                //bottom right - 1
                calc(100% - 2px)
                calc(100% - calc(2px + 2px * 0.5)),
                // bottom right - 2
                calc(100% - calc(2px + 2px * 0.5))
                calc(100% - 2px),
                // bottom left
                calc(2px) calc(100% - 2px)
            );
            transition: clip-path 500ms;
        }
    }

    
}
@media screen and  (min-width: 75em){
    .project-card{
        &__body{
            flex-direction: row;
            &__image{
                max-width: 25rem;
            }

        }
    }
}
</style>