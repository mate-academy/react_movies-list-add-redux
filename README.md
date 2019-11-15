# Base template for React

## Task

- install `redux`, `redux-thunk`, `react-redux` libraries
- use `redux` `Provider` in `App` component
- create `store` folder and files: `actionTypes.js`, `actions.js`, `reducer.js`, `index.js`(or `store.js`) inside
- create `reducer` with `initialState` corresponding to data you want to save in store
- create at least one action type and action creator to add new movie to the list
- create two thunks(thunk actions) - to search movie by title and to get movie by id
    - (\*) create one reusable function to fetch movie and use it in thunks
- connect `HomePage` and `MoviePage` to store. Use `movies`, `addMovie`, `searchMovie`, `getMovieById` from store instead of local state and methods.
    - after these changes `HomePage` should become functional component, `SearchMovie` should have only `searchWord` in state,
    `MoviePage` should not have local state, only lifecycle hook

## Extra tasks

- create action and store field to save fetch errors, show error from store in `SearchMovie` component if movie is not found
- add `isLoading` field in redux state. Show loader when needed in `SearchMovie` component and `MoviePage` component.
- add ability to remove movie from list. show remove button on `MovieCard` and/or `MoviePage`

## Workflow

- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 

- Run `npm run start` to start `http-server` on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- When you finished `Deploy on gh-pages`

## Deploy on gh-pages

- Build the project
  ```bash
  $ npm run build
  ```
- Commit and push all recent changes
  ```bash
  $ git add .
  $ git commit -m 'commit message'
  $ git push origin master
  ```
- Execute `npm run deploy`. This command will push the `/build` folder to branch
  `gh-pages` in your remote repository. 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes again.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure

- `src/` - directory for css, js, image, fonts files
- `build/` - directory for built pages

You should be writing code in `src/` directory.

### Demo link

Add link here: `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)`
