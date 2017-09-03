I use **yarn** to install node packages. 
If you prefer **npm**, keep in mind to apply _npm install ..._ instead of _yarn add,..._

### 1. Install webpack

`yarn add webpack`

### 2. Install jQuery, Bootstrap and Vue.js
`yarn add jquery bootstrap vue`

jQuery library is required for proper Bootstrap work.

### 3. Install webpack loaders

`yarn add --dev css-loader style-loader file-loader url-loader`

Loaders enable transform other files to javascript code.  
css-loader and style-loader - load css and inline style.  
file-loader and url-loader - load files like svg, woff2

### 4. Create "webpack.config.js" file 

Please see how this file looks like in the repository.

### 5. Create entry point: "index.js"

Please see how this file looks like in the repository.

### 6. Create "index.html" file

Please see how this file looks like in the repository.

### 7. Add to "package.json" _script_ key

```
"scripts": {
   "build": "webpack --progress --watch"
}
 ```

That tells yarn or npm to run the Webpack in watch mode and show percent progress during building of project.

### 8. Write in the Terminal 

`yarn run build`
