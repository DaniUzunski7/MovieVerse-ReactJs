import './about.css'

export default function About() {
  return (
      <div className="container">

        <section
          className="hero-section"
          style={{
            backgroundImage: "url('/marvel.jpg')"
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>About MovieVerse</h1>
            <p>
            MovieVerse is your ultimate destination for all cinema things. Stay updated on the latest and greatest content in the entertainment world with an easy-to-use, beautiful platform.
            </p>
            <a href="/movies" className="explore-btn">
              Explore
            </a>
          </div>
        </section>
  
        <section className="about-section">
          <h2>Welcome to MovieVerse!</h2>
          <p>
            At MovieVerse, we are passionate about bringing you the best of entertainment. From the latest blockbusters to hidden gems, we aim to provide a comprehensive platform where movie enthusiasts can discover and explore their favorite content.
          </p>
          <p>
            Whether you're looking for the hottest new releases or timeless classics, MovieVerse has it all. Our platform is designed to offer easy navigation, stunning visuals, and a seamless user experience.
          </p>
        </section>
  
        <section className="team-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeWrxKFS4kocpkdTI-Bx_4NfnoVsT4KddAw&s"
                alt="Daniel Uzunski"
                className="team-member-img"
              />
              <p>Daniel Uzunski</p>
              <span>Lead Developer</span>
            </div>
          </div>
        </section>
      </div>
  )
}
