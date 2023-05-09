import React from "react";

function Reviews({ reviews }) {
  return (
    <section>
      <div className="row text-center d-flex align-items-center container mx-auto px-2">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="col-md-4 col-sm-6 col-xs-12 mb-5 mb-md-0 d-flex align-items-center"
          >
            <div
              className="card testimonial-card"
              style={{ minWidth: "300px", maxWidth: "400px" }}
            >
              <div
                className="card-up"
                style={{ backgroundColor: review.color }}
              ></div>
              <div className="avatar mx-auto bg-white">
                <img
                  src={review.avatar}
                  className="rounded-circle img-fluid"
                  alt={review.author}
                />
              </div>
              <div className="card-body">
                <h4 className="mb-4">{review.author}</h4>
                <hr />
                <p className="text-dark mt-4">
                  <i className="fas fa-quote-left pe-2"></i>
                  {review.comment}
                </p>
                <p className="text-dark mt-4">
                  <i className="fas fa-star pe-2"></i>
                  {review.rating}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
