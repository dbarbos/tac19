<template>
	<div class="custom-font" :style="'color:'+process_color">
		<slot></slot>
	</div>
</template>

<script>
import theme from "@/configs/theme.js";
export default {
	props: {
		color: {
			type: String,
			default: "black"
		}
    },
    computed:{
        process_color(){
            if(theme[this.color] != null)return theme[this.color];
            else return this.color;
        }
    },
	data() {
		return { theme };
	}
};
</script>

<style lang="scss" >
</style>