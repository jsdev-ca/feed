import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchFeed } from './actions';

const Posts = ({ error, feed, fetchFeed, isFetching }) => {
  useEffect(() => {
    if (feed.length) {
      return;
    }

    fetchFeed();
  }, [feed, fetchFeed]);

  if (!isFetching) {
    if (error) {
      // N.B. This requires an ErrorBoundary.
      throw new Error(error);
    }

    return (
      <>
        <h1>
          Posts
        </h1>
        <ul className="list-unstyled">
          {feed.map(({ post }) => {
            const { caption, id, image, username } = post;

            return (
              <li className="pb-3" key={id}>
                <Link
                  aria-label={`View ${username}’s post.`}
                  className="d-inline-block text-decoration-none"
                  to={`/posts/${id}`}
                >
                  <div className="card" style={{ width: '18rem' }}>
                    <figure className="figure">
                      <img
                        alt=""
                        className="figure-img img-fluid"
                        src={image.post}
                        style={{
                          borderTopLeftRadius: '.25rem',
                          borderTopRightRadius: '.25rem'
                        }}
                      />
                      <figcaption className="figure-caption px-2">
                        {caption}
                      </figcaption>
                    </figure>
                    <p className="card-text pb-2 px-2 text-end">
                      {post.username}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }

  return (
    <p>
      Loading...
    </p>
  );
};

const mapStateToProps = ({ feedReducer }) => ({
  ...feedReducer
});

const mapDispatchToProps = dispatch => ({
  fetchFeed: () => dispatch(fetchFeed())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
