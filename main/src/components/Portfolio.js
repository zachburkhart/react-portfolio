import React from "react";

const work = [
    <section id="work" class="section">
        <h2>Work</h2>
        <div class="flex-container">
            <a href="https://zachburkhart.github.io/run-buddy/" target="_blank" class="flex-item run-buddy">
                <div>
                    <h3>Run Buddy</h3>
                    <span>HTML + CSS</span>
                </div>
            </a>
            <a href="https://zachburkhart.github.io/horiseon/" target="_blank" class="flex-item horiseon">
                <div>
                    <h3>Horiseon</h3>
                    <span>HTML + CSS</span>
                </div>
            </a>
            <a href="https://verbaldye.github.io/cocktail-music/" target="_blank" class="flex-item cocktail-music">
                <div>
                    <h3>Cocktail Music</h3>
                    <span>HTML, CSS, JS, Third-Party APIs</span>
                </div>
            </a>
        </div>
    </section>
]

function Portfolio() {
    return (
        <div>
            <h3>Portfolio</h3>
            <p>work={work}</p>
        </div>
    );
}

export default Portfolio;