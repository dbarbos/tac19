<template>
	<v-card class="pa-4" color="transparent">
		<div>
			<img class="tool-img" :src="tool.img" />
			<div class="tool-background" :style="'background-color:'+tool.background_color"></div>

			<div class="tool-content"> 
				<div class="custom-font mb-4" style="font-size:25px">{{tool.name}}</div>
				<div style="text-align:justify" class="mb-4">{{tool.desc}}</div>
				<slot></slot>
			</div>
		</div>
	</v-card>
</template>

<script>
import covid_tools from "@/configs/covid_tools";
export default {
	props: {
		tool_id: String
	},
	computed: {
		tool() {
			for (var t of covid_tools) {
				if ((t.id = this.tool_id)) return t;
			}
			return null;
		}
	}
};
</script>

<style lang="scss" >
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