const Education: Moment[] = [
  {
    code: "middleschool",
    time: "August 2010 -- July 2016",
    title: "Pre-University Education",
    subtitle: "Penta College CSG Scala Rietvelden",
  },
  {
    code: "bachelor",
    time: "August 2016 -- July 2020",
    title: "Bachelor of Computer Engineering",
    subtitle: "Rotterdam University of Applied Sciences",
  },
];

const Experience: Moment[] = [
  {
    code: "peercoach",
    time: "August 2017 -- July 2018",
    title: "Peercoach",
    subtitle: "Rotterdam University of Applied Sciences",
  },
  {
    code: "internship",
    time: "September 2018 -- January 2019",
    title: "Student Internship",
    subtitle: "Cornerstone Technology B.V.",
  },
  {
    code: "graduation",
    time: "February 2020 -- July 2020",
    title: "Graduation Internship",
    subtitle: "Alten Nederland",
  },
  {
    code: "brunel",
    time: "October 2020 -- Now",
    title: "IT-Specialist",
    subtitle: "Brunel Nederland",
  },
];

export const Moments: Moment[] = [...Education, ...Experience];

class Moment {
  code = "";
  time = "";
  title = "";
  subtitle = "";
}
