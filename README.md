# To start the application.
1. Run `npm i` from the terminal in the root directory.
2. In the `/src/constants` directory, create a file called `Secrets.ts`.
3. This file is gitignored and used for any info you do not want to push.
4. For now, make this file export an abstract class called `Secrets`.
5. Give this class two static properties: `birthMonth` and `birthDay`.
6. Now start the application by using the `vue serve` command in the console.