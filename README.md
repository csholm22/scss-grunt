1. Make sure you have Node.js (Optinal if you all ready have)
   a. Run terminal command: node --version
      You need greater then 0.10 to run. I am using v6.9.1
   b. To update or install go to https://nodejs.org/en/,
      Click the "v6.10.0 LTS Recommended For Most Users" button to download.
      Open downloaded package and run the installer.

2. Install globally Grunt-Sass (Optinal if you all ready have)
    a. Run terminal command: npm install -g grunt-cli
    b. You can check the version install with terminal command: grunt --version
       (I have grunt-cli v1.2.0)

3. Install Grunt in local project
    a. CD into the SCSS-Grunt folder for the local project
    b. Run terminal command: npm install grunt --save-dev

4. Install node-sass Grunt plugin
    a. Run terminal command: npm install grunt-sass --save-dev

5. Install Grunt watcher plugin
    a. Run terminal command: npm install grunt-contrib-watch --save-dev

6. Run terminal command: grunt
   This will start running the grunt-sass compiler and will recompile with any saved changes to the scss files.
   Anytime you want to start the program, In the terminal: cd to the sass-grunt directory and run command "grunt".
   To stop the program: control + c

   Enjoy,
   Chris
