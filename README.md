PROJECT STARTER SKELETON by. Lonis

This skeleton contains file configurations for frontend
enviroments in JavaScript applications including:

- Babel Loader
- HTML Webpack Plugin
- HTML Loader
- Webpack
- Webpack Cli
- Webpack Dev Server
- CSS Loader
- Style Loader
- ESLint airbnb
- Prettier
- Jest
- Source Map

USAGE:

Copy and paste this into the command line to download respective dependencies:

npm init

npm i -D webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server jest

To Run Dev Server (Port 3000):
npm run dev

To Build For Production:
npm run build

To enter auto refresh testing mode:
npm run watch

- index.js (javascript Entry Point)
- template.html (template)
- styles/main.css (styles)

Make sure the following files exist:
.gitignore
.prettierignore
.prettierrc
Make sure to write in both ignore files:
node_modules
dist



Ignore ESLint for noe as there is a bug with cross-spawn 7.0.5 19/11/2024
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node webpack webpack-cli html-webpack-plugin style-loader css-loader html-loader webpack-dev-server babel-loader @babel/core @babel/preset-env

npx install-peerdeps --dev eslint-config-airbnb

Also need to work on babel incorporation... I dont think it is working at the momment.