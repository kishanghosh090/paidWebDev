function fetchPostData() {
  return new Promise((relove) => {
    setTimeout(() => {
      relove("post data fetched !!");
    }, 3000);
  });
}

function fetchCommentData() {
  return new Promise((relove) => {
    setTimeout(() => {
      relove("comment data fetched !!");
    }, 5000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data");
    // const blogData = await fetchPostData();
    // console.log(`post data: ${blogData}`);
    // const commentData = await fetchCommentData();
    // console.log(`comment data: ${commentData}`);

    const [postdata, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
  } catch (error) {
    console.log("ERROR:", error);
  }
}
getBlogData();
