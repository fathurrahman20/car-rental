import DetailOrderBody from '../elements/DetailOrderBody';

export default function PaymentTopContent({ dataOrder }) {
  const startRent = new Date(dataOrder?.start_rent_at.slice(0, 10)).toDateString();
  const finishRent = new Date(dataOrder?.finish_rent_at.slice(0, 10)).toDateString();

  const mappingCategory = value => {
    switch (value) {
      case 'small':
        return '2 - 4 orang';
      case 'medium':
        return '4 - 6 orang';
      case 'large':
        return '6 - 8 orang';
      default:
        break;
    }
  };

  return (
    <div
      className="detail-order-col mx-auto py-3 position-absolute start-50 translate-middle-x"
      style={{ width: '1042px', top: '185px' }}
    >
      <p className="detail-order-title fw-bold text-capitalize">detail pesananmu</p>
      <div className="detail-order-col-body d-flex flex-wrap justify-content-md-around">
        <DetailOrderBody title="Nama/Tipe Mobil" value={dataOrder?.Car?.name} />
        <DetailOrderBody
          title="Kategori"
          value={mappingCategory(dataOrder?.Car?.category.toLowerCase())}
        />
        <DetailOrderBody
          title="Tanggal Mulai Sewa"
          value={startRent.slice(7, 10) + startRent.slice(3, 7) + startRent.slice(10, 15)}
        />
        <DetailOrderBody
          title="Tanggal Akhir Sewa"
          value={finishRent.slice(7, 10) + finishRent.slice(3, 7) + finishRent.slice(10, 15)}
        />
      </div>
    </div>
  );
}
