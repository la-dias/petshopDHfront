import axios from 'axios'
import { useEffect, useState } from 'react'
import './style.css'
const Pets = () => {
    const [cuidadores, setCuidadores] = useState([])
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [raca, setRaca] = useState('')
    const [especie, setEspecie] = useState('')
    const [sexo, setSexo] = useState('')
    const [cuidador, setCuidador] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3000/cuidador')
            .then(res => setCuidadores(res.data))
            .catch(err => console.log(err))
    }, [])

    const sendPet = async () => {
        const pet = {nome, idade, raca, especie, sexo, fk_cuidador: cuidador}
        const respostaSendPet = await axios.post('http://localhost:3000/bixo', pet)
            .then(res => res.data)
            .catch(err => err)
        alert(JSON.stringify(respostaSendPet))
    }

    return(
        <div className="pets-container">
            <div className="pets-register">
                <h2>Cadastro de Pet</h2>
                <div>
                  <div className="form-group">
                  <label htmlFor="pet-name">Nome do bichinho: </label>
                  <input type="text" id='pet-name' value={nome} onChange={event => setNome(event.target.value)} />
                  </div>
                  <div className="form-group">
                  <label htmlFor="pet-idade">Idade: </label>
                  <input type="text" id='pet-idade' value={idade} onChange={event => setIdade(event.target.value)} />
                  </div>
                  <div className="form-group">
                  <label htmlFor="pet-raca">Raça: </label>
                  <input type="text" id='pet-raca' value={raca} onChange={event => setRaca(event.target.value)} />
                  </div>
                  <div className="form-group">
                  <label htmlFor="pet-especie">Especie: </label>
                  <input type="text" id='pet-especie' value={especie} onChange={event => setEspecie(event.target.value)} />
                  </div>
                  <div className="form-group">
                  <label htmlFor="pet-sexo">Sexo: </label>
                  <input type="text" id='pet-sexo' value={sexo} onChange={event => setSexo(event.target.value)} />
                  </div>
                  <div className="form-group">
                  <label>Cuidador: </label>
                  <select name="cuidador" id="cuidador" onChange={event => setCuidador(event.target.value)}>
                      <option disabled>Selecione um cuidador</option>
                      {cuidadores.map(cuidador => <option value={cuidador.id_cuidador}>{cuidador.nome}</option>)}
                  </select>
                  </div>
                  <button className='save-btn' onClick={sendPet}>Salvar Pet!</button>
                </div>
            </div>
            <div className="pets-list">
            <h2>Listagem de Pet</h2>
            <table>
            <thead>
                <th>Nome</th>
                <th>Idade</th>
                <th>Raça</th>
                <th>Especie</th>
                <th>Sexo</th>
            </thead>
            </table>
        </div>
      </div>
    )
}

export default Pets