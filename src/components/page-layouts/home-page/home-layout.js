import React from 'react';

import Hero from '../../hero/hero.component';
import AboutPreview from '../../about-preview/about-preview.component';
import BlogWidget from '../../blog-widget/blog-widget'



export default function HomePage() {
    return (
        <div>
            <div>
                <Hero />
            </div>   
            <div>
                <AboutPreview />
            </div>
            <div>
                <BlogWidget />
            </div>
            
            
        </div>
            
            
    )
}

