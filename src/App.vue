<template>
	<v-app>
    <appbar></appbar>
		<v-content class="custom-font">
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
export default {
	name: "APP",
	components: {
		appbar: () => import("./components/appbar")
	},

	data: () => ({
		//
	})
};
</script>
