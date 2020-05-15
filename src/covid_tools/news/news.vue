<template>
	<div>
		<v-container grid-list-xs>
			<v-row>
				<v-col md="12">
					<card-covid-tool tool_id="news" style="min-height:100%"></card-covid-tool>
				</v-col>
				<v-col md="12">
					<v-btn href="https://newsapi.org/" target="_blank" text>Powered by News API</v-btn>
					<v-row>
						<v-col cols="12" md="4" v-for="n in noticias" :key="n.url">
							<v-card outlined hover :href="n.url" target="_blank" style="height:100%">
								<v-list-item three-line>
									<v-list-item-content>
										<div class="overline mb-4">{{n.source.name}}</div>
										<v-img
											:src="n.urlToImage"
											aspect-ratio="3"
											max-height="300px"
											max-width="100%"
											class="margin-bottom"
										></v-img>
										<v-list-item-title class="headline mb-1">{{n.title}}</v-list-item-title>
										<v-list-item-subtitle>
											<div class="mb-2">{{$root.DateHelper.formatApiDate(n.publishedAt)}}</div>
											{{ n.description }}
										</v-list-item-subtitle>
									</v-list-item-content>
								</v-list-item>

								<!-- <v-card-actions>
									<v-btn  text>Acessar notícia</v-btn>
								</v-card-actions>-->
							</v-card>
						</v-col>
						<v-col cols="12" md="4">
							<v-card outlined @click="getNews()" style="height:100%;min-height:200px" hover>
								<v-row align="center" justify="center" style="height:100%">
									<v-col md="12" class="text-center primary--text">
										<v-icon color="primary" class="mr-2">refresh</v-icon>Carregar mais notícias
									</v-col>
								</v-row>
							</v-card>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import NewsAPI from "./services/NewsAPI";

export default {
	components: {
		"card-covid-tool": () => import("@/components/card_covid_tool")
	},
	data() {
		return {
			noticias: [],
			page: 1
		};
	},
	methods: {
		async getNews() {
			this.$root.alerts().wait(true);
			try {
				var news = await NewsAPI.getAllNews(this.page);
				if (this.page == 1) {
					this.noticias = news.data.articles;
				} else {
					for (var n of news.data.articles) {
						this.noticias.push(n);
					}
				}

				this.page++;
				console.log(this.noticias);
			} catch (e) {
				this.$root.alerts().notify(e.message);
			} finally {
				this.$root.alerts().wait(false);
			}
		}
	},
	mounted() {
		setTimeout(() => {
			this.getNews();
		}, 500);
	}
};
</script>

<style lang="scss" scoped>
.margin-bottom {
	margin-bottom: 20px !important;
}

.margin-both-sides {
	margin-right: 5px;
	margin-left: 5px;
}
</style>