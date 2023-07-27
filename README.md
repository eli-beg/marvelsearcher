# Marvel Searcher

#### Marvel Searcher using the [Marvel Api](https://developer.marvel.com).🚀

## Table of Contents

1. **General Info**
2. **Getting Started**
3. **Project Structure and Funcionalities**
4. **Technologies**
5. **Motivation**

---

## 1-General Info

This is a project in which a SPA is developed for the search of Marvel characters and comics, with the possibility of storing your favorite searches.

It contains:

- A search bar, in which you can search for characters by name or comics by url.
- You can store searches in favorites and display them in their section.
- You can see the comics related to each character and their details

---

## 2-Getting Started

To get a local copy up and running follow these simple example steps.

## Prerequisites

- Node.js: Ensure you have Node.js installed on your system. You can download it from https://nodejs.org and follow the installation instructions for your operating system.

## Installation

1. Clone the repo

- Navigate to the directory that you would like to clone the repository and create a local copy on your machine using this command:

  ` git clone https://github.com/eli-beg/marvelsearcher.git`

2. Install the required dependencies:

   `npm install`

3. Marvel API Configuration:

   To make the application work correctly, you'll need to obtain a public Marvel API key. Follow these steps:

   a. Go to the [Marvel Developer](https://developer.marvel.com) website and create an account or log in if you already have one.

   b. Once inside the developer platform, obtain your public and private Marvel API key.

   c. Create a .env file in the root of the project and add your Marvel API key and a HASH of your public and private api key, as an environment variable:

   ````
     VITE_API_KEY=
     VITE_API_HASH=  ```
   ````

   - You can generate the hash of your api keys through a javascript library, or with a website that offers hash generation services like: https://www.md5hashgenerator.com/ .

4. Once you have completed the installation and configuration, you can run the project locally with the following command:

   `npm run dev`

---

## 3-Project Structure and Funcionalities

### Home Screen

- In the home page you will find:
  - a random image of some character in card format
  - a search bar where you can enter names of characters or url of a comic book

![Optinal Text](/src/assets/readmeImages/1.jpg)

---

### Search Results Screen

- When you perform a search the results will be displayed in cards format, with the possibility to see their related comics and also to store the search in favorites.

## ![Optinal Text](/src/assets/readmeImages/2.jpg)

![Optinal Text](/src/assets/readmeImages/3.jpg)

### Comic Preview Screen

- You can also see the details of each comic, with its image and more information about its creators.

![Optinal Text](/src/assets/readmeImages/4.jpg)

### Favorites Screen

- In your favorites list you can delete the characters you decide to delete

![Optinal Text](/src/assets/readmeImages/5.jpg)

---

## 4-Technologies 🛠

The project makes use of the following main technologies and libraries:

- React: A JavaScript library for building user interfaces.
- React Router DOM: A declarative router for React that enables navigation in the application.
- Styled Components: A library for writing CSS styles in React components using template literals.
- Axios: A promise-based HTTP client for making API requests.
- Font Awesome: An icon font and toolkit to add iconography to the application.
- JS Cookie: A library for working with cookies in JavaScript.

## 5- Bonus: Motivation 🚀

This was a project carried out as a requirement to finish a bootcamp about frontend development. Beyond the objective, the main goal is to solidify knowledge, learn new ones and grow day by day in the world of web programming. Thank you for reading! 😊
