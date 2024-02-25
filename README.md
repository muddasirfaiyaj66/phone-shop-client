

## Phone Shop Website Documentation

## 

 live link: https://phone-shop-46557.web.app/

## 🚀 Introduction
Welcome to the documentation for the Phone Shop website! This document outlines the key features and functionality of the website.


## Features

- Users can view a list of available mobile phones.Details for each mobile, such as name, price, and specifications, are displayed.Users can click on a mobile to view more details.

- There is a private route for administrators to access the following features.

- Administrators can add new mobile phones to the website.Each mobile can have details like name, price, specifications, and images.Newly added mobiles are displayed in the list of available mobiles.

- Administrators can edit the details of existing mobile phones.This includes updating the name, price, specifications, and images of a mobile.Changes are reflected in the mobile listings.

- Users can add mobile phones to their shopping cart.
- Users can remove mobiles from their shopping cart.

## To install this project locally 



 


## Environment Variables

```bash
  git clone https://github.com/muddasirfaiyaj66/phone-shop-client
  npm install
  npm run dev
```

To run this project, you will need to add the following environment variables to your .env.local file
```bash
VITE_APIKEY= your firebase project api key
VITE_AUTHDOMAIN= your firebase project AUTHDOMAIN
VITE_PROJECTID= your firebase project PROJECTID
VITE_STORAGEBUCKET= your firebase project STORAGEBUCKET
VITE_MESSAGINGSENDERID= your firebase project MESSAGINGSENDERID
VITE_APPID= your firebase project APPID
```