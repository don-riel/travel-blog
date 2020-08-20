import React from 'react';

import Hero from '../../hero/hero.component';
import AboutPreview from '../../about-preview/about-preview.component'

import styles from './home-layout-styles.css'


export default function HomePage() {
    return (
        <div>
            <div>
                <Hero />
            </div>
           
               <div>
                <AboutPreview />
            </div> 
           
            
            
        </div>
            
            
    )
}

