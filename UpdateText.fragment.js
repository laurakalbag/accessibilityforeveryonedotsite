// @ts-check

/**
  The text content for the notes
  It’s wrapped in different elements depending on its containing page
*/

import kitten from '@small-web/kitten'

export default () => kitten.html`
    <p>We first published Accessibility For Everyone with <a href="https://abookapart.com/blogs/press/a-new-chapter-for-a-book-apart">A Book Apart</a> back in 2017. This means the book is now ${new Date().getFullYear()-2017} years old. Accessibility best practices haven’t really changed, and you should still find this book valuable. However, some of the recommended tools might be outdated, job titles have changed, and the <a href="https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/">Web Content Accessibility Guidelines are now approaching version 3</a>.</p>
    <p>Perhaps someday I (Laura) will find time to write a second edition, but first I wanted to make the book free, and available for the web community who have generously shared their knowledge with me.</p>
`