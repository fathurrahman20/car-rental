import LayoutAdmin from 'src/components/layoutAdmin/layoutAdmin';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import ChartSection from './components/ChartSection';
import ListOrder from './components/ListOrder';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    if (!tokenAdmin) {
      navigate('/admin/login');
    }
  }, []);

  return (
    <LayoutAdmin>
      <div style={{ background: '#f4f5f7' }}>
        <ChartSection />
        <ListOrder />
      </div>
    </LayoutAdmin>
  );
}
