# POC TypeScript Game Library.

## About:

This is a POC of TypeScript and Prisma Orm that offers a API for a Game Library Service.

## Installation:

```bash
First create a PostgreSQL database.
Create a .env file with the following the .env.example.
Add the address of your database to the .env file.

Execute the following commands:

    npm install
    npx prisma migrate dev --name init
    npx prisma generate
    npm run dev // to initialize the application on development environment.

```

## The workflow of this API:

You can see a list of all games registered with a list of Reviews and the Average Note Ratings from the users

You need to register a user, so you can add/delete a game to your personal collection and add/update/delete your review and a note.

The functionality to add a new game is open to anyone at moment.

## Add a Game to Library:

```bash
Do a POST on the route "/games"

body:{
    name:"A string with the name of the game",
    launchDate: "A date in the format YYYY/MM/DD with is the date of release of the game",
    publisher: "A string with the publisher of the game"
}
```

## Get the list of All Games:

```bash
Do a GET on the route "/games"

You need to select at least one of the games id (gameId),
for use on the following routes
```

## Create a new User:

```bash
Do a POST on the route "/user"

body:{
    name:"A string that is the name of the user"
}

This will return the id (userId) of the user .
Is necessary do take note of the id because the following routes uses them as parameter
```

## Add a Game to your Personal Collection:

```bash
Do a POST on the Route "/usergames/:userId"

body:{
    gameId: "A number that is the id of the game on the list of all games"
}

The gameId you can get on list of all games.

This will return the id (userGamesId) of the game in your personal collection.
Is necessary do take note of this id because the following routes requires.
```

## Get the list Games in your personal collection:

```bash
Do a GET on the route "/usergames/:userId"
```

## Add or Update a Rating, a Review or Both to a game in your collection:

```bash
Do a POST on the route "/usergames/reviews/:userId"

body:{
  userGamesId: "A number that is the Id of the game in your personal collection",
  gameId: "A number that is the Id of the game in the library",
  rating: "A number that is the your note for the game, value between 1 and 5",
  review: "A text that is your review for the game",
}

The fields rating and review are optional.

If send only rating you create or update the note you give to the game.

If send only review you create or update the review you give to the game.

If send both you create or update the both the note and the review you give to the game.

```

## Delete a Rating, a Review or Both to a game in your collection:

```bash
Do a DELETE on the route "/usergames/reviews/:userId"

body:{
  userGamesId: "A number that is the Id of the game in your personal collection",
  gameId: "A number that is the Id of the game in the library",
  deleteRating: "A boolean that indicates if is to delete the rating",
  deleteReview: "A boolean that indicates if is to delete the review",
}

The fields deleteRating and deleteReview are optional.

If send only deleteRating you delete the note you give to the game.

If send only deleteReview you delete the review you give to the game.

If send both you delete the both the note and the review you give to the game.
```

## Delete a Game in your collection:

```bash
Do a DELETE on the route "/usergames/:userId"

body:{
  gameId: "A number that is the Id of the game in the library",
}
```

## Future content:

The next thing to do is add a authentication workflow with JWT validation.

And create Roles to the users registered.

A Base Role with access to all described above, but could not add/delete games to the Library.

And a Admin Role with access to all described above and to add/delete games to the Library.
