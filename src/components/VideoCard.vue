<template>
  <RouterLink :to="`video/${video.video.videoId}`">
    <div
      class="w-40 h-44 m-2 p-2 rounded-xl bg-white shadow-lg"
      @mouseover="isHovering = true"
      @mouseleave="isHovering = false"
    >
      <img
        :src="
          isHovering &&
          video.video.movingThumbnails &&
          video.video.movingThumbnails.length > 0
            ? video.video.movingThumbnails[0].url
            : video.video.thumbnails[0].url
        "
        alt="Thumbnail"
        class="rounded-xl"
      />
      <h3 class="title my-2 text-xxs">{{ video.video.title }}</h3>
      <h4 class="text-xxs">Oriano DEV</h4>
      <p class="text-xxs">
        {{ video.video.stats.views }} views -
        {{ video.video.publishedTimeText }}
      </p>
    </div>
  </RouterLink>
</template>

<script>
export default {
  name: "VideoCard",
  props: {
    video: Object,
  },
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style>
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  font-weight: bolder;
}
</style>
