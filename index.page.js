import kitten from '@small-web/kitten'
import Cover from './Cover.layout.js'
import UpdateText from './UpdateText.fragment.js'

export default function () {
return kitten.html`
  <content for='HEAD'>
    <title>Accessibility For Everyone by Laura Kalbag</title>
    <meta name='title' content='Accessibility For Everyone by Laura Kalbag'>
    <meta name='description' content='Read and listen to the book online for free.'>
    <meta property='og:type' content='website'>
    <meta property='og:url' content='https://accessibilityforeveryone.site/'>
    <meta property='og:title' content='Accessibility For Everyone by Laura Kalbag'>
    <meta property='og:description' content='Read and listen to the book online for free.'>
    <meta property='og:image' content='https://accessibilityforeveryone.site/images/meta/home.png'>
  </content>
  <${Cover}>
    <div class='cover'>
      <div class="outer-wrap">
        <div class="inner-wrap title-section">
          <address class="author">Laura Kalbag</address>
          <h1>Accessibility for Everyone</h1>
        </div>
      </div>
      <div class="ctas">
        <a href="/considering-accessibility/" class="btn-cta">Read for free</a>
      </div>
    </div>
    <div class='inner-wrap book-body'>
      <${UpdateText}/>
    </div>
  </>
`
}
