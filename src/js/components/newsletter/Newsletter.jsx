import React from 'react';

import Swal from 'sweetalert2';

const Newsletter = () => {
  const bind = (event) => {
    event.preventDefault();
    event.target.reset();
    Swal.fire({
      icon: 'success',
      text: 'E-mail cadastrado com sucesso!'
    })
  }

  return (
    <form id="newsletter" className="newsletter" onSubmit={(event) => bind(event)}>
      <input type="email" placeholder="Digite seu e-mail" className="text text--regular text--white" required />
      <button type="submit">
        <span className="text text--regular text--green text--uppercase">Cadastrar</span>
      </button>
    </form>
  );
}

export default Newsletter;