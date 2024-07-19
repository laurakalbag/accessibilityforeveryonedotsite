import Variables from "./Variables.fragment.css";
import Normalise from "./Normalise.fragment.css";
import Typography from "./Typography.fragment.css";
import Layout from "./Layout.fragment.css";
import Colours from "./Colours.fragment.css";
import Header from "./Header.fragment.js";
import Footer from "./Footer.fragment.js";

export default ({ SLOT }) => kitten.html`
    <page title='How to buy Accessibility For Everyone by Laura Kalbag' lang='en' viewport='width=device-width, initial-scale=1'/>

    <content for="HEAD">
        <title>How to buy Accessibility For Everyone by Laura Kalbag</title>
        <meta name="title" content="How to buy Accessibility For Everyone by Laura Kalbag" />
        <meta name="description" content="Links for where to buy the paperback, ebook, and audiobook formats of Accessibility For Everyone by Laura Kalbag." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://accessibilityforeveryone.site/" />
        <meta property="og:title" content="How to buy Accessibility For Everyone by Laura Kalbag" />
        <meta property="og:description" content="Links for where to buy the paperback, ebook, and audiobook formats of Accessibility For Everyone by Laura Kalbag." />
        <meta property="og:image" content="https://accessibilityforeveryone.site/images/card.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://accessibilityforeveryone.site/" />
        <meta property="twitter:title" content="How to buy Accessibility For Everyone by Laura Kalbag" />
        <meta property="twitter:description" content="Links for where to buy the paperback, ebook, and audiobook formats of Accessibility For Everyone by Laura Kalbag." />
        <meta property="twitter:image" content="https://accessibilityforeveryone.site/images/card.png" />

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
