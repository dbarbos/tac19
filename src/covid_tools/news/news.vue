<template>
  <div>
    <v-btn href="https://newsapi.org/" target="_blank" text>Powered by News API</v-btn>
    <v-row v-for="n in noticias" :key="n.url" class="margin-bottom margin-both-sides">
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">{{n.source.name}}</div>
            <v-img
              :src="n.urlToImage"
              aspect-ratio="2"
              max-height="300px"
              max-width="300px"
              class="margin-bottom"
            ></v-img>
            <v-list-item-title class="headline mb-1">{{n.title}}</v-list-item-title>
            <v-list-item-subtitle>{{ n.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn :href="n.url" target="_blank" text>Acessar notícia</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import NewsAPI from "@/services/NewsAPI";

export default {
  data() {
    return {
      noticias: []
    };
  },
  created() {
    NewsAPI.getAllNews(news => {
      this.noticias = news.data.articles;
    });
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