import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
// So the idea is basically to remove all the state

// and state updating logic, all from this component

// and place it into our own custom Context Provider component.

// So we will then have all the state

// and we will then provide that

// using context into our application.

// So it's basically just a refactoring

// of what we already have

// but the functionality will stay exactly the same

// and we still will have all three parts.

// So creating the context, then providing a value,

// and then reading it.

// We will just have these different parts in different files.

// Okay.
//1 create a context
const PostContext = createContext(); //createContex will return a context
//variable name starts with uppercase letter because its a component
function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => Array.from({ length: 30 }, () => createRandomPost()));
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  // it's actually very important to understand

  // that you only need to optimize your context

  // in case that three things are true at the same time.

  // So first of all, the state

  // in the context needs to change all the time.

  // Second, the context has many consumers

  // and third, and probably most importantly

  // the app is actually slow and laggy.

  // So only if all of these are true

  // it is time to optimize context.

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  const value = useMemo(
    () => ({
      posts: searchedPosts,
      onClearPosts: handleClearPosts,
      onAddPost: handleAddPost,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
    }),
    [searchQuery, searchedPosts]
  );
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined) throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
