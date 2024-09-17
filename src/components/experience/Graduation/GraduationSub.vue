<template>
  <div class="m-8 text-center flex flex-grow flex-col">
    <div
      class="info-container h-2/3 grid grid-cols-3 items-start justify-center p-6 relative"
    >
      <div class="project-parts col-span-1 h-full grid grid-rows-6">
        <div class="project-title row-span-1">
          <h2 class="text-4xl font-bold text-primary">PinPoach Project</h2>
          <p class="text-md">Stopping poaching using sensors and AI.</p>
        </div>
        <div
          class="parts-cards row-span-5 row-start-2 flex flex-col justify-evenly items-center"
        >
          <div class="rounded-xl bg-bgaccent p-2 w-3/4">
            <h2 class="text-xl text-secondary">PinPoach-Pin</h2>
            <p>Triangulate positions between nodes.</p>
          </div>
          <div class="card p-2 w-3/4 relative">
            <h2 class="text-xl text-secondary">PinPoach-ID</h2>
            <p>AI model to recognize gunfire.</p>
          </div>
          <div class="rounded-xl bg-bgaccent p-2 w-3/4">
            <h2 class="text-xl text-secondary">PinPoach-Net</h2>
            <p>Link together nodes to cover area.</p>
          </div>
        </div>
      </div>
      <div
        class="description col-span-2 h-full flex flex-col items-center justify-evenly"
      >
        <div
          class="purpose-section bg-bgprimary rounded-lg shadow-lg w-4/5 relative"
        >
          <h3 class="text-2xl font-semibold mb-2 text-primary">
            Purpose & Impact
          </h3>
          <p class="purpose text-lg m-2">
            Develop a system that detects gunshots in audio-fragments to help
            prevent poaching activities by alerting rangers and authorities,
            aiding in wildlife conservation efforts by Chengeta Wildlife.
          </p>
        </div>
        <div
          class="tech-section bg-bgprimary rounded-lg shadow-lg w-4/5 relative"
        >
          <h3 class="text-2xl font-semibold mb-2 text-primary">
            Technologies Used
          </h3>
          <div class="technologies grid grid-cols-2 grid-rows-2">
            <div class="m-2">Python</div>
            <div class="m-2">TensorFlow</div>
            <div class="m-2">Librosa</div>
            <div class="m-2">MFCC</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="footer-container h-1/3 flex items-start justify-center overflow-hidden"
    >
      <div class="logo-container w-1/4 h-full flex justify-center">
        <img
          class="max-w-full max-h-full object-contain"
          src="@/assets/experience-assets/alten-logo.png"
          alt="Alten logo"
        />
      </div>
      <div
        class="text-container flex flex-col w-3/4 justify-evenly h-full px-4"
      >
        <p class="text-4xl mr-auto">Training an AI model.</p>
        <p class="text-4xl">Recognize gunshots in audio.</p>
        <p class="text-4xl ml-auto">Save animal lives.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
