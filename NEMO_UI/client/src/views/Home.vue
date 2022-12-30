<template>
  <div class="Home">
    <About />
    <FileUpload />
  </div>
</template>

<script>
import About from "@/components/About.vue";
import FileUpload from "@/components/FileUpload.vue";

export default {
  name: "Home",
  components: {About, FileUpload}
}
</script>
