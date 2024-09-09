/*
import React from 'react';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Crie seu Cadastro</h1>
      <p>Para acessar os serviços...</p>
      
      <form>
        <fieldset>
          <legend>Informações Pessoais Básicas</legend>
          <label>Nome:</label>
          <input type="text" placeholder="Nome" />
          
          <label>Sobrenome:</label>
          <input type="text" placeholder="Sobrenome" />
          
          <label>Data de Nascimento:</label>
          <input type="date" />
          
          <label>Gênero:</label>
          <select>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
          
          <label>Estado Civil:</label>
          <select>
            <option>Casado</option>
            <option>Solteiro</option>
            <option>Outros</option>
          </select>
          
          <label>CPF ou RG:</label>
          <input type="text" placeholder="Nº CPF ou RG" />
        </fieldset>
        
        <fieldset>
          <legend>Informações de Contato</legend>
          <label>Email:</label>
          <input type="email" placeholder="Informe um válido" />
          
          <label>Nº de Telefone:</label>
          <input type="tel" placeholder="Telefone" />
          
          <label>Endereço Residencial:</label>
          <input type="text" placeholder="Endereço" />
        </fieldset>
        
        <fieldset>
          <legend>Informações de Acesso</legend>
          <label>Nome de Usuário:</label>
          <input type="text" placeholder="Usuário" />
          
          <label>Senha:</label>
          <input type="password" placeholder="Senha" />
          
          <label>Confirme a senha:</label>
          <input type="password" placeholder="Repita" />
        </fieldset>
        
        <fieldset>
          <legend>Informações Médicas (opcional)</legend>
          <label>Número de Identificação Médica:</label>
          <input type="text" />
          
          <label>Condições Médicas Pré-existentes:</label>
          <textarea></textarea>
          
          <label>Alergias Conhecidas:</label>
          <textarea></textarea>
          
          <label>Medicamentos em Uso:</label>
          <textarea></textarea>
        </fieldset>
        
        <div className="checkbox-container">
          <label>
            <input type="checkbox" /> Eu li e concordo com os Termos de Uso e a Política de Privacidade
          </label>
          <label>
            <input type="checkbox" /> Eu consinto com o tratamento dos meus dados pessoais para fins de uso deste serviço
          </label>
        </div>
        
        <div className="buttons-container">
          <button type="reset">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
*/

import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    data_nascimento: '',
    genero: '',
    estado_civil: '',
    cpf_rg: '',
    email: '',
    telefone: '',
    endereco: '',
    nome_usuario: '',
    senha: '',
    identificacao_medica: '',
    condicoes_medicas: '',
    alergias: '',
    medicamentos: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result);
      alert(result.message);
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className="container">
      <h1>Crie seu Cadastro</h1>
      <p>Para acessar os serviços...</p>
      
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Informações Pessoais Básicas</legend>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" />
          
          <label>Sobrenome:</label>
          <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} placeholder="Sobrenome" />
          
          <label>Data de Nascimento:</label>
          <input type="date" name="data_nascimento" value={formData.data_nascimento} onChange={handleChange} />
          
          <label>Gênero:</label>
          <select name="genero" value={formData.genero} onChange={handleChange}>
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outros</option>
          </select>
          
          <label>Estado Civil:</label>
          <select name="estado_civil" value={formData.estado_civil} onChange={handleChange}>
            <option>Casado</option>
            <option>Solteiro</option>
            <option>Outros</option>
          </select>
          
          <label>CPF ou RG:</label>
          <input type="text" name="cpf_rg" value={formData.cpf_rg} onChange={handleChange} placeholder="Nº CPF ou RG" />
        </fieldset>
        
        <fieldset>
          <legend>Informações de Contato</legend>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Informe um válido" />
          
          <label>Nº de Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" />
          
          <label>Endereço Residencial:</label>
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço" />
        </fieldset>
        
        <fieldset>
          <legend>Informações de Acesso</legend>
          <label>Nome de Usuário:</label>
          <input type="text" name="nome_usuario" value={formData.nome_usuario} onChange={handleChange} placeholder="Usuário" />
          
          <label>Senha:</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Senha" />
          
          <label>Confirme a senha:</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} placeholder="Repita" />
        </fieldset>
        
        <fieldset>
          <legend>Informações Médicas (opcional)</legend>
          <label>Número de Identificação Médica:</label>
          <input type="text" name="identificacao_medica" value={formData.identificacao_medica} onChange={handleChange} />
          
          <label>Condições Médicas Pré-existentes:</label>
          <textarea name="condicoes_medicas" value={formData.condicoes_medicas} onChange={handleChange}></textarea>
          
          <label>Alergias Conhecidas:</label>
          <textarea name="alergias" value={formData.alergias} onChange={handleChange}></textarea>
          
          <label>Medicamentos em Uso:</label>
          <textarea name="medicamentos" value={formData.medicamentos} onChange={handleChange}></textarea>
        </fieldset>
        
        <div className="checkbox-container">
          <label>
            <input type="checkbox" /> Eu li e concordo com os Termos de Uso e a Política de Privacidade
          </label>
          <label>
            <input type="checkbox" /> Eu consinto com o tratamento dos meus dados pessoais para fins de uso deste serviço
          </label>
        </div>
        
        <div className="button-container">
          <button type="button">Limpar</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
