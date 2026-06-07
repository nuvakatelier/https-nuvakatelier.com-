async function includePartials() {
  const slots = [...document.querySelectorAll('[data-include]')];

  await Promise.all(slots.map(async (slot) => {
    const file = slot.getAttribute('data-include');
    try {
      const response = await fetch(file, { cache: 'no-cache' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      slot.outerHTML = await response.text();
    } catch (error) {
      console.error(`Could not load ${file}`, error);
      slot.innerHTML = `<!-- Could not load ${file} -->`;
    }
  }));

  if (window.location.hash) {
    const target = document.querySelector(window.location.hash);
    if (target) setTimeout(() => target.scrollIntoView(), 50);
  }
}

document.addEventListener('DOMContentLoaded', includePartials);
