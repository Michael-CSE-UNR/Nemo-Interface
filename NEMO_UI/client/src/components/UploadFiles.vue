<!--https://bootsnipp.com/snippets/D7MvX-->

<template>

  <div class="card mt-5" style="width: auto;">
    <div class="card-body">
      <div class="file-drop-area">
        <span class="choose-file-button">Choose files</span>
        <span class="file-message">or drag and drop files here</span>
        <input class="file-input" multiple type="file">
      </div>
    </div>
  </div>

</template>

<style scoped>


.file-drop-area {
  position: relative;
  display: flex;
  align-items: center;
  width: 450px;
  max-width: 100%;
  padding: 25px;
  border: 1px dashed black;
  background-color: lightgray;
  border-radius: 3px;
  transition: 0.2s;

}

.choose-file-button {
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid black;
  border-radius: 3px;
  padding: 8px 15px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

.file-message {
  font-size: small;
  font-weight: 300;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-input {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  cursor: pointer;
  opacity: 0;

}

</style>

<script>

</script>


