const BASEURL = "http://localhost:1337/api";

const makeHeaders = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  //  console.log(headers);
  return headers;
};

export const apiCall = async (endpoint, defaultOptions = {}) => {
  const { token, method, body } = defaultOptions;

  console.log("defaultOptions", defaultOptions);
  console.log("endpoint", endpoint);

  const options = {
    mode: "cors",
  };
  options.headers = makeHeaders(token);
  if (method) {
    options.method = method;
  }
  if (body) {
    options.body = JSON.stringify(body);
  }
  console.log("options", options);
  console.log("baseurl", BASEURL);
  const response = await fetch(`${BASEURL}/${endpoint}`, options);
  console.log("response apiCall", response, options);
  const result = await response.json();
  console.log("result", result);
  return result;
};

export const fetchPosts = async (token = null) => {
  const result = await apiCall("posts", { token: token, method: "GET" });
  if (result) {
    return {
      error: null,
      posts: result,
    };
  } else {
    return {
      error: result.error,
      posts: [],
    };
  }
};
export const registerUser = async (username, password) => {
  console.log("registerUser", username, password);
  try {
    const results = await apiCall("users/register", {
      token: null,
      method: "POST",
      body: { username: username, password: password },
    });
    if (results) {
      return results;
    } else {
      console.log("no success in registerUser()");
    }
  } catch (error) {
    console.error(error);
  }
};

export const logInUser = async (username, password) => {
  console.log("hi");
  const { user, message, token, error } = await apiCall("users/login", {
    token: null,
    method: "Post",
    body: { username: username, password: password },
  });

  if (!error) {
    console.log(message, user);
    return {
      error: null,
      token: token,
      message: message,
      user: user,
    };
  } else {
    alert("Incorrect User Credentials");
    console.log("no success in logInUser", error);
    return {
      error: error.message,
      token: null,
      message: null,
      user: null,
    };
  }
};

export const changePost = async (
  tokenString,
  username,
  postId,
  tweet,
  imageUrl
) => {
  console.log("postIdAPI", postId, tokenString, tweet);
  const result = await apiCall(`posts/${postId}`, {
    token: tokenString,
    method: "PATCH",
    body: {
      username: username,
      tweet: tweet,
      imageUrl: imageUrl,
    },
  });
  console.log("result", result);
  if (!result.error) {
    console.log(result.message, result.post);
    return {
      error: null,
      token: null,
      post: result.post,
    };
  } else {
    alert("Something isn't right");
    return {
      token: null,
      message: null,
      post: null,
    };
  }
};

export const createPost = async (
  username,
  tweet,
  isVerified,
  imageUrl,
  profileImage
) => {
  const { post, message, token, error } = await apiCall("posts", {
    token: null,
    method: "Post",
    body: {
      username: username,
      tweet: tweet,
      isVerified: isVerified,
      imageUrl: imageUrl,
      profileImage: profileImage,
    },
  });

  if (!error) {
    console.log(message, post);
    return {
      error: null,
      token: null,
      message: message,
      post: post,
    };
  } else {
    alert("Something isn't right");
    console.log("no success in addPost", error);
    return {
      error: error.message,
      token: null,
      message: null,
      post: null,
    };
  }
};
export const deletePost = async (currentPostId) => {
  const result = await apiCall(`posts/${currentPostId}`, {
    token: null,
    method: "DELETE",
    body: null,
  });
  console.log("result", result);
  if (!result.error) {
    console.log(result.message, result.post);
    return {
      error: null,
      token: null,
    };
  } else {
    alert("Something isn't right");
    // console.log("no success in destroyPost", error);
    return {
      // error: error.message,
      token: null,
      message: null,
    };
  }
};
