import { Project } from "@/models";

export const Projects: Project[] = [
  {
    projectName: "Laptop ATM",
    paragraphs: [
      "Turning a laptop into a simulated ATM.",
      'Scan "bank" cards using an Arduino with RFID reader.',
      "Attached numpad for PIN codes.",
      "Transaction managed in Java application.",
      "History and accounts logged in MySQL Database.",
      "User interface built using Java Swing.",
      "Account lockout after 3 failed attempts.",
    ],
    keywords: ["Arduino C", "Java", "MySQL", "Java Swing"],
    imagePos: "left",
    imageName: "atm",
  },
  {
    projectName: "The Music Hand",
    paragraphs: [
      "Glove fitted with accelerometers and gyroscopes.",
      "Detects and identifies different movements.",
      "Connected to an android app through Bluetooth.",
      "App allows for instrument selection.",
      "Movements get translated to instrument sounds.",
    ],
    keywords: ["Android Java", "Bluetooth", "Arduino C", "Multi-threading"],
    imagePos: "right",
    imageName: "musichand",
  },
  {
    projectName: "SolveDoku",
    paragraphs: [
      "Iteratively solve Sudoku puzzles.",
      "Started as an extra assignment for bonus points.",
      "Ended up a hobby project.",
      "Implements the Observer pattern.",
      "Known solving techniques are applied through an observer.",
      "Iteratively eliminates cell candidates.",
    ],
    keywords: ["C++", "Observer pattern"],
    imagePos: "right",
    imageName: "solvedoku",
  },
  {
    projectName: "Lumin's Path",
    paragraphs: [
      "3D platformer game developed in Unity.",
      "Player can switch between light and dark.",
      "World elements react to which state the player is in.",
      "Made as in a group of twelve, of which 4 developers.",
      "Released and free to download on Steam.",
    ],
    keywords: ["C#", "Unity", "Linear algebra"],
    imagePos: "left",
    imageName: "luminspath",
  },
];
