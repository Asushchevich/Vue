
<template>
    <div id="app">
      <div class="abcd"><h1>Конвертер</h1></div>
        <div class="line">
            <Converter currA="USD" currB="BYN"></Converter>
            <Converter currA="BYN" currB="USD"></Converter>
        </div>
        <div class="line">
            <Converter currA="USD" currB="EUR"></Converter>
            <Converter currA="EUR" currB="USD"></Converter>
        </div>
        <div class="line">
            <Converter currA="BYN" currB="EUR"></Converter>
            <Converter currA="EUR" currB="BYN"></Converter>
        </div>
    </div>
</template>




<script>

    import Converter from "./components/Converter.vue";

    export default {
        name: 'app',
        components: {
            Converter
        }
    };
</script>

<style>

    /*body{*/
    /*  background-image: url("https://klike.net/uploads/posts/2019-06/1561182204_1.jpg");*/
    /*  background-repeat: no-repeat;*/
    /*  -webkit-background-size: 100%;*/
    /*}*/
    #app {
        max-width: 900px;
        margin: auto;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .line {
        margin-top: 40px;
        display: flex;
        justify-content: space-around;
        font-family: 'Ranchers', cursive;

    }

    .footerStyle {
        margin-top: 20px;
        text-align: right;
        font-size: 9px;
    }
    .abcd {
      transition-duration: 1s;
      font-family: 'Ranchers', cursive;
      color: #f2ff00;

    }
    .abcd:hover {
      transform: rotate3d(1, 1, 0, 360deg);
    }

    body {
      background-image: url("fon.jpg");
    }

</style>