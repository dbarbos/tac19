<template>
  <v-container fill-height fluid class="v-text-field input">
    <v-row align="center" justify="center" v-if="hide">
      <v-form ref="form" align="center" justify="center" v-model="valid" :lazy-validation="lazy">
        <div class="margin-bottom big-text">Informe as dimensões da sala</div>
        <v-row>
          <v-text-field
            v-model="largura"
            type="number"
            label="Largura da Sala (em metros)"
            class="margin-only-right"
            filled
            @input="$v.largura.$touch()"
          ></v-text-field>

          <v-text-field
            v-model="altura"
            type="number"
            label="Altura da Sala (em metros)"
            filled
            @input="$v.altura.$touch()"
          ></v-text-field>
        </v-row>

        <div class="margin-bottom big-text">ou</div>

        <div class="margin-bottom big-text">A área da sala</div>

        <v-text-field
          v-model="area"
          type="number"
          label="Área da Sala (em metros²)"
          filled
          @input="$v.area.$touch()"
        ></v-text-field>

        <div color="error" class="margin-bottom">{{msg}}</div>

        <v-btn color="success" @click="calcular">Calcular</v-btn>
      </v-form>
    </v-row>

    <v-row align="center" justify="center" v-if="!hide">
      <v-icon class="margin-only-right" x-large v-on:click="subCounter">remove</v-icon>

      <div class="big-text margin-both-sides">{{counter.toString()}}</div>
      <div class="big-text margin-both-sides">/</div>
      <div class="big-text margin-both-sides">{{max.toString()}}</div>

      <v-icon class="margin-only-left" x-large v-on:click="addCounter">add</v-icon>
    </v-row>
  </v-container>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default {
  data() {
    return {
      largura: 0,
      altura: 0,
      area: 0,
      msg: 0,
      hide: true,
      counter: 0,
      max: 0,
      icons: {
        iconfont: "md"
      }
    };
  },
  methods: {
    calcular() {
      var distanciaMetroQuadrado = 3.5;
      var maxCalc = 0;

      if (this.area > 0) {
        this.hide = false;
        maxCalc = Math.floor(this.area / distanciaMetroQuadrado);
        this.max = maxCalc < 1 ? 1 : maxCalc;
      } else if (this.largura > 0 && this.altura > 0) {
        this.hide = false;
        maxCalc = Math.floor(
          (this.largura * this.altura) / distanciaMetroQuadrado
        );
        this.max = maxCalc < 1 ? 1 : maxCalc;
      } else this.msg = "Preencha os campos";
    },

    addCounter() {
      if (this.counter < this.max) this.counter++;
    },

    subCounter() {
      if (this.counter > 0) this.counter--;
    }
  }
};
</script>

<style lang="scss" scoped>
.margin-bottom {
  margin-bottom: 20px !important;
}

.margin-only-right {
  margin-right: 10px !important;
}

.margin-only-left {
  margin-left: 10px !important;
}

.margin-both-sides {
	margin-right: 5px;
	margin-left: 5px;
}

.big-text {
  font-size: 200%;
}
</style>