# irritable-cat
Init 3: Hello, Web Servers

## Specifications

These are the basic specs for “Hello, Web Servers”, broken into 5 stages. If you complete these specs, try taking on some of the Stretch specs.

### Stage 1

Setup the repo and file structure, install and configure Express, and get a basic server running.

 - [X] Repo (your artifact) is created on GitHub
 - [X] Repo follows a conventional file structure for an Express.js app:
   - [X] package.json: standard for any Node.js app; includes package info and lists dependencies
   - [X] app.js: your Express server, with all routes defined
   - [X] views/: for storing your Pug HTML templates
   - [X] public/: for storing static files like CSS and image
   - [X] README.md: includes overview of your repo
 - [X] Express server can be started with $ node app.js
 - [X] Server renders a page at the root route (/) that looks like the mockup but does not have any functionality - it is just a static page
 - [X] All package dependencies are defined in package.json
 - [X] The artifact produced is properly licensed, preferably with the MIT license

### Stage 2

Build out the template structure with Pug for a single-file editor. Don’t worry about multiple files for now, or implementing the markdown rendering.

- pug is installed and set up for HTML templating
 - [X] View template files are created in the /views subdirectory
 - [X] Main view file is called index
 - [X] Includes are created for the different “components” of the main view:
   - [X] Sidebar (shows list of files)
   - [X] Header (shows current filename, word count, and save button)
   - [X] Editor (shows markdown editor pane)
   - [X] Preview (shows rendered markdown)
 - [X] CSS is organized into one or more files in the public/ directory
 - [X] CSS declarations are well-named and formatted (consider using this small guide)

### Stage 3

Setup real markdown rendering so that writing in the left panel updates the right panel, and make the “Save” button work.

- marked is installed
 - [X] Markdown text written in the “Editor” pane is rendered in the “Preview” pane automatically
 - [X] Preview is updated every time text in the editor changes
 - [X] Clicking the “Save” button saves the markdown text in the editor to a file in a subdirectory of the server data/
 - [ ] The markdown file in data/ is loaded and used as the starter text in the editor (in other words, the last saved text is loaded by default)

### Stage 4

Build out multiple-file functionality, and use cookies to remember the last opened file.

 - [X] Users can create more than one markdown file
 - [X] Each file has its own URL, named after its filename (for example, if the markdown file is called Todos.md, its URL would be http://localhost:3000/todos)
 - [X] Markdown files are listed in the sidebar
 - [X] Clicking on the “New File” button in the sidebar lets users create a new file and prompts for the file name using prompt()
 - [X] Clicking on a file in the sidebar will navigate to the page, load the file contents into the editor, and render them in the preview
 - [X] Markdown content can still be saved to files in data/, with one file in data/ for each file in the sidebar
 - [ ] Most recently edited file is tracked using a cookie
 - [ ] When visiting the root route (/), users are redirected to the file they last edited

### Stage 5

No stage 5! Move into stretch specs, or use the time to polish up your code.

Mockups

Try to mimic the following mockup as closely as you can. Note that some of the features in the mockup are part of the stretch specs - you don’t have to build those yet.

## Stretch

If you complete all of the specs listed above (the checkboxes), there’s no reason to stop there! Try building more advanced features with these stretch specs.

 - [ ] Clicking the trash can icon…
  - [ ] Deletes the file from the data/ folder
  - [ ] Shows the sidebar updated without the deleted file
 - [ ] “Word count” section in the header displays the word count for the currently open file
And if you get through those, try turning Bossggle into an Express app.

 - [ ] New repo bossggle-server is created
 - [ ] Bossggle works the same as in the serverless version, but is built with Express and Pug
 - [ ] Score and word history is saved using localStorage
