# nodejs_case_study

<h1 align="center">
	<img height="150" src="https://cdn.rawgit.com/asrinivas61/nodejs_case_study/master/logo.svg" alt="A nodeJS case study demonstration project" />
	<br> NodeJS-Angular6
</h1>
<p align="center">
	<a href="https://travis-ci.org/asrinivas61/nodejs_case_study">
		<img src="https://cdn.rawgit.com/asrinivas61/nodejs_case_study/master/rust.svg" alt="Build Status">
	</a>
	<a href="https://github.com/asrinivas61/nodejs_case_study">
		<img src="https://img.shields.io/codecov/c/github/asrinivas61/nodejs_case_study.svg?style=flat-square" alt="Codecov">
	</a>
	<a href="#">
		<img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="Software License">
	</a>
</p>

<p align="center"><code>Nodejs Angular6 case study</code>A nodejs application to demonstrate client-server communication model through exposing REST calls.</p>

## Steps to Run the project

```bash
git clone https://github.com/asrinivas61/nodejs_case_study.git

# You may use npm or Yarn
npm install

# After successful installation
npm start
```
## Existing Features

### 1. Simple NodeJS server listening on port 3001 & output a local folder contents.
   NodeJS server will start running once after installing node modules & running ```npm start``` command.

### 2. NodeJS server that serves as a RESTFUL api that takes two parameters in a GET call and produces their product.
   A client UI code build with Angular 6 production files are already copied in the node server public folder. It will start serving the UI code immediately after running the server.

   The UI screen looks like below.
   ![Imgur](https://i.imgur.com/2XBDHPg.png)

### 3. NodeJS server that serves as a RESTFUL  api that accepts a String as an input name and returns the first non-repeating character in the String.
    Client UI designed in such a way provided an input field with validation which accepts only string input.

### 4. NodeJS server that serves as a RESTFUL  api that accepts a file content and writes them to the disk.
    An UI provided to select any file from the client local system, and that can be uploaded to server. At server it will be stored in a folder.
    
    The UI screen looks like below.
   ![Imgur](https://i.imgur.com/QBoA0gv.png)

## License

MIT &copy; [Srinivas A](adapasrinivas61@gmail.com)