<template>
  <div class="px-8 flex flex-col items-center">
    <div class="video-container sm:w-2/3 w-4/5">
      <iframe
        :src="`https://youtube.com/embed/${$route.params.id}`"
        class="video rounded-xl shadow-lg"
      ></iframe>
    </div>
    <h3 class="mt-4 text-center text-lg">{{ video.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "VideoDetails",
  data() {
    return {
      video: [],
    };
  },
  mounted() {
    const url =
      "https://youtube138.p.rapidapi.com/video/details/?id=" +
      this.$route.params.id;
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
      .then((data) => (this.video = data))
      .catch((error) => console.error("Problem with fetch operation:", error));
  },
};
</script>

<style>
.video-container {
  padding-top: 40%; /* 16:9 */
  position: relative; /* Allows absolute positioning inside */
  margin: 0 auto 10px auto; /* Centering */
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
