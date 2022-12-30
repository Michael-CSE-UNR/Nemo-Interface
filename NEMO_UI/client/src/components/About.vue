<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom">
      <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
        <div class="col-12 col-lg-5">
          <h2 class="display-6 lh-1 mb-5">Wildfire Smoke Detection</h2>
          <p class="lead fw-normal text-muted mb-5 mb-lg-0">
            The Nemo wildfire smoke detection benchmark is a set of evolving preprocessed datasets in standard
            COCO format and pretrained wildfire smoke detectors based on Facebook AI's DETR that aims to detect
            wildfire in incipient stage (especially the first few minutes from start of wildfire). This model is
            created for object detection. It has a CNN backbone along with encoder-decoder transformers. It also
            uses bipartite matching loss function.
          </p>
          <UploadFiles/>
        </div>
        <div class="col-sm-8 col-md-6">
          <figure>
            <img alt="..." class="img-thumbnail mt-5" src="/CaughlinRanch_PineHaven_fire_Nov2020.png">
            <figcaption class="figure-caption mt-3">
              <b>Figure 1:</b> Annotated frame with confirmed flame detection.
            </figcaption>
          </figure>
          <figure>
            <img alt="..." class="img-thumbnail mt-5" src="/TumbleWeed_fire_CA_2021Jul.png">
            <figcaption class="figure-caption mt-3">
              <b>Figure 2:</b> Annotated frame with confirmed fire detection.
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import UploadFiles from "@/components/UploadFiles.vue";

export default {
  name: "About",
  components: {UploadFiles}
}
</script>

<style scoped>
.mt-custom {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>