import './ActorCard.css';
function ActorCard({ actor }) {
    return (
        <div className="actor-card">
            <img src={actor.image} alt={actor.name} className="actor-image" />
            <div className="card-content">
                <h2 className="actor-name">{actor.name}</h2>
                <div className="actor-info">
                    <span>Birth Year: {actor.birth_year}</span>
                    <span>Nationality: {actor.nationality}</span>
                </div>
                <h3 className="movies-title">Most Famous Movies:</h3>
                <ul className="movies-list">
                    {actor.most_famous_movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
                <div className="awards">Awards: {actor.awards}</div>
                <p className="biography">{actor.biography}</p>
                <a href="#" className="view-more">View Details</a>
            </div>
        </div>
    );
}

export default ActorCard;