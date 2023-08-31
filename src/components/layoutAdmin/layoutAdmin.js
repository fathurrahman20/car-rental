import Admin from 'src/module/admin';

export default function LayoutAdmin({ children }) {
  return (
    <>
      <Admin />
      {children}
    </>
  );
}
