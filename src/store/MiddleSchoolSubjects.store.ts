import { defineStore } from "pinia";
import { computed } from "vue";

export const useMiddleSchoolSubjectsStore = defineStore(
  "middleschoolSubjects",
  () => {
    const subjectSets: { [year: number]: string[] } = {
      0: [],
      1: [
        "Art",
        "Dutch",
        "English",
        "French",
        "Geography",
        "History",
        "Latin",
        "Mathematics",
        "Physical Education",
        "Religious Studies",
      ],
      2: [
        "Art",
        "Biology",
        "Dutch",
        "English",
        "French",
        "German",
        "Geography",
        "Greek",
        "History",
        "Latin",
        "Mathematics",
        "Physical Education",
        "Physics",
        "Religious Studies",
      ],
      3: [
        "Art",
        "Biology",
        "Chemistry",
        "Culture Studies",
        "Craftsmanship",
        "Dutch",
        "English",
        "French",
        "German",
        "Geography",
        "Greek",
        "History",
        "Latin",
        "Mathematics",
        "Physical Education",
        "Physics",
        "Religious Studies",
      ],
      4: [
        "Chemistry",
        "Culture Studies",
        "Dutch",
        "English",
        "German",
        "Mathematics",
        "Nature, Life & Technology Study",
        "Physical Education",
        "Physics",
      ],
    };

    const subjectsForYear = computed(() => (year: number) => {
      return subjectSets[year];
    });

    return { subjectSets, subjectsForYear };
  },
);
