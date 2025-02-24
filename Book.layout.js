// @ts-check

/**
  The Book/main site layout.
*/

import kitten from '@small-web/kitten'

class Chapter {
  constructor (title) { this.title = title }
  get link () { return `/${this.title.toLowerCase().replaceAll(' ', '-')}/` }
}

export const chapters = [
  {title: 'Cover', link: '/'},
  new Chapter('Foreword'),
  new Chapter('Considering Accessibility'),
  new Chapter('Disabilities and Impairments'),
  new Chapter('Planning for Accessibility'),
  new Chapter('Content and Design'),
  new Chapter('Accessibility and HTML'),
  new Chapter('Evaluating and Testing'),
  new Chapter('Laws and Guidelines'),
  new Chapter('Resources'),
  new Chapter('Acknowledgements'),
  new Chapter('References'),
  new Chapter('About Small Technology Foundation'),
  new Chapter('About the Author'),
]

export default function ({ SLOT }) {
  return kitten.html`
    <content for='HEAD'>
      <link rel='stylesheet' href='/css/globals.css'>
      <link rel='stylesheet' href='/css/layout.css'>
      <link rel='stylesheet' href='/css/type.css'>
    </content>

    <a class="sr-only skiplink" href="#main">Skip to main content</a>

    <header class='masthead'>
      <div class='mast-wrap repel'>
        <h1 class='logo'><a href="/">Accessibility for Everyone</a></h1>

        <div class='mininav'>
          <button
            class='toc-btn'
            aria-expanded='false'
            data-controls='#dialog'
            aria-label='Table of Contents'
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="10 20 80 60"><path d="M45.398 27.531H19.796c-1.68 0-3.04 1.36-3.04 3.04v36.577c0 1.68 1.36 3.04 3.04 3.04h25.602c1.68 0 3.04-1.36 3.04-3.04l.003-36.578c0-1.68-1.36-3.039-3.04-3.039zm-4.04 36.617h-17.52c-.858 0-1.558-.7-1.558-1.559s.7-1.558 1.559-1.558h17.52c.86 0 1.559.71 1.559 1.558 0 .852-.7 1.559-1.56 1.559zm0-9.148h-17.52c-.858 0-1.558-.7-1.558-1.559s.7-1.559 1.559-1.559h17.52c.86 0 1.559.7 1.559 1.559S42.218 55 41.358 55zm0-9.16h-17.52a1.56 1.56 0 0 1 0-3.117h17.52c.86 0 1.56.698 1.56 1.558s-.7 1.558-1.56 1.558zm0-9.16h-17.52a1.56 1.56 0 0 1 0-3.117h17.52c.86-.001 1.56.698 1.56 1.558s-.7 1.558-1.56 1.558zM80.199 27.531H54.597c-1.68 0-3.04 1.36-3.04 3.04v36.577c0 1.68 1.36 3.04 3.04 3.04h25.602c1.68 0 3.04-1.36 3.04-3.04V30.57c0-1.68-1.36-3.039-3.04-3.039zm-4.04 36.617H58.64c-.858 0-1.558-.7-1.558-1.559s.7-1.558 1.559-1.558h17.52c.86 0 1.558.71 1.558 1.558 0 .852-.699 1.559-1.558 1.559zm0-9.148H58.64c-.858 0-1.558-.7-1.558-1.559s.7-1.559 1.559-1.559h17.52c.86 0 1.558.7 1.558 1.559S77.02 55 76.16 55zm0-9.16H58.64a1.56 1.56 0 0 1 0-3.117h17.52c.86 0 1.56.698 1.56 1.558s-.7 1.558-1.56 1.558zm0-9.16H58.64a1.56 1.56 0 0 1 0-3.117h17.52c.86-.001 1.56.698 1.56 1.558s-.7 1.558-1.56 1.558z"></path><path d="M80.969 20.762H19.02a9.02 9.02 0 0 0-9.02 9.02v38.14a9.028 9.028 0 0 0 9.032 9.032h20.98c2.218 0 4.488.449 6.39 1.61.989.608 2.239.679 3.61.679 1.37 0 2.62-.059 3.61-.68 1.897-1.16 4.171-1.61 6.39-1.61H81c4.98 0 9.02-4.03 9.02-9.019V29.79a9.028 9.028 0 0 0-9.032-9.031zm5.39 46.387a6.165 6.165 0 0 1-6.16 6.16H54.597a6.09 6.09 0 0 1-4.601-2.09 6.09 6.09 0 0 1-4.602 2.09H19.792a6.165 6.165 0 0 1-6.16-6.16l.008-36.578a6.165 6.165 0 0 1 6.16-6.16h25.602c1.84 0 3.48.808 4.602 2.09a6.09 6.09 0 0 1 4.601-2.09h25.602a6.165 6.165 0 0 1 6.16 6.16v36.578z"></path></svg>
            <span>Contents</span>
          </button>
        </div>
      </div>
    </header>

    <main role='main' id='main'>
      ${SLOT}
    </main>

    <dialog id='dialog' class='modal' aria-hidden='true'>
      <button class='btn btn-close' aria-label='Close Table of Contents'></button>
      <nav aria-label='Table of Contents'>
        <ol>
          ${chapters.map((chapter, index) => kitten.html`
            <li><a href='${chapter.link}'>${index >= 2 && index <= 8 ? `${index-1}. ` : ''}${chapter.title}</a></li>
          `)}
        </ol>
      </nav>
    </dialog>

    <script>
      (function() {
        let control = document.querySelector( '[data-controls]' ),
        dialog  = document.querySelector( control.dataset.controls );
        closer  = dialog.querySelector( '.btn-close' );

        control.addEventListener( 'click', function( e ) {
        dialog.setAttribute( 'aria-hidden', false );
        dialog.showModal();
        });

        closer.addEventListener( 'click', function( e ) {
        dialog.setAttribute( 'aria-hidden', true );
        dialog.close();
        e.preventDefault();
        });
      }());
    </script>

    <footer class='footer'>
      <div class='outer-wrap'>
        <div class='inner-wrap'>
          <div class='pub-info'>
          <h3 class='meta-hed'>About Accessibility For Everyone</h3>
          <p>You make the web more inclusive for everyone, everywhere, when you design with accessibility in mind. Let Laura Kalbag guide you through the accessibility landscape: understand disability and impairment challenges; get a handle on important laws and guidelines; and learn how to plan for, evaluate, and test accessible design. Leverage tools and techniques like clear copywriting, well-structured IA, meaningful HTML, and thoughtful design, to create a solid set of best practices. Whether you’re new to the field or a seasoned pro, get sure footing on the path to designing with accessibility.</p>
          </div>
          <small class='copyright'>
            <p>Copyright © 2017-present <a href='https://laurakalbag.com'>Laura Kalbag</a>, <a href='https://small-tech.org'>Small Technology Foundation</a></p>
          </small>
        </div>
      </div>
    </footer>
  `
}
