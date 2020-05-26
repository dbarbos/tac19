<template>
	<div class="custom-font">
		<v-app-bar app color="white" elevation="3">
			<v-btn icon class="mr-2" v-if="back" @click="goToBack()">
				<v-icon>arrow_back</v-icon>
			</v-btn>
			<ctext class="d-flex align-center" style="font-size:20px" color="primary">
				<b>{{title2}}</b>
			</ctext>

			<v-spacer></v-spacer>

			<v-btn icon @click="dialog_info=true" text>
				<v-icon>more_vert</v-icon>
			</v-btn>
		</v-app-bar>
		<v-dialog v-model="dialog_info" max-width="500px" transition="dialog-transition">
			<v-card>
				<ctext class="pa-4" style="font-size:20px" color="primary">
					<b>{{general.app_name}}</b>
				</ctext>
				<v-divider></v-divider>
				<div class="pa-4">
					<div>{{general.desc}}</div>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import general from "@/configs/general";
export default {
	props: {
		title: String,
		back: {
			type: Boolean,
			back: false
		}
	},
	data() {
		return {
			general,
			dialog_info: false,
		};
	},
	computed: {
		title2() {
			if (this.title == null || this.title == "") return this.general.app_name;
			else return this.title;
		}
	},
	methods: {
		goToBack() {
			this.$router.back();
		}
	}
};
</script>

<style lang="scss" scoped>
</style>