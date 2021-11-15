# Vennli Frontend Developer Code Test

This project is created for Vennli's Frontend Developer code test. Bootstrapped with [Create React App](https://github.com/facebook/create-react-app), this application is fully mobile responsive and utilizes React hooks to reuse stateful logic and share hooks to multiple components without changing the code's component heirarchy. 

![Trivia Challenge](/public/assets/screen1.png)
![Trivia Challenge 2](/public/assets/screen2.png)

### Demo
[https://vennli-test.netlify.app/](https://vennli-test.netlify.app/)

## Table of contents
1. [Technologies used](#technologies-used)
2. [Requirements](#requirements)
3. [Setup and Installation](#setup-and-installation)
4. [Additional Notes](#additional-notes)

## Technologies used
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CRACO](https://www.npmjs.com/package/@craco/craco)
- [React Icons](https://react-icons.github.io/react-icons)
- [Netlify](https://www.netlify.com/)

## Requirements

### Node.js
-You need to have Node on your local development machine to run this application. If you don't have it installed on your system, please head to the official [Node.js](https://nodejs.org/en/) website to download and install Node.

### Git
-You'll also need to have Git installed to run Git commands in your terminal. 

### Install Git on Mac
1. Install [Homebrew](https://brew.sh/) 
2. Once Homebrew is installed, in your terminal run: 
```
$ brew install git
```
3. Verify the installation was successful:
```
$ git --version
```
### Install Git on Windows
You can download the latest Git for Windows installer [here](https://gitforwindows.org/)

## Setup and Installation
1. In your terminal, go to the folder where you want to save the source code and clone the repository by running:
```
$ git clone https://github.com/joeylansangan/VennliTest.git
```
2. Go to the project directory and install dependencies by running:
```
$ yarn add
```
3. After installation you can now run the application in the development mode with:
```
$ yarn start
```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Additional Notes

### Tailwind CSS
I used Tailwind CSS for rapid styling and easy mobile responsiveness. 

### CRACO
Create React App doesn’t let you override the PostCSS configuration natively. CRACO plugin is required to enable the configuration of Tailwind CSS.

### CI/CD
Continuous Integration and Deployment is setup for the demo version of this application. The Git repository is connected to Netlify and triggers a publish automatically everytime a commit is pushed.