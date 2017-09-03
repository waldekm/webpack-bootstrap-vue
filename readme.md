1. yarn add webpack
2. yarn add jquery bootstrap vue
3. yarn add --dev css-loader style-loader file-loader url-loader
5. create "webpack.config.js"                              -> https://webpack.js.org/concepts/
6. create entry point: "src/index.js"
7. add to entry point: import 'bootstrap';                 -> https://getbootstrap.com/docs/4.0/getting-started/webpack/
8. add to entry point: import 'bootstrap/dist/css/bootstrap.min.css';
9. create index.html
10. add to package.json:
                        "scripts": {
                            "build": "webpack --progress --watch"
                        },
                                                            -> https://webpack.js.org/api/cli/

11. write in a Terminal: yarn run build
