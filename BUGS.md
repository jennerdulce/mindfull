# BUGS

## Jul 12 23

### Displaying a single post for DisplayPost
#### Current Functionality
- User goes to journals which dispatches an action and retrieves all of the users posts
    - At this point the global state has been changed and the value of `posts` is all of the users posts
- Click a post will filter out through this global state and display the posts properties
- This is bad because if the user refreshes the page, the global state of `posts` returns to an empty array and the post is no longer shown
- This can be fixed by dispatching an action to retrieve all of the user posts again

#### Fix
- When the user clicks a post, I want to send that specific post id as a query parameter and dispatch an action to retrieve that single post
- Even if the user refreshes the page, it will be okay because the action to retrieve the post will be dispatched again

#### Problem
- I found that you are unable to extract query that has been directly added into the url of a GET request
```js
router.get('/post/:id', protect, getPost)

// req.params.id does not work
```
- Unable to find fix
- [Possible Solution](https://stackoverflow.com/questions/48261227/use-axios-get-with-params-and-config-together)

### Trying to delete a post
#### Problem
- Clicking `Forget` I get an error of the route not existing
- Which is correct because the url should be `http://localhost:3000/api/posts/64ae4eaef79a183220021634`
```js
DELETE http://localhost:3000/post/api/posts/64ae4eaef79a183220021634 404 (Not Found)
```
- I do not know why it is adding the extra post after 3000