<template>
    <div>
        <span> Spot needed to be filled </span>
        <input v-model="OD1" type='number' min=0 placeholder="Number to reach daily Goal">
        <span> Weekly Goal </span>
        <input v-model="OD2" type='number' min=0 placeholder="total goal for the week">
        <span> Spots remaining to reach monthly goal </span>
        <input v-model="period" type='number' min=0  placeholder="for the month">
        <br>
        <ul class="err">
            <li v-if="errors.negative.active">
                {{ errors.negative.text }} 
            </li>  
            <li v-if="errors.invert.active">
                {{ errors.invert.text }} 
            </li>   
        </ul> 
        <p>Instagram Story poster per day to reach goal: {{doublingTime}} <button v-if='valid' v-on:click="remember"> Remember </button></p>
        
        
    </div>

</template>

<script>
import { isNull } from 'util';
import { exists } from 'fs';
// eslint-disable-no-console
var histId = 1
export default {
  name: 'Form',
  props: {
  },
  data() {
    return{
        OD1: '',   
        OD2: '',
        period: '',
        valid: false,
        history: [],
        errors: {
            negative: {
                text: 'reach your goals, plan a head', 
                active: false
            },
            invert: {
                text: 'weekly number has to be greater than daily number', 
                active: false
            }
        }
    }

  },
  methods: {
      remember () {
          this.$store.commit('pushHistory', {id: histId++, OD1: this.OD1, OD2: this.OD2, period: this.period, doublingTime: this.doublingTime})
          this.OD1 = this.OD2
        //   this.OD2 = ''
      }
  },
  created() {
    var hash = window.location.hash
    console.log(hash)

    var values = hash.match(/\d+(\.*)\d*/g)
    console.log(values)

    if (!isNull(values)){
        if (values.length == 3){
            this.OD1 = values[0]
            this.OD2 = values[1]
            this.period = values[2]
        }
    } else {
        window.location.hash = '?'
    }
  },
  computed : {
      doublingTime () { 

          if (this.OD1 <= 0 || this.OD2 <= 0 || this.period <= 0 ){
              this.errors.negative.active = true
          } else {
              this.errors.negative.active = false
          }

          if (this.OD2 <= this.OD1){
              this.errors.invert.active = true
          } else {
              this.errors.invert.active = false
          }

        

          let growthRate = Math.log(this.OD2 / this.OD1) / this.period
          let dTime = Math.log(2) / growthRate
          if (dTime > 0 & dTime != Infinity){
              window.location.hash = [this.OD1, this.OD2, this.period].join('_')
              this.valid = true  
          } else {
              window.location.hash = '?'
              this.valid = false
          }
          return dTime.toPrecision(2)   
      }
  }

}
</script>

<style>
input {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 14pt;
  font-style:inherit;  
  width: fit-content;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.err {
    color: #ff0000;
    text-align: left;}

</style>