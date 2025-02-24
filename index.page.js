import kitten from '@small-web/kitten'
import Cover from './Cover.layout.js'

export default function () {
return kitten.html`
  <${Cover}>
    <div class="outer-wrap">
      <div class="inner-wrap title-section">
        <address class="author">Laura Kalbag</address>
        <h1>Accessibility for Everyone</h1>
      </div>
    </div>
    <div class="ctas">
      <a href="/considering-accessibility/" class="btn-cta">Read for free</a>
    </div>
  </>
`
}
