import Tour from './Tour';

function Tours({ tours, removeTours }) {
  return (
    <section>
      <h2 className="title"> our tours</h2>
      <div className="title-underline"></div>

      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
