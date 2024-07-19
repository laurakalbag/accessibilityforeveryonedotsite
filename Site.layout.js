import Variables from "./Variables.fragment.css";
import Normalise from "./Normalise.fragment.css";
import Typography from "./Typography.fragment.css";
import Layout from "./Layout.fragment.css";
import Colours from "./Colours.fragment.css";
import Header from "./Header.fragment.js";
import Footer from "./Footer.fragment.js";

export default ({ SLOT }) => kitten.html`
    <page title='Buy Accessibility For Everyone by Laura Kalbag' lang='en' viewport='width=device-width, initial-scale=1'/>

    <content for="HEAD">
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📗</text></svg>">
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
