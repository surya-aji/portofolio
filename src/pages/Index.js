import React, { Component } from 'react';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Content from '../components/index/Content';
import MainLayout from './mainLayout.js';
import SubLayout from './subLayout.js';

function Index() {
        return (
            <div>
                <MainLayout>
                    <SubLayout>
                    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                        <div className="hero-container" data-aos="fade-in">
                        <h1>Alex Smith</h1>
                        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer" /></p>
                        </div>
                    </section>
                    </SubLayout>
                </MainLayout>
            </div>
        )
}

export default Index;