import React, { Component } from 'react'  
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

export class BootstrapCarousel extends Component {  
        render() { 
            return (
                <div style={{ display: 'block', maxWidth: '800px', margin: 'auto' }}>
                        <Carousel nextLabel={''} prevLabel={''}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Ivan"
                                />
                                <Carousel.Caption>
                                    <h3>Ivan</h3>
                                    <p>Tanti Auguri e Benvenuta Sofia</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Lavinia"
                                />
                                <Carousel.Caption>
                                    <h3>Lavinia</h3>
                                    <p>Benvenuta Sofia ❤️</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Maurizio"
                                />
                                <Carousel.Caption>
                                    <h3>Maurizio</h3>
                                    <p>Auguri Nenno, un figlio non è servito a farti mettere un po' di sale in zucca, magari adesso. . . no scusa, lo so, rimarrai scemo, non c'è speranza. Tanti auguri a te e a chi ti sopporta</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Giulia"
                                />
                                <Carousel.Caption>
                                    <h3>Giulia</h3>
                                    <p>Benvenuta Sofia, tantissimi auguri a tutta la famiglia Mura</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Marco Vacca"
                                />
                                <Carousel.Caption>
                                    <h3>Marco Vacca</h3>
                                    <p>Benvenuta Sofia!!! Auguroni</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Enrico"
                                />
                                <Carousel.Caption>
                                    <h3>Enrico</h3>
                                    <p>Ceeh volevo scrivere qualcosa di spiritoso ma ha già scritto tutto Maurizio Ardu :D Vabbè mi rimane solo da farti gli auguri Albe!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Alessandro"
                                />
                                <Carousel.Caption>
                                    <h3>Alessandro</h3>
                                    <p>Benvenuta Sofia!!!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Marco Montalto"
                                />
                                <Carousel.Caption>
                                    <h3>Marco Montalto</h3>
                                    <p>Benvenuta Sofia, tantissimi auguri!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Michele"
                                />
                                <Carousel.Caption>
                                    <h3>Il Porno Attore</h3>
                                    <p>Benvenuta Sofia, tantissimi auguri!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="holder.js/800x300?text= &bg=cc6699&fg=ffffff"
                                alt="Fabio"
                                />
                                <Carousel.Caption>
                                    <h3>Fabio e Susanna</h3>
                                    <p>I nostri migliori auguri alla famiglia Mura ❤️</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </div>
        );
    }
}

export default BootstrapCarousel
