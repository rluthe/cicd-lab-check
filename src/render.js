// Builds the HTML page from the settings in site-config.js.

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPage(config, now = new Date()) {
  const title = escapeHtml(config.title);
  const owner = escapeHtml(config.owner);
  const version = escapeHtml(config.version);
  const color = escapeHtml(config.backgroundColor);
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <style>
    body { margin: 0; font-family: Arial, sans-serif; background: ${color}; color: #1a1a1a; }
    main { max-width: 640px; margin: 10vh auto; background: #ffffff; padding: 32px; border-radius: 12px;
           box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15); }
    h1 { margin-top: 0; color: #00467f; }
    dt { font-weight: bold; margin-top: 12px; }
  </style>
</head>
<body>
  <main>
    <h1>${title}</h1>
    <p>Deployed automatically by a CI/CD pipeline: GitHub &rarr; AWS CodePipeline &rarr; AWS Elastic Beanstalk.</p>
    <dl>
      <dt>Owner</dt><dd>${owner}</dd>
      <dt>Version</dt><dd>${version}</dd>
      <dt>Background colour</dt><dd>${color}</dd>
      <dt>Page generated at</dt><dd>${now.toISOString()}</dd>
    </dl>
  </main>
</body>
</html>`;
}

module.exports = { renderPage, escapeHtml };
