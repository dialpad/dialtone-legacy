import{_ as e,c as a}from"./app.935ad005.js";const n={},o=a(`<p>We&#39;re excited you want to install Dialtone locally as this most likely means you&#39;ll be contributing soon! Before you get to get started though, <strong>please make sure you&#39;ve read our <a href="https://github.com/dialpad/dialtone/blob/master/.github/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">contributing docs</a></strong>.</p><h2 id="install-node-npm" tabindex="-1"><a class="header-anchor" href="#install-node-npm" aria-hidden="true">#</a> Install Node &amp; npm</h2><p>To run Dialtone locally, you must have Node and NPM (Node Packet Manager) installed. <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Click here to download Node</a>. The recommended Node version is fine. NPM is included with Node. If you already have Node installed, you may move onto the next step.</p><p>Once Node finishes installing, ensure it is installed properly by typing the following command in your Terminal window:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>node -v
</code></pre></div><p>You should see the following response:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>v14.16.1
</code></pre></div><h2 id="clone-project" tabindex="-1"><a class="header-anchor" href="#clone-project" aria-hidden="true">#</a> Clone Project</h2><p>Download the project:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>// SSH
git clone git@github.com:dialpad/dialtone.git

// HTTPS
git clone https://github.com/dialpad/dialtone.git
</code></pre></div><p>Then <code>cd</code> into the Dialtone directory:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>cd ./path/to/dialtone
</code></pre></div><h2 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install Dependencies</h2><p>Dialtone uses <a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp</a> to automate its various workflows. Run the following command to install Gulp and all other project dependencies:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    npm install
</code></pre></div><h2 id="building-dialtone" tabindex="-1"><a class="header-anchor" href="#building-dialtone" aria-hidden="true">#</a> Building Dialtone</h2><p>You&#39;re now ready to build Dialtone! To build and run the development server:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>    npm start
</code></pre></div><p>Once finished, visit <code>http://localhost:4000/</code>.</p>`,19);function t(l,d){return o}var s=e(n,[["render",t],["__file","building-locally.html.vue"]]);export{s as default};
