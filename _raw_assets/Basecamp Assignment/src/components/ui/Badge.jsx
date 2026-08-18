import './Badge.css';

export default function Badge({ children, variant = 'success', dot = false, className = '' }) {
  return (
    <span className={`badge badge--${variant} ${className}`}>
      {dot && <span className="badge__dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
