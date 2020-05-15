<template>
	<v-app>
		<appbar></appbar>
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
		//
	})
};
</script>
