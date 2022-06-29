<script>

</script>

<template>
  
    <section class="skill-section">
        <div class="tag-description">
            <div class="tag-description__title">
                Vue js
            </div>
            <p class="tag-description__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed voluptatum recusandae sequi fuga reprehenderit.
            </p>
        </div>
        <img src="../assets/img/tagcloud.png" alt="">

        <router-link to="/" class="nav-right">
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
.skill-section{
    display: flex;
    align-items: center;
    gap:2rem
}
.tag-description{
    display: flex;
    flex-direction: column;
    gap:4rem;
    background: linear-gradient(180deg, rgba(80, 18, 83, 0.6) 11.81%, #311949 111.81%);
    width:clamp(18rem,50vw,30rem);
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
            border-left: clamp(3.6rem,10vw,6rem) solid transparent;
            border-right: clamp(14.4rem,40vw,24rem) solid transparent;
            border-top: clamp(5rem, 6.5vw, 6rem) solid rgba(75, 132, 149, .24);
            left: 0;
            top:0;
        }
    }
    &__body{
        max-width: 90%;
        margin: auto;
        line-height: 1.25;
        margin-bottom: 2rem;
    }
}
</style>