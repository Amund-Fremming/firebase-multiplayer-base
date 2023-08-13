# Multiplayer base with firebase
- Simple logic for a multiplayer game
- Handles hosting / joining games and ready up logic for gamelobby
- Missing a way to handle players that dissconect or are inactive
- Needs a firebase project to link to firestore in the firebase.js file
- Add your firebase config in firebase.js file

## How to use gitpush.sh
list all commands
```
sh gitpush.sh help
```
Push to git, create a build and deploy to firebase, this requires that you have initialized your firebase project first.
```
sh gitpush <commit msg> prod
```
