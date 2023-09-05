import { useMatches } from 'react-router-dom';

export default function BreadCrumb({ no, title }) {
  const matches = useMatches();
  const isFirstPage =
    window.location.pathname === `/cart/payment/${matches[0].params.id}` && no === '1';
  const pageCriteria = {
    isSecondPage:
      window.location.pathname === `/cart/payment-detail/${matches[0].params.id}` && no === '2',
    isNo1: no === '1',
  };
  const isSecondPage = pageCriteria.isSecondPage || pageCriteria.isNo1;
  let background = isFirstPage || isSecondPage ? '#0D28A6' : '#fff';
  let color = isFirstPage || isSecondPage ? '#fff' : '#000';

  return (
    <>
      <div
        className="text-center pb-3 me-2"
        style={{
          fontSize: '12px',
          color,
          background,
          borderRadius: '100%',
          border: '2px solid #0D28A6',
          width: '15px',
          height: '15px',
        }}
      >
        {window.location.pathname === `/cart/payment-detail/${matches[0].params.id}` && no === '1'
          ? '✔'
          : no}
      </div>
      <p className="my-0" style={{ fontFamily: 'arial', fontSize: '12px' }}>
        {title}
      </p>
    </>
  );
}
