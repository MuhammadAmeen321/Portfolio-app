function HeroSection({ profile, profileImage }) {
  return (
    <header className="hero" id="home">
      <div className="hero__container">
        <div className="hero__photo-wrap">
          <img className="hero__photo" src={profileImage} alt={`Portrait of ${profile.name}`} />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">Data Scientist Portfolio</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero__summary">{profile.summary}</p>
          <div className="hero__meta">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div className="hero__stats">
            {profile.stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
