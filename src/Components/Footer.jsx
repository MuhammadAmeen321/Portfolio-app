function Footer({ profile, footer }) {
  return (
    <footer className="footer">
      <p>
        {footer.emailLabel}: {profile.email}
      </p>
      <p>
        {footer.linkedinLabel}: <a href={profile.linkedinUrl}>{footer.linkedinLinkText}</a>
      </p>
      <p>
        {footer.copyrightPrefix} {new Date().getFullYear()} {profile.name}. {footer.rightsText}
      </p>
    </footer>
  );
}

export default Footer;
