// yarn add react-modal

import React, { useState } from "react";
import Modal from 'react-modal';
import axios from 'axios'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



 function Index({ isOpen, dataGender }) {
  const [modalIsOpen, setIsOpen] = useState(isOpen);
  const [txtGender, setTxtGender] = useState(dataGender.genero);
  console.log(txtGender)



  function closeModal() {
    setIsOpen(false)
  }

  async function handleSubmit(e) { //e visualiza o elemento que disparou a finção
    e.preventDefault(); // evita que o formulario envie o dado e recarregue a pagina,

    const genderData = {
      "genero":txtGender,
      "id_genero":dataGender.id_genero,
    }

    const {data} = await axios.put('http://localhost:3333/gender', genderData);
    alert(data.message);
    window.location.reload(true);

  }

  return (
    <>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <h2>atualização de Generos</h2>
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    placeholder="Genero"
                    id="txtGender"
                    type="text"
                    className="validate"
                    value={txtGender}
                    onChange={({ target }) => setTxtGender
                      (target.value)}
                  />
                </div>
              </div>
              <button className="btn waves-effect waves-light"
                type="submit"
                name="action"
                onClick={handleSubmit}
              >Atualizar</button>
              <button
                className="btn modal-trigger"
                onClick={() => { window.location.reload(true) }}
              >Cancelar</button>
            </form>
          </div>
        </Modal>
      </div>
    </>
  )
}

export default Index