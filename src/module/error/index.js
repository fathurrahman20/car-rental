import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-container">
      <section className="text-center">
        <h1 className="error-title">404</h1>
        <p className="error-description">Ooops!!! The page you are looking for is not found</p>
        <a className="error-btn" onClick={() => navigate('/')}>
          Back to home
        </a>
      </section>
    </div>
  );
}
