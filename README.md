JS Frontend Starter

	`npm install`

	`gulp`


Features
================
 * Reasonably well laid out project structure
 * Reasonably well laid out js structure
 * Reasonably well laid out asset structure

Features
================
 * Use Sass to maintain and compile css
 * Use React + (JSX / React Router)
 * Browserify + (Reactify)
 * Gulp
 * Editorconfig



Structure
================
|-- build							// compiled files go here
|   |-- css			
|   |	`-- style.css
|   |-- js
|   |	`-- app.js
|   -- views
|   `-- index.html
|-- devops							// local/remote admin stuff goes here
|   |-- gulp
|   |	|-- tasks
|   |   |	`-- default.js
|   |	|-- util
|   |   `-- config.coffee
|-- src
|   |-- assets
|   |	|-- fonts
|   |	|-- img
|   |	|-- scss
|   |-- lib							// app specifc stuff
|   |	|-- mixins
|   |		`-- bootstrap-react.js
|   |	|-- commands				// Command Bus
|   |	|-- console					// CLI
|   |	|-- http
|   |	|	|-- controllers
|   |	|	|-- middleware
|   |	`-- routes.js
|   |	|-- repositories
|   |	|-- transformers
|   |	|-- models
|   |-- js
|   |	|-- component				// js components / modules
|   |	|-- config					// 
|   |	|-- layouts					// view layouts
|   |	|-- partials				// "static" components
|   |   `-- app.js
|   |   
|   `-- index.html
`-- public
`-- gulpfile.js
