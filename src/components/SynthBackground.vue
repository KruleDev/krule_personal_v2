<script>
    export default {
        name:"SyntBackground"
    }
</script>


<template>
    <div class="synth">
        <div class="synth__sun"></div>
        <div class="synth__ground">
            <div class="synth__mountain"></div>
            <div class="synth__mountain"></div>
            <div class="synth__mountain"></div>
            <div class="synth__mountain"></div>
        </div>
    </div>
</template>


<style lang="scss">
    $light-blue:#2de3e6;
    $white: hsl(47deg, 98%, 95%);
    $citrus:hsl(47deg, 95%, 52%);
    $orange:hsl(23deg, 100%, 53%);
    $sanguine:hsl(347deg, 100%, 61%) ;
    $pink:hsl(346deg, 98%, 55%);
    $electro:hsl(181deg, 79%, 54%);
    $purple:hsl(261deg, 56%, 15%);
    $night:#0d0222;
    $violet:hsl(284deg, 80%, 20%);


    $peps:hsl(333, 83%, 53%);
    $nighty:#000F46;
    $deep:#0F1F52;


    .synth{
        position: absolute;
        z-index: 0;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        background-color: $night;
        z-index: -10;
        &__ground{
            position: absolute;
            height: 46vh;
            width: 120vw;
            left: -10vw;
            bottom: -1vh;
            z-index: 3;

            perspective: 45vh;
            perspective-origin: top center;
            transform-style: preserve-3d;

            border-top: solid 1px $peps;
            box-shadow:
                0 3px 10px 2px hsla( 47deg, 98%, 95%, .2),
                0 2px 20px 2px hsla(333, 83%, 53%,.5);


            background-color: hsl(261deg, 56%, 15%);
            //Bottom gradient
            background-image: radial-gradient(100% 60% at bottom, hsla( 181deg, 79%, 54%, .1), hsla(261deg, 56%, 15%, 1));
            &::before{
                content: '';
                position: absolute;
                //display: block;
                width: 100%;
                height: 100vh;
                top: 0;
                transform-origin: top center;
                transform: rotateX(80deg);
                //backface-visibility: hidden;
                //Line color
                background-image:
                    linear-gradient(to bottom, hsla(333, 83%, 53%, 0.302) 1px, transparent 1px),
                    linear-gradient(to right, hsla(333, 83%, 53%, 0.3) 1px, transparent 1px);
                //Line spacing
                background-size: 1px 30px, calc(60px)  1px;
                background-position: 0% 0%, center;

                animation: synth-lines 24s linear infinite;
            }
        }
        &__sun{
            background: linear-gradient(to bottom, #f2ec4f 10%, #c81548 60%);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            max-width: 400px;
            height: 400px;
            border-radius: 100%;
            z-index: 2;
            overflow: hidden;
        }
    }

@keyframes synth-lines {
	0% {
		background-position: 0% 0%, center;
	}
	100% {
		background-position: 0% 100%, center;
	}
}


</style>
