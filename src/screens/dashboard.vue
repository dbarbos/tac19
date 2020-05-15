<template>
	<div class="">
		<v-row class="ma-4">
			<v-col  cols="12" :md="tool.size" v-for="(tool,i) in covid_tools" :key="i">
				<v-card class="pa-4" color="transparent" @click="$router.push(tool.link)">
					<div>
						<img class="tool-img" :src="tool.img" />
						<div class="tool-background" :style="'background-color:'+tool.background_color"></div>

						<div class="tool-content">
							<div class="custom-font mb-4 " style="font-size:25px">{{tool.name}}</div>
							<div style="text-align:justify">{{tool.desc}}</div>
						</div>
					</div>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import covid_tools from "@/configs/covid_tools.js";
export default {
	data() {
		return {
			covid_tools
		};
	}
};
</script>

<style>
.tool-background {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0.7;
	z-index: 0;
}
.tool-img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 0;
}
.tool-content {
	position: relative;
	z-index: 10;
	color: white;
}
</style>