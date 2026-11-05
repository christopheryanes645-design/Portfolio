const element = (tag, text, className) => { const node = document.createElement(tag); if (text) node.textContent = text; if (className) node.className = className; return node; };
const data = window.PORTFOLIO;
const viewer = document.getElementById('viewer');
function imageButton(src, caption, className) {
  const button = element('button', '', className); button.type = 'button'; button.setAttribute('aria-label', `Enlarge: ${caption}`);
  const image = element('img'); image.src = src; image.alt = caption; image.loading = 'lazy'; button.append(image);
  button.addEventListener('click', () => { document.getElementById('viewer-image').src = src; document.getElementById('viewer-image').alt = caption; document.getElementById('viewer-caption').textContent = caption; viewer.showModal(); });
  return button;
}
data.projects.forEach((project, index) => {
  const jump = element('a', `${String(index + 1).padStart(2, '0')} / ${project.title}`); jump.href = `#${project.id}`; document.getElementById('project-index').append(jump);
  const article = element('article', '', 'project'); article.id = project.id;
  const main = element('div', '', 'project-main');
  const intro = element('div'); intro.append(element('p', `${String(index + 1).padStart(2, '0')} / ${project.discipline}`, 'project-num'), element('h2', project.title), element('p', project.description, 'project-description'));
  const evidence = element('p', '', 'project-evidence'); evidence.append(element('strong', 'Inside the project'), element('br'), document.createTextNode(project.evidence)); intro.append(evidence);
  main.append(imageButton(project.image, project.imageAlt, `project-image${project.photo ? ' photo' : ''}`), intro); article.append(main);
  const details = element('details'); details.append(element('summary', `Explore the case study · ${project.gallery.length} images`)); const body = element('div', '', 'case-body'); const copy = element('div', '', 'case-copy');
  project.sections.forEach(([title, text]) => { const part = element('section'); part.append(element('h3', title), element('p', text)); copy.append(part); }); body.append(copy);
  if (project.gallery.length) { const gallery = element('div', '', 'gallery'); project.gallery.forEach(([src, caption]) => { const figure = element('figure'); figure.append(imageButton(src, caption), element('figcaption', caption)); gallery.append(figure); }); body.append(gallery); }
  if (project.documents.length) { const links = element('div', '', 'documents'); project.documents.forEach(([title, url]) => { const a = element('a', `${title} (PDF)`); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; links.append(a); }); body.append(links); }
  details.append(body); article.append(details); document.getElementById('projects').append(article);
});
document.getElementById('close-viewer').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => { if(event.target === viewer) { const r = viewer.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) viewer.close(); } });
if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) { const a = element('a', data.email, 'contact-link'); a.href = `mailto:${encodeURIComponent(data.email)}`; document.getElementById('contact-links').prepend(a); }
document.getElementById('year').textContent = new Date().getFullYear();
