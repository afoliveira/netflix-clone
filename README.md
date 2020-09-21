# Netflix Clone

This project aims to clone the web version of Netflix using the most used technologies in the front-end market and also serves as a learning base in React JS.

## Installation

Run the script :
```bash
$ yarn install
```
or simply:
```bash
$ yarn
```

### Running the Application

```bash
$ yarn start
```

Begin the project in Developer environment.

Open [http://localhost:3000](http://localhost:3000)

## Code Standardization

- [ESLint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)

To run ESLint and Prettier for the entire project, simply run:

Eslint:
```bash
$ yarn lint
```

Prettier:
```bash
$ yarn format
```

### VS Code

For VSCode to format the code automatically when saving the file. You need to install the extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

Then open `settings.json`, use * ctrl + shift + P * and search for:` Preferences: Open Settings (JSON) `, then add the following settings:

```json
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
"[javascript]" : {
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
},
```
