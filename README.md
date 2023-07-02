# Lemon's Scuffed Template

## What you will need
(You can find all these in [Important links](#important-links))
- Visual Studio Code (Replit also works, but it's not as easy)
- Node.js
- Archiver

## Creating a project
To get started, create a new folder in `projects`. You can name this whatever you like. Next, create a JavaScript file (you can also name this whatever you like) in the project folder you just created. Afterward, drag your map folder, along with all its contents, into the same folder. Your folder structure should look like this:

![Project Example](images/projectExample.png)

Once you have done that, open up `Lemon's Scuffed Template.js` and copy + paste everything over to the script you created in your project folder.

## Setting up your script
You might have noticed some variables at the top of the file and wondered how to set them up or what values to put in them.

```js
// Edit these v   (check README.md for help)
const projectName = 'lemon';
const mapName = 'mangoParty';
const inputDif = 'ExpertStandard.dat';
const outputDif = 'ExpertPlusStandard';
```

Based on the image above in [Creating a project](#creating-a-project), you might have already guessed their purpose. `projectName` is the name of your project folder, `mapName` is the name of your map folder, `inputDif` is your input difficulty, and so on. It's pretty self-explanatory.

There is no need to enter the full directory, as the script will do that for you. For example, using `ExpertStandard.dat` will autofill to `projects/lemon/mangoParty/ExpertStandard.dat`.

## Functions
(Not many, but useful)

- `getRandomNum(min, max)` returns a random number (includes decimals).
- `getRandomInt(min, max)` returns a random whole number.
- `getRandomColor()` returns a random color.

## Writing your script
### A brief introduction
Everything you write has to start with `map`. For example, if you wanted to create a note, you would use `map._notes.push()` (V2 Example).

We won't go into much detail here, as there is already another document linked under [Important links](#important-links) that covers this topic.

## Running your script
Open up `index.js`, and change `filePath` to your script (`projects/[project name]/[script name].js`).

## Important links
### Downloads
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Node.js](https://nodejs.org/en)
- [Archiver](https://www.npmjs.com/package/archiver)

### Modding Resources
- [Heck Wiki](https://github.com/Aeroluna/Heck/wiki)
- [Chroma Logs](https://github.com/NoodleExtensionsCommunity/How-to-Noodle/tree/main/Chroma%20Logs)
  
### Other
- [Learn Regex](https://github.com/ziishaned/learn-regex)

## Need help?
Feel free to contact me! lemonadefr on Discord