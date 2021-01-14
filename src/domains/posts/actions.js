const FETCH_FEED_REQUEST = 'FETCH_FEED_REQUEST';
const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE';

const requestFeed = () => ({
  type: FETCH_FEED_REQUEST
});

const setFeed = feed => ({
  type: FETCH_FEED_SUCCESS,
  feed
});

const handleError = error => ({
  type: FETCH_FEED_FAILURE,
  error
});

const fetchFeed = () => async dispatch => {
  dispatch(requestFeed());

  const response = await fetch('https://staging-app.figure1.com/mock/feed');

  if (!response.ok) {
    dispatch(handleError(response.statusText));

    return;
  }

  const json = await response.json();
  const feed = json.feed
    .filter(item => item.type === 'post')
    .map(post => {
      const comment = json.feed.find(({ postID }) => postID === post.id);

      return comment ? { comment, post } : { post };
    });

  dispatch(setFeed(feed));
};

export {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
  fetchFeed
};
