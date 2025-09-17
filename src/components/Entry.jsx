import marker from "../assets/images/marker.png";

export default function Entry({ entry }) {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          className="main-image"
          src={`${import.meta.env.BASE_URL}${entry.img.src}`}
          alt={entry.img.alt}
        />
      </div>

      <div className="info-container">
        <img className="marker" src={marker} alt="marker" />
        <span className="country">{entry.country}</span>
        <a href={entry.googleMapsLink} target="_blank" rel="noreferrer">
          View on Google Maps
        </a>
        <h2 className="entry-title">{entry.title}</h2>
        <p className="trip-dates">{entry.dates}</p>
        <p className="entry-text">{entry.text}</p>
      </div>
    </article>
  );
}
