import Site from "./Site.layout.js";
import Content from "./Content.fragment.md"
import BookRoll from "./BookRoll.fragment.html";

export default () => kitten.html`
  <${Site}>
    <div class="content">
        <${Content} />
        <!-- <${BookRoll} /> -->
    </div>
  </>
`;
