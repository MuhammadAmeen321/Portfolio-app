function Footer({ profile }) {
  return (
    <footer className="footer">
      <p>Email: {profile.email}</p>
      <p>
        LinkedIn: <a href={profile.linkedinUrl}>Profile Link</a>
      </p>
      <p>(c) {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
