import './Section.css';

export function Section({ head, subhead, children }) {
  return (
    <>
      {head ? <><h2 className="size subheader">{head}</h2><div className="size underline"></div></> : null}
      {subhead ? <div className='subheader'>{subhead}</div> : null}
      {children}
    </>
  );
}