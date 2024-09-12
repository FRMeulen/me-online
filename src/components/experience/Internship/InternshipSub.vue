<template>
  <div class="m-8 text-center flex flex-grow flex-col">
    <div class="top-container flex flex-row w-full h-1/6">
      <div class="left-words w-1/2 m-auto text-textprimary text-4xl p-2">
        Translating solutions
      </div>
      <div class="logo-container ml-auto w-1/2">
        <div class="company-logo h-full w-full">
          <img
            class="object-contain h-full w-full"
            src="@/assets/experience-assets/cornerstone-logo.png"
            alt="Cornerstone logo"
          />
        </div>
      </div>
    </div>
    <div class="info-container mt-2 h-5/6 card grid grid-rows-5 grid-cols-1">
      <div
        class="info-top row-span-1 row-start-1 flex flex-row justify-evenly items-center"
      >
        <div class="top-paragraph">
          <p>
            Cornerstone translates customer solutions from one language to
            another.
          </p>
          <p>To achieve this, they use their custom translation platform.</p>
        </div>
        <div class="bottom-paragraph">
          <p>I assisted in a big PL/1 to Java project.</p>
          <p>
            Specifically, in proving the migrated software functions the same as
            the original.
          </p>
        </div>
      </div>
      <div
        class="info-bottom row-span-4 row-start-2 grid grid-rows-12 grid-cols-1"
      >
        <p
          class="text-4xl mt-2 row-span-1 border-bgaccent border-t-bgprimary border-2"
        >
          Side by side
        </p>
        <div
          class="side-comparison row-start-3 row-span-9 m-2 grid grid-rows-5 grid-cols-9"
        >
          <div
            class="pl1-side col-start-2 col-span-3 row-span-5 bg-bgsecondary rounded-xl grid grid-rows-9 border-primary border-2"
          >
            <p class="text-2xl border-b-2 border-b-primary">PL/1</p>
            <div
              class="pl1-info m-2 row-span-8 flex flex-col items-center justify-evenly"
            >
              <p>Tracing through PL/1 pre-processor macros.</p>
              <p>The macros trace program flow.</p>
              <p>Starting or ending routines.</p>
              <p>Calling functions with parameters.</p>
            </div>
          </div>
          <p class="vs row-start-3 col-start-5">VS.</p>
          <div
            class="java-side col-span-3 col-start-6 row-span-5 bg-bgsecondary rounded-xl grid grid-rows-9 border-primary border-2"
          >
            <p class="text-2xl border-b-2 border-b-primary">Java</p>
            <div
              class="java-info m-2 row-span-8 flex flex-col items-center justify-evenly"
            >
              <p>Implement logging using ByteBuddy.</p>
              <p>Write to logs which classes get invoked.</p>
              <p>Also log the called methods.</p>
              <p>Log their parameters as well.</p>
            </div>
          </div>
        </div>
        <p class="text-2xl row-span-1 row-start-12">
          By comparing the output of both, I proved the Java version functioned
          identically.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
