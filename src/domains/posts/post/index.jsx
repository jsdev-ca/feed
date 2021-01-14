import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const Post = ({ feed }) => {
  const { id } = useParams();
  const { comment, post } = feed.find(({ post }) => post.id === id) || {};

  if (!post) {
    return (
      <p>
        Oops! Something went wrong.
      </p>
    );
  }

  const { caption, image, stats, username } = post;
  const { follow: follows, star: stars, views } = stats;

  return (
    <section>
      <Link aria-label="Return to the Posts page." to='/posts'>
        &#8592; Back
      </Link>
      <h1 className="text-muted">
        Post
      </h1>
      <div className="d-flex">
        <div className="text-center">
          <img
            alt={`Profile image of the author of this post, ${username}.`}
            className="img-thumbnail rounded-circle"
            src={image.profile}
          />
          {username}
        </div>
        <div className="ps-3">
          <figure className="figure">
            <img
              alt=""
              className="figure-img img-fluid"
              src={image.post}
            />
            <figcaption className="figure-caption">
              {caption}
            </figcaption>
          </figure>
          <p className="text-muted">
            <small>
              <span className="me-2">Views: {views}</span>
              <span className="me-2">Follows: {follows}</span>
              <span>Stars: {stars}</span>
            </small>
          </p>
        </div>
      </div>

      {comment && (() => {
        const { comments, image, username } = comment;

        return (
          <>
            <h2 className="text-muted">
              Comments
            </h2>
            {comments.map(({ id, text }) => (
              <div className="border mb-3 px-3 py-2 rounded" key={id}>
                <p>
                  {text}
                </p>
                <div className="text-end">
                  <img
                    alt={`Profile image of the commenter, ${username}.`}
                    className="img-thumbnail me-1 rounded-circle"
                    src={image.profile}
                    style={{ padding: '.125rem', width: '25px' }}
                  />
                  {username}
                </div>
              </div>
            ))}
          </>
        );
      })()}
    </section>
  );
}

const mapStateToProps = ({ feedReducer }) => ({
  feed: feedReducer.feed
});

export default connect(mapStateToProps)(Post);
