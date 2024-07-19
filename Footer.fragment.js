let year = new Date().getFullYear();

export default () => kitten.html`
  <footer>
    <p><small>Copyright © Laura Kalbag, ${year}.</small></p>
    <p>Powered by <a href='https://kitten.small-web.org'>Kitten</a></p>
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
  </style>
`;