<template>
	<v-app>
		<appbar :title="title" :back="back"></appbar>
		<v-content class="custom-font">
			<router-view></router-view>
		</v-content>
		<alerts ref="alerts" />
	</v-app>
</template>

<script>
export default {
	name: "APP",
	components: {
		appbar: () => import("./components/appbar"),
		alerts: () => import("./components/alerts")
	},

	data: () => ({
		title: "",
		back: false
	}),
	mounted() {
		this.$router.afterEach(() => {
			this.title = this.$router.currentRoute.name;
			this.back = this.$router.currentRoute.path == "/" ? false : true;
		});
		console.log(this.$router.currentRoute);
	}
};
</script>
