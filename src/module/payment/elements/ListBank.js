export default function ListBank(props) {
  const { bank, paymentMethod, listBank, setListBank } = props;

  function handleClick() {
    if (bank === 'BCA') {
      setListBank(() => ({
        bca: true,
        bni: false,
        mandiri: false,
      }));
    }
    if (bank === 'BNI') {
      setListBank(() => ({
        bca: false,
        bni: true,
        mandiri: false,
      }));
    }
    if (bank === 'Mandiri') {
      setListBank(() => ({
        bca: false,
        bni: false,
        mandiri: true,
      }));
    }
  }

  return (
    <div
      className="list-bank d-flex justify-content-between"
      style={{ gap: '16px', cursor: 'pointer' }}
      onClick={handleClick}
    >
      <div className="list-bank-name d-flex align-items-center gap-4">
        <p
          style={{
            padding: '6px 18px',
            border: '1px solid #D0D0D0',
            borderRadius: '4px',
          }}
        >
          {bank}
        </p>
        <p>{paymentMethod}</p>
      </div>
      {bank === 'BCA' && listBank.bca ? (
        <img src="/img/check.png" className="me-5 mt-2" alt="checklist" />
      ) : bank === 'BNI' && listBank.bni ? (
        <img src="/img/check.png" className="me-5 mt-2" alt="checklist" />
      ) : bank === 'Mandiri' && listBank.mandiri ? (
        <img src="/img/check.png" className="me-5 mt-2" alt="checklist" />
      ) : (
        ''
      )}
    </div>
  );
}
