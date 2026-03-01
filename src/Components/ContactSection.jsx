function ContactSection({ contact }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__left">
        <h3>{contact.heading}</h3>
        <p>{contact.description}</p>

        <h4>{contact.connectHeading}</h4>
        <div className="contact-links">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__row">
          {contact.form.topRowFields.map((field) => (
            <label key={field.name}>
              {field.label}
              <input type={field.type} name={field.name} placeholder={field.placeholder} />
            </label>
          ))}
        </div>

        {contact.form.mainFields.map((field) => (
          <label key={field.name}>
            {field.label}
            {field.type === "textarea" ? (
              <textarea rows={field.rows} name={field.name} placeholder={field.placeholder} />
            ) : (
              <input type={field.type} name={field.name} placeholder={field.placeholder} />
            )}
          </label>
        ))}

        <button type="submit">{contact.form.submitText}</button>
      </form>
    </section>
  );
}

export default ContactSection;
