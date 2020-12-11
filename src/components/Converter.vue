<template>
  <div class="converter">
    <h2>{{currA}} to {{currB}}</h2>
    <input type="text" class="cla" v-model="currA_value" v-bind:placeholder="currA">
    <input type="button" class="btm" value="Convert" v-on:click="converter">
    <h2>{{currB_value}}</h2>
  </div>
</template>

<script>
export default {
  name: "Converter",
  props: ["currA", "currB"],
  data() {
    return {
      currA_value: "",
      currB_value: 0
    };
  },  
  methods: {
    converter() {
      let from_to = this.currA + "_" + this.currB;
      let cA = this.currA;
      let cB = this.currB;
      let url =
        "https://free.currconv.com/api/v7/convert?q=" +
        from_to +
        "&compact=ultra&apiKey=ce3469123d58a045204c";
      fetch(url)
        .then(res =>{
          return res.json();
        })
        .then(json => {          
          let cot = json[from_to];    
          console.log("Current value from 1 "+cA+" to 1 "+cB+" : " + cot);      
          this.currB_value = (cot * parseFloat(this.currA_value)).toFixed(2);
        })
        .catch(err => console.error(err));
    }
  }
};
</script>

<style scoped>



.converter{
  padding: 40px;
  max-width: 300px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  color: green;
  border-bottom: 3px groove #0af;
  border-radius: 50%;
  transition-duration: 1s;
  background: white;


}
.btm {
  background-color: #0af;
  color: #fff;
  font-size: 14px;
  line-height: 10px;
  min-height: 20px;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px auto 0;
  display: block;
  padding: 7px;
  text-decoration: underline;
  border: 2px dotted gray;

}
.cla {
  width: 100px;
  line-height: 20px;
  padding: 3px;
  background: black;
  color: white;
  border: 2px dotted gray;

}

 h2 {
  text-decoration: underline;
   font-family: 'Ranchers', cursive;
}

.converter:hover {
  transform: scale(1.4);
}

</style>