import { useState } from 'react';

function Tour({ id, image, info, name, price, removeTours }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => setReadMore(!readMore)}
            type="button"
            className="info-btn"
          >
            {readMore ? ' show less' : 'show more'}
          </button>
        </p>
        <button
          onClick={() => removeTours(id)}
          type="button"
          className="btn btn-block delete-btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
