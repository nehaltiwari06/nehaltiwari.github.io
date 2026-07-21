function renderProjectCard(project) {
  const isLive = project.status === "live";

  const thumbHTML = isLive
    ? `<img src="${project.thumb}" alt="${project.title}" />`
    : `<div class="dribble-wrap">
         <div class="dribble-shadow"></div>
         <svg class="dribble-ball" viewBox="0 0 34 34">
           <circle cx="17" cy="17" r="15" stroke="#e8522a" stroke-width="1.8" fill="none"/>
           <path d="M17 2 C17 2 17 32 17 32" stroke="#e8522a" stroke-width="1.1" fill="none"/>
           <path d="M2 17 C2 17 32 17 32 17" stroke="#e8522a" stroke-width="1.1" fill="none"/>
           <path d="M6 7 C10 12 10 22 6 27" stroke="#e8522a" stroke-width="1.1" fill="none"/>
           <path d="M28 7 C24 12 24 22 28 27" stroke="#e8522a" stroke-width="1.1" fill="none"/>
         </svg>
       </div>`;

  const arrowHTML = isLive
    ? `<div class="project-arrow">Read case study &nbsp;→</div>`
    : `<div class="coming-soon-caption">Dribbling this into shape</div>`;

  const cardInner = `
    <div class="project-thumb${isLive ? "" : " coming-soon"}">${thumbHTML}</div>
    <div class="project-meta">
      <span class="project-tag">${project.tag}</span>
      <div class="project-title">${project.title}</div>
      <div class="project-desc">${project.desc}</div>
      ${arrowHTML}
    </div>`;

  if (isLive) {
    return `<a class="project-row" href="${project.link}">${cardInner}</a>`;
  }
  return `<div class="project-row" style="cursor:default;">${cardInner}</div>`;
}

function renderProjects() {
  const container = document.getElementById("project-list");
  if (!container || typeof PROJECTS === "undefined") return;
  container.innerHTML = PROJECTS.map(renderProjectCard).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
