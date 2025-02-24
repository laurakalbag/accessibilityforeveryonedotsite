// @ts-check

/**
  Cover layout: uses wrappers for cover.
*/

import kitten from '@small-web/kitten'
import Book from './Book.layout.js'

export default function Cover ({ SLOT }) {
  return kitten.html`
    <${Book}>
      <div class='cover'>
        ${SLOT}
      </div>
    </>
  `
}
