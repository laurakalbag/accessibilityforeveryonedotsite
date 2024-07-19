let year = new Date().getFullYear();

export default () => kitten.html`
  <footer>
    <p>Powered by <a href='https://kitten.small-web.org'>Kitten</a></p>
    <p><small>Copyright © Laura Kalbag, ${year}.</small></p>
  </footer>

  <style>
    footer {
        border-top: 1px solid var(--colour-background-green);
        padding: var(--space-xs);
        text-align: center;
    }
    footer p {
        margin: 0;
    }

    footer a[href*='kitten.small-web.org'] {
      background: url('/images/kitten.svg') left center no-repeat;
      background-size: var(--font-2) var(--font-2);
      padding-left: calc(var(--font-2) + var(--space-2xs));
    }
  </style>
`;