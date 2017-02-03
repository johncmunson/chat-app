## Chat App

Demo:  
https://johncmunson.github.io/chat-app/

This project is adapted from a chapter in the book Fullstack React, in which you learn the fundamentals of React and Redux by building a chat application.

However, in the book the entire app is essentially built inside of one monolithic file, with little instruction as to how you would actually structure a production quality app powered by Redux.

This project has been refactored in the rails-style, one of several competing theories on how to structure a Redux/React app. There are concerns in the community that this architecture scales poorly, but it is more than adequate for small to medium projects and is the easiest for beginners to learn.

Modifications to the original project include:
- ported the project to a create-react-app foundation
- abstracted selector functions (used by mapStateToProps) to their own file so that knowledge of the state tree is contained within the reducers directory
- removed the 'vendor' directory in favor of NPM modules
- added the ability to add/delete threads
- added "rage-mode" to the text inputs!
- restricted the number of tabs/threads to a max of four and a min of one

Further information regarding Redux architecture:

http://redux.js.org/docs/faq/CodeStructure.html

https://github.com/erikras/ducks-modular-redux

https://medium.com/@scbarrus/the-ducks-file-structure-for-redux-d63c41b7035c#.clknw0y4e

https://www.fullstackreact.com/articles/better-redux-module-management/

https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44#.2arg33yzz

*To-do:*
- *Add an actionConstants directory*
- *Comment the source code*
- *~~Add the ability to add/delete threads~~*
- *Add styled-components, remove semantic-ui*
- *Create a new branch demonstrating ducks architecture*
- *Add a feature that demonstrates doing async stuff with Redux (i.e. redux-thunk)
- *~~Add 'rage-mode' to text inputs~~*
- *~~Link to a working demo~~*
- *Add a backend? Add sockets.io?*
