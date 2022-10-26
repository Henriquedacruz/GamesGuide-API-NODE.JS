import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ModalUpdateGender from '../ModalEditGender';
import ModalDeleteGender from '../ModalDeleteGender';
import './style.css'
import '../../App.css'


function BasicExample() {

  const [gender, setGender] = useState([]);

  const [loadModalUpdate, setModalUpdate] = useState(false);
  const [genderItem, setGenderItem] = useState('');
  const [loadModalDelete, setModalDelete] = useState(false);

  function showUpdateGender(gender) {
    setModalUpdate(true);
    setGenderItem(gender);
  }

  function showDeleteGender(gender) {
    setModalDelete(true);
    setGenderItem(gender);

  }

  useEffect(() => {

    async function getGender() {
      const { data } = await axios.get(' http://localhost:3333/gender ');
      setGender(data);
    }
    getGender();
  }, []);

  return (
    <>

      {loadModalUpdate && <ModalUpdateGender isOpen={loadModalUpdate} dataGender={genderItem} />}
      {loadModalDelete && <ModalDeleteGender isOpen={loadModalDelete} dataGender={genderItem} />}


      <div className='tabela'>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>id</th>
            <th>Genero</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody >
          {
            gender.map((gende) => (
              <tr key={gende.id_genero}>
                <td>{gende.id_genero}</td>
                <td>{gende.genero}</td>
                <td>
                  <Button
                    onClick={() => showUpdateGender(gende)}
                  >Editar
                  </Button>
                </td>

                {/* Botao de excluir */}
                <td>
                  <Button
                    variant="danger"
                    onClick={() => showDeleteGender(gende)}
                  >Excluir
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      </div>
    </>
  );
}

export default BasicExample;