import React, { Component } from 'react';
import "./estilos.css";
import { ReactComponent as DeleteSVG }  from '../../assets/img/delete.svg'; /* <-- Plugin SVGR do React */

class CardNota extends Component {

    deletar() {
        const index = this.props.index;
        this.props.apagarNota(index);
    }

    render() { 
        return ( 
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={ this.deletar.bind(this) } />
                    <h4>{this.props.categoria}</h4>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    }
}
 
export default CardNota;