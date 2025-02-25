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
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 17.32q1.216-.68 2.453-.98t2.547-.302q.9 0 1.849.17t1.651.469V6.681q-.69-.389-1.597-.554T17.5 5.962q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.45q-1.22-.836-2.62-1.283t-2.88-.448q-1.229 0-2.42.345q-1.19.347-2.08.916V6.07q.85-.52 2.04-.814Q5.229 4.96 6.5 4.96q1.47 0 2.866.423q1.398.424 2.634 1.231q1.237-.807 2.634-1.23t2.866-.423q1.271 0 2.451.294T22 6.069V18.3q-.885-.57-2.078-.915q-1.193-.347-2.422-.347q-1.48 0-2.88.448T12 18.77m1.885-9.177v-.93q.805-.408 1.725-.612t1.89-.204q.554 0 1.064.071q.509.072 1.052.202v.908q-.524-.167-1.02-.232q-.498-.064-1.096-.064q-.97 0-1.892.218q-.924.218-1.724.643m0 5.462v-.97q.768-.407 1.717-.611t1.899-.204q.554 0 1.064.072q.509.07 1.052.201v.908q-.524-.167-1.02-.232q-.498-.064-1.096-.064q-.97 0-1.892.235q-.924.234-1.724.665m0-2.712v-.969q.806-.408 1.726-.611t1.89-.204q.554 0 1.063.07q.51.072 1.052.203v.908q-.523-.168-1.02-.232q-.497-.065-1.095-.065q-.97 0-1.892.238q-.924.237-1.724.662"/></svg>
            <span>Contents</span>
          </button>
        </div>
      </div>
    </header>

    <main id='main'>
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
          <p class='copyright'><small>
            Copyright © 2017-present <a href='https://laurakalbag.com'>Laura Kalbag</a>, <a href='https://small-tech.org'>Small Technology Foundation</a>
          </small></p>
        </div>
      </div>
    </footer>
  `
}
