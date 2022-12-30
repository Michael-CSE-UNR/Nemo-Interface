<template>
  <section class="bg-white">
    <div class="container px-5 mt-custom">
        <div class="row gx-5 align-items-center justify-content-center justify-content-lg-between">
            <div class="col-12 col-lg-5">
                <h2 class="display-4 lh-1 mb-4">Wildfire Smoke Detection</h2>
                <p class="lead fw-normal text-muted mb-5 mb-lg-0">
                  The Nemo wildfire smoke detection benchmark is a set of evolving preprocessed datasets in standard
                  COCO format and pretrained wildfire smoke detectors based on Facebook AI's DETR that aims to detect
                  wildfire in incipient stage (especially the first few minutes from start of wildfire). This model is
                  created for object detection. It has a CNN backbone along with encoder-decoder transformers. It also
                  uses bipartite matching loss function.
                </p>
            </div>
            <div class="col-sm-8 col-md-6">
              <img src="public/CaughlinRanch_PineHaven_fire_Nov2020.png" class="img-thumbnail" alt="...">
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.mt-custom {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
</style>