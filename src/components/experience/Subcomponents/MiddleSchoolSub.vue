<template>
  <div class="grid grid-cols-2 w-full middle-school-component">
    <div class="text-part">
      <div
        class="level-card m-2 pb-2 bg-bgaccent border-secondary border-2 rounded-xl text-center"
      >
        <p class="text-3xl text-primary mb-4">Level</p>
        <p>Before college, I attended VWO-level general education.</p>
        <p>The profile I went with was called Nature & Technology.</p>
        <p>This set focuses on scientific subjects.</p>
      </div>
      <div
        class="years-card m-2 pb-2 bg-bgaccent border-secondary border-2 rounded-xl text-center relative mb-[100px] overflow-visible"
      >
        <p class="text-3xl text-primary mb-4">Years</p>
        <p>The education took a total of 6 years.</p>
        <p>Check the subjects per year here.</p>
        <div class="relative mb-[25px] overflow-visible">
          <div
            class="absolute right-5 left-5 top-2 p-2 bg-primary border border-secondary rounded text-white overflow-visible h-20"
          >
            <span>Overlap Content</span>
          </div>
        </div>
      </div>
    </div>
    <div class="subjects-part text-center">
      <span class="text-3xl text-primary">Subjects</span>
      <ul class="text-center">
        <li>Mathematics</li>
        <li>Physics</li>
        <li>Chemistry</li>
        <li>Dutch</li>
        <li>English</li>
        <li>German</li>
        <li>Physical Education</li>
        <li>Art</li>
        <li>Biology</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.overlap {
  display: grid;
}
</style>
