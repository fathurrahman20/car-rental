export default function DetailOrderBody({ title, value }) {
  return (
    <div className="detail-order-col-body">
      <p style={{ fontSize: '14px' }}>{title}</p>
      <p className="text-muted" style={{ fontSize: '14px' }}>
        {value}
      </p>
    </div>
  );
}
