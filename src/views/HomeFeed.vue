<template>
  <div class="sm:px-32 flex flex-wrap justify-center">
    <VideoCard v-for="video in videos" :key="video.id" :video="video" />
  </div>
</template>

<script>
import VideoCard from "../components/VideoCard.vue";

export default {
  name: "HomeFeed",
  components: {
    VideoCard,
  },
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    const url =
      "https://youtube138.p.rapidapi.com/channel/videos/?id=UCoCqCzNVK5KVBV0Kw94mqYw";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "33a38a48e2msh345936a2215c570p1a003cjsn277d5a16ce04",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => (this.videos = data.contents))
      .catch((error) => console.error("Problem with fetch operation:", error));
  },
};
</script>
