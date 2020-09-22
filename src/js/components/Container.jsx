import React from 'react'


const Container = ({children, title}) => {
  document.title = title;
  return (
    <>
      <main className="container">
        {children}
      </main>
    </>
  );
}

export default Container;