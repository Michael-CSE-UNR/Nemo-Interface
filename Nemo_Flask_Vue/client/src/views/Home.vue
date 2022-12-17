<template>
  <div class="home">
    <section class="bg-light">
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <h1 class="display-1 lh-1 mb-3">Wildfire Smoke Detection</h1>
          <p class="lead fw-bold text-black mb-3">NEMO: An Open-Source Transformer-Supercharged Benchmark for
            Fine-Grained Wildfire Smoke Detection</p>
          <p class="lead fw-normal text-muted mb-5">The Nemo wildfire smoke detection benchmark is a set of evolving
            preprocessed datasets in
            standard COCO format and pretrained wildfire smoke detectors based on Facebook AI's DETR that aims to
            detect wildfire in
            incipient stage (especially the first few minutes from start of wildfire). This model is created for
            object detection.
            It has a CNN backbone along with encoder-decoder transformers. It also uses bipartite matching loss
            function.</p>
        </div>
      </div>
    </section>
    <Attachment /></div>
</template>

<script>
// @ is an alias to /src
import Attachment from '@/components/Attachment.vue'
export default {
  name: 'Home',
  components: {
    Attachment
  }
}
</script>

<!--<template>-->
<!--  <div class="home">-->
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--// @ is an alias to /src-->
<!--import HelloWorld from '@/components/HelloWorld.vue'-->
<!--// import DropBox from '@/components/DropBox.vue'-->

<!--export default {-->
<!--  name: 'Home',-->
<!--  components: {-->
<!--    HelloWorld-->
<!--    // DropBox-->
<!--  }-->
<!--}-->
<!--</script>-->
