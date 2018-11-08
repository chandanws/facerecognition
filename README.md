# Facerecognition App

Demo project made with React for the Udemy courses:
  * [The Complete Web Developer in 2018: Zero to Mastery](https://www.udemy.com/the-complete-web-developer-in-2018/)
  * [The Complete Junior to Senior Web Developer Roadmap (2019)](https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/)
  
  A version in deployed in Heroku can be visited [here](https://face-recognition-iesp.herokuapp.com/).
  The backend is in a separated repo [here](https://github.com/skatersezo/facerecognition-backend).

## Description
**Facerecognition app** is a web app made with React + Redux that consumes an API from [Clarify](https://www.clarifai.com/) that uses AI to recognice faces in a provided picture. Users can log in and track their number of uploads.

## Installation

Clone or download the code.
Install the dependencies with the console command.
```console
npm install
```
Type then in the console this command to start the dev server in the port 3000.
```console
npm start
```

## Usage

The users have to signup and create an account, afterwards they'll enter to a page where they will see the number of images submited and an input field to upload image links for recognition.

## Information

Screenshots of your application below:

![Screenshot 1](https://github.com/skatersezo/facerecognition/blob/master/public/screenshots/Screenshot_1.jpg)

![Screenshot 2](https://github.com/skatersezo/facerecognition/blob/master/public/screenshots/Screenshot_2.jpg)


### Known Issues

* There is no validation for the input fields.
* A user can register without email, password, or a name.

## Authors

* Ivan Taghavi Espinosa (https://github.com/skatersezo/)
* Andrei Neagoie (https://github.com/aneagoie/)
