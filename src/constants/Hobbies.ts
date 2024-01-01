export const Hobbies: Hobby[] = [
  {
    code: "bouldering",
    iconName: "fa-solid fa-arrow-up-right-dots",
    hobbyName: "Bouldering",
  },
  {
    code: "videoGames",
    iconName: "fa-solid fa-gamepad",
    hobbyName: "Video Games",
  },
  {
    code: "walking",
    iconName: "fa-solid fa-person-walking",
    hobbyName: "Walking",
  },
  {
    code: "programming",
    iconName: "fa-solid fa-code",
    hobbyName: "Programming",
  },
  {
    code: "boardCardGames",
    iconName: "fa-solid fa-dice-five",
    hobbyName: "Board / Card Games",
  },
  {
    code: "parties",
    iconName: "fa-solid fa-beer",
    hobbyName: "Parties",
  },
];

class Hobby {
  code = "";
  iconName = "";
  hobbyName = "";
}
