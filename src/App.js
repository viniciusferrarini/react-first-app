import React, { Component } from 'react';
import ListaDeCategorias from './components/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import './assets/app.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {

	constructor() {
		super();
		this.categorias = new Categorias();
		this.notas = new ArrayDeNotas();
	}

	render() {
		return ( 
			<section className="conteudo">
				<FormularioCadastro
					categorias={this.categorias}
					criarNota={this.notas.adicionarNota.bind(this.notas)} />
				<main className="conteudo-principal">
					<ListaDeCategorias 
						categorias={this.categorias}
						adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)} />					
					<ListaDeNotas 
						notas={this.notas} 
						apagarNota={this.notas.apagarNota.bind(this.notas)} />
				</main>
			</section>
		);
	}
}

//react - lib do facebook
//React - todo ecosistema do react
export default App;