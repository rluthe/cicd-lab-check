// Automated tests run by GitHub Actions on every pull request (see .github/workflows/ci.yml).
// Run them on your laptop with:  npm test
const test = require('node:test');
const assert = require('node:assert/strict');
const config = require('../src/site-config');
const { renderPage } = require('../src/render');

test('background colour is a valid hex colour such as #1e90ff', () => {
  assert.match(config.backgroundColor, /^#[0-9a-fA-F]{6}$/,
    `"${config.backgroundColor}" is not a 6-digit hex colour like #1e90ff`);
});

test('version follows the MAJOR.MINOR.PATCH format', () => {
  assert.match(config.version, /^\d+\.\d+\.\d+$/,
    `"${config.version}" should look like 1.0.1`);
});

test('owner and title are filled in', () => {
  assert.ok(config.title.trim().length > 0, 'title is empty');
  assert.ok(config.owner.trim().length > 0, 'owner is empty');
});

test('the page shows the title, owner, version and colour', () => {
  const html = renderPage(config, new Date('2026-01-01T00:00:00Z'));
  assert.ok(html.includes(`<title>${config.title}</title>`), 'title missing');
  assert.ok(html.includes(config.owner), 'owner missing');
  assert.ok(html.includes(config.version), 'version missing');
  assert.ok(html.includes(`background: ${config.backgroundColor}`), 'background colour missing');
});
