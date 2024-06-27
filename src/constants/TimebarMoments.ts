import { Moment } from "@/models";

const Education: Moment[] = [
  {
    code: "middleschool",
    time: "August 2010 -- July 2016",
    title: "Pre-University Education",
    subtitle: "Penta College CSG Scala Rietvelden",
    description: `General education to prepare for university or college.
                  The subject set I chose focused on mathematics, physics, and chemistry.
                  Also included languages such as dutch, english, and german.`,
  },
  {
    code: "bachelor",
    time: "August 2016 -- July 2020",
    title: "Bachelor of Computer Engineering",
    subtitle: "Rotterdam University of Applied Sciences",
    description: `During my bachelor of Computer Engineering I was taught skills for both software and hardware.
                  Programming languages included Java, C++, and Haskell.
                  Other skills include soldering and computer networking, trained by doing various projects.`,
  },
];

const Experience: Moment[] = [
  {
    code: "peercoach",
    time: "August 2017 -- July 2018",
    title: "Peercoach",
    subtitle: "Rotterdam University of Applied Sciences",
    description: `A peercoach can be described as a student helper. In my second year I guided and supported
                  the new first-year students. This involved giving advice, assisting them in projects,
                  and tutoring.`,
  },
  {
    code: "internship",
    time: "September 2018 -- January 2019",
    title: "Student Internship",
    subtitle: "Cornerstone Technology B.V.",
    description: `The student internship provided me with my first professional programming experience.
                  Cornerstone specialises in the conversion of software to a different language, and were
                  working on a big PL/1 to Java project during my time there.`,
  },
  {
    code: "graduation",
    time: "February 2020 -- July 2020",
    title: "Graduation Internship",
    subtitle: "Alten Nederland",
    description: `Alten Nederland recruited me for my graduation internship, where I worked on an anti-poaching
                  project. My part of the project was building a system that can detect the sounds of gunfire.
                  This was handled by training a model using TensorFlow and Python.`,
  },
  {
    code: "brunel",
    time: "October 2020 -- Now",
    title: "IT-Specialist",
    subtitle: "Brunel Nederland",
    description: `After my studies, Brunel hired me as an IT-specialist. In detachment to clients at first,
                  but eventually joined their internal Software Solutions team. Here I write specialized software
                  in projects for clients, focusing on C#, Angular in Typescript, and Azure.`,
  },
];

export const Moments: Moment[] = [...Education, ...Experience];
