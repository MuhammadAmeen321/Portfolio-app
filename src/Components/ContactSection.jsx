function ContactSection({ profile, contact }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__left">
        <h3>{contact.heading}</h3>
        <p>{contact.description}</p>

        <h4>Connect With Me</h4>
        <div className="contact-links">
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          <label>
            Name
            <input type="text" placeholder="John Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="john@example.com" />
          </label>
        </div>
        <label>
          Subject
          <input type="text" placeholder="Project Inquiry" />
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Tell me about your project..." />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default ContactSection;
