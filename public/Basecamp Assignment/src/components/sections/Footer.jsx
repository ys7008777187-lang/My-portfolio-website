import './Footer.css';

const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'What\'s New', 'Integrations', 'Mobile App'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'Guides', 'Webinars', 'API Docs', 'Community'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Accessibility', 'GDPR'],
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon" aria-hidden="true">
                <svg viewBox="0 0 25 21" width="20" height="17">
                  <path clipRule="evenodd" d="m12.5005 0c6.351 0 11.4126 7.57865 12.4363 14.5294.0565.3833.0847.575.0439.9423-.025.2243-.1727.7339-.2715.9368-.1619.3322-.2503.4349-.4271.6404-2.4491 2.8469-7.0342 3.9472-11.7816 3.9472-4.74773 0-9.3327-1.1003-11.782334-3.947-.176904-.2056-.265361-.3084-.427278-.6406-.098883-.2029-.2465927-.7126-.2715448-.9369-.0408566-.3674-.01261377-.5591.0438578-.9425 1.023859-6.95069 6.085899-14.52909515 12.437299-14.5291zm3.2375 4.98947c-1.0986 0-4.1697 5.44163-5.5786 5.44163-1.40909 0-2.14161-2.47648-3.87412-2.46686-1.71536.0098-3.48364 3.82686-4.32163 5.91136-.23503.5846-.35255.8769-.23729 1.4219.11527.545.27645.7017.59881 1.0153 1.24246 1.2084 4.09474 2.966 10.17513 2.966 6.0897 0 8.9411-1.7629 10.1803-2.9715.319-.3112.4786-.4667.5902-1.021s-.0076-.8358-.2459-1.3989c-.538-1.2713-1.4909-3.2521-2.8065-4.95014-1.4862-1.91791-3.3811-3.94777-4.4804-3.94779z" fill="white" fillRule="evenodd"/>
                </svg>
              </span>
              Basecamp
            </div>
            <p className="footer__tagline">
              Project management and team communication — all in one place, refreshingly
              simple.
            </p>
            <div className="footer__social" aria-label="Social media links">
              <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">in</a>
              <a href="#" className="footer__social-link" aria-label="YouTube">▶</a>
              <a href="#" className="footer__social-link" aria-label="GitHub">⌘</a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={`${col.title} links`}>
              <div className="footer__column-title">{col.title}</div>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer__link">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} Basecamp. All rights reserved.</span>
          <div className="footer__bottom-links">
            <a href="#" className="footer__link">Status</a>
            <a href="#" className="footer__link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
