import Variables from "./Variables.fragment.css";
import Normalise from "./Normalise.fragment.css";
import Typography from "./Typography.fragment.css";
import Layout from "./Layout.fragment.css";
import Colours from "./Colours.fragment.css";
import Header from "./Header.fragment.js";
import Footer from "./Footer.fragment.js";

export default ({ SLOT }) => kitten.html`
    <page title='Buy Accessibility For Everyone' lang='en' viewport='width=device-width, initial-scale=1'/>

    <content for="HEAD">
        <meta name="robots" content="noindex,nofollow">
    </content>

    <${Variables} />
    <${Normalise} />
    <${Typography} />
    <${Layout} />
    <${Colours} />

    <${Header} />

    <main>
        ${SLOT}
    </main>

    <${Footer} />
`;
