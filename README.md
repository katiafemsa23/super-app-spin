# Premia module of the Spin Plus app

**Premia module of the Spin Plus** is a React Native application that provides a realistic simulation of **Premia module**, showcasing the skills and expertise gained during the bootcap.

Developed by:

- Jesús Felipe Gutiérrez Madrigal
- Katia Araceli Vega Soto

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Specifications](#specifications)
- [License](#license)
- [Credits](#credits)
- [Badges](#badges)

## Features

### Benefits (Beneficios)

This screen provides a detail information of the points and their value in pesos that the user have.

- Points label
- Tag with the value of the points that the user have
- Two cards
  - Consulta tu historial: When is pressed is going to navigate to Movements screen.
  - Cambia tus puntos: When is pressed is going to navigate to Change your points screen.
- Acumula tus puntos section that displays a title, description and an image as an empty state
- Gana más puntos section that displays a title, description and an image as an empty state
- Suma al comprar section that displays a title, description and an image as an empty state
- Banner carousel showing promotions

### Movements (Movimientos)

Screen with three tabs that displays data by All (Todos), Earned (Ganados) and Used (Usados).
The Movement List item displays:

- Image of the Entity
- Detail of the Movement
- Date that the movement was realized
- Points that was gained (+) or used (-)

When a Movement List Item is pressed is going to navigate to the Movement Detail.

### Movement Detail

- Card with points detail:
  - Logo of the entity
  - Label with description if you lost or gained points
  - Number of points that you lost or gained
- Detail of the total amount
- Date that the movement was realized
- Date from which you can use the points
- Transaction number

### Change your points (Cambia tus puntos)

1. **Select enttiy**
   - Is going to show a list of the available entities where you can use your points. By selecting one of the points is going to take you to **Balance screen**
2. **Balance**
   - Points available label
   - Information icon
   - Points value in pesos label
   - Cards with the amount in pesos and a detail text at the bottom with the equivalent points only if you have >= 1000 points **$50** and **$100** cards are going to be displayed.
     If you have >= 10000 **$200** and **$500** are going to be displayed. By pressing one of these cards their value has to be reflected on the input.
   - Input that handles error and you can type a custom amount.
   - Button that handles the navigation to the Transaction detail only if you typed an amount and is not greater than your points.
3. **Transaction detail**
   - Card with logo entity, gift certificate that allows you to copy it.
   - A helper text that you can press it and a modal showing the steps of how to use your gift certificate
   - Points changed
   - Value
   - Date of the transaction
   - Valid until
   - Transaction number detail
   - Gift certificate use button
   - Save for another time button

## Installation

- Navigate to Project Directoy

```bash
cd path/super-app-spin
```

- Install dependencies

```bash
yarn install
```

## Usage

- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
yarn
```

- Start the project.

```bash
yarn run ios
yarn run android
```

- Start db.json

```bash
yarn run json-server
```

## Specifications

- [React Native](https://reactnative.dev/) Framework for building mobile apps using React. Create native apps for Android, iOS, and more.
- [React Navigation](https://reactnavigation.org/) Library for navigation and routing in React Native apps.
- [Axios](https://axios-http.com/es/docs/intro) HTTP client for making network requests.
- [react-native-uuid](https://www.npmjs.com/package/react-native-uuid) Library for generate a Universally Unique IDentifier (UUID).

## License

Copyright (c) 2023 Digital Femsa

## Credits

[Figma Super App Flow](https://www.figma.com/file/7vNlhvWCFxpILCCh93wp9P/Super-App--Flow?type=design&node-id=7622-210762&mode=design&t=KjbcAvlSwGql8QRu-0)
