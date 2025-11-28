// @ts-check

/**
  A note about the book.
*/

import kitten from '@small-web/kitten'
import UpdateText from './UpdateText.fragment.js'

export default () => kitten.html`
    <aside id='update' class='note'>
        <h2 class='meta-hed'>A note from the author</h2>
        <a class="sr-only skiplink" href="#start">Skip to chapter start</a>
        <${UpdateText}/>
    </aside>
`