import { Moment } from "@/models";

const Education: Moment[] = [
  {
    code: "middleschool",
    start: "August 2010",
    end: "July 2016",
    title: "Pre-University",
    subtitle: "Penta College CSG Scala Rietvelden",
    description: `General education to prepare for university or college.
                  The subject set I chose focused on mathematics, physics, and chemistry.
                  Also included languages such as dutch, english, and german.`,
    location: "Spijkenisse",
  },
  {
    code: "bachelor",
    start: "August 2016",
    end: "July 2020",
    title: "Bachelor's Degree",
    subtitle: "Rotterdam University of Applied Sciences",
    description: `During my bachelor of Computer Engineering I was taught skills for both software and hardware.
                  Programming languages included Java, C++, and Haskell.
                  Other skills include soldering and computer networking, trained by doing various projects.`,
    location: "Rotterdam",
  },
];

const Experience: Moment[] = [
  {
    code: "peercoach",
    start: "August 2017",
    end: "July 2018",
    title: "Peercoach",
    subtitle: "Rotterdam University of Applied Sciences",
    description: `A peercoach can be described as a student helper. In my second year I guided and supported
                  the new first-year students. This involved giving advice, assisting them in projects,
                  and tutoring.`,
    location: "Rotterdam",
  },
  {
    code: "internship",
    start: "September 2018",
    end: "January 2019",
    title: "Student Internship",
    subtitle: "Cornerstone Technology B.V.",
    description: `The student internship provided me with my first professional programming experience.
                  Cornerstone specialises in the conversion of software to a different language. They were
                  working on a big PL/1 to Java project during my time there.`,
    location: "Dordrecht",
  },
  {
    code: "graduation",
    start: "February 2020",
    end: "July 2020",
    title: "Graduation Internship",
    subtitle: "Alten Nederland",
    description: `Alten Nederland recruited me for my graduation internship, where I worked on an anti-poaching
                  project. My part of the project was building a system that can detect the sounds of gunfire.
                  This was handled by training a model using TensorFlow and Python.`,
    location: "Capelle a/d IJssel",
  },
  {
    code: "brunel",
    start: "October 2020",
    end: "Now",
    title: "IT-Specialist",
    subtitle: "Brunel Nederland",
    description: `After my studies, Brunel hired me as an IT-specialist. In detachment to clients at first,
                  but eventually joined their internal Software Solutions team. Here I write specialized software
                  in projects for clients, focusing on C#, Angular in Typescript, and Azure.`,
    location: "Utrecht",
  },
];

export const Moments: Moment[] = [...Education, ...Experience];
