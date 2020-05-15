<template>
	<v-container fill-height fluid>
		<v-row v-if="hide" style="height:100%">
			<v-col cols="12" md="3">
				<card-covid-tool
					tool_id="max"
					style="min-height:100%"
				>O permitido é 1 pessoa a cada 3,5 metros quadrados</card-covid-tool>
			</v-col>
			<v-col cols="12" md="4">
				<v-card class="pa-4">
					<div class="margin-bottom big-text">Informe as dimensões da sala</div>
					<v-text-field
						v-model="largura"
						type="number"
						label="Largura da Sala (em metros)"
						class="margin-side"
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
					<div class="margin-bottom big-text">ou a área da sala</div>
					<v-text-field
						v-model="area"
						type="number"
						label="Área da Sala (em metros²)"
						filled
						@input="$v.area.$touch()"
					></v-text-field>
				</v-card>
				<!-- <v-form ref="form" align="center" justify="center" v-model="valid" :lazy-validation="lazy">
				</v-form>-->
			</v-col>
			<v-col cols="12" md="5" v-if="max_peoples>0">
				<v-card class="pa-4 text-center">
					<div class="margin-bottom big-text">
						Para um ambiente de
						<b>{{area}}</b>
						m² o permitido
						<template v-if="max_peoples==1">é</template>
						<template v-else>são</template>
					</div>
					<div class="big-text">
						<b>
							<template v-if="max_peoples==1">uma pessoa</template>
							<template v-else>{{max_peoples}} pessoas</template>
						</b>
					</div>
				</v-card>
				<v-card class="mt-4 pa-4 text-center">
					<div class="margin-bottom big-text">Agora vamos para a contagem</div>
					<div class="mb-4">Quantas pessoas estão no local?</div>
					<v-row justify="center" class="big-text">
						<v-btn icon @click="subCounter" large color="primary">
							<v-icon>remove</v-icon>
						</v-btn>
						<div>{{counter}}</div>
						<div>/</div>
						<div>{{max_peoples}}</div>
						<v-btn icon @click="addCounter" large color="primary">
							<v-icon>add</v-icon>
						</v-btn>
					</v-row>
					<v-slider v-model="counter" step="1" :max="max_peoples"></v-slider>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import "material-design-icons-iconfont/dist/material-design-icons.css";

export default {
	components: {
		"card-covid-tool": () => import("@/components/card_covid_tool")
	},
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
	watch: {
		largura() {
			this.area = this.largura * this.altura;
		},
		altura() {
			this.area = this.largura * this.altura;
		}
	},
	computed: {
		max_peoples() {
			var distanciaMetroQuadrado = 3.5;
			var maxCalc = 0;
			if (this.area > 0) {
				maxCalc = Math.floor(this.area / distanciaMetroQuadrado);
				return maxCalc < 1 ? 1 : maxCalc;
			}
			return 0;
		}
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
			if (this.counter < this.max_peoples) this.counter++;
		},

		subCounter() {
			if (this.counter > 0) this.counter--;
		}
	}
};
</script>

<style lang="scss">
.margin-bottom {
	margin-bottom: 20px !important;
}

.margin-side {
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