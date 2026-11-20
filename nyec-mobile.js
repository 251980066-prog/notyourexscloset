(function () {
  const css = `
.nx-burger{display:none}
.nx-m h4{font-size:.8rem;color:var(--muted);margin:18px 0 4px;font-weight:600}
.nx-m h4:first-child{margin-top:0}
.nx-mi{display:flex;justify-content:space-between;padding:13px 0;border-bottom:1px solid var(--line);font-size:1rem;cursor:pointer;color:var(--ink)}
.nx-mi span:last-child{color:var(--muted)}
.nx-mi.red{color:var(--red)}
@media(max-width:900px){
.nx-burger{display:flex}
header{padding:18px 14px}
.brand{font-size:1.05rem;max-width:50%;line-height:1.05}
.icons{gap:14px}
.icon-btn svg{width:24px;height:24px}
.announce{gap:8px;padding:12px 10px;font-size:.7rem}
.crumbs{padding:24px 14px 0}
h1.title{padding:10px 14px 0;margin-bottom:28px}
.toolbar{padding:0 14px;margin-bottom:24px}
.pill-btn{padding:12px 20px;font-size:.82rem}
.sort{gap:10px;font-size:.72rem}
.sort select{padding:12px 18px;font-size:.82rem}
.layout{padding:0 14px;gap:20px}
.grid{grid-template-columns:repeat(2,1fr);gap:12px}
.img-wrap{border-radius:18px}
.badge,.badge-cond{top:10px;font-size:.62rem;padding:5px 8px}
.badge{left:10px}
.badge-cond{right:10px}
.sold-stamp{inset:auto 10px 10px auto;font-size:.65rem;padding:5px 10px}
.card-body{padding:12px 2px 0}
.card-title{font-size:.88rem}
.card-meta{font-size:.74rem}
.price-row{flex-wrap:wrap}
.price{font-size:.95rem}
.reviews-section{padding:50px 14px 0}
.trust-strip{padding:50px 14px 0}
.page{padding-bottom:40px}
.q-links{margin-bottom:60px}
.q-links button,.q-links a{padding:10px 18px;font-size:.9rem}
.pdp-modal{padding:18px}
.pdp-main-img-wrap{height:320px}
.pdp-specs-box{grid-template-columns:1fr 1fr}
.pdp-spec-pill:first-child{grid-column:1/-1}
.pdp-info h2{font-size:1.4rem}
.modal{padding:20px}
.nx-dh,.nx-db,.nx-df{padding-left:18px;padding-right:18px}
}`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  document.body.insertAdjacentHTML('beforeend', `
<aside class="nx-drawer" id="nxMenu">
  <div class="nx-dh"><h3>Menu</h3><button class="nx-x" onclick="nxCloseAll()" aria-label="Close">&#10005;</button></div>
  <div class="nx-db nx-m" id="nxMenuBody"></div>
</aside>`);

  document.querySelector('.icons').insertAdjacentHTML('beforeend',
    '<button class="icon-btn nx-burger" onclick="nxOpenMenu()" aria-label="Menu"><svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>');

  function buildMenu() {
    const cats = categoriesList.map(c => {
      const n = c.key === 'ALL' ? items.length : items.filter(i => i.category === c.key).length;
      return `<div class="nx-mi" onclick="nxCloseAll();nxPickCat('${c.key}')"><span>${c.label}</span><span>${n}</span></div>`;
    }).join('');
    document.getElementById('nxMenuBody').innerHTML = `
      <h4>Shop by category</h4>${cats}
      <h4>Browse</h4>
      <div class="nx-mi" onclick="nxCloseAll();showNew()"><span>New arrivals</span></div>
      <div class="nx-mi red" onclick="nxCloseAll();showInStock()"><span>Available now - zero restocks</span></div>
      <h4>Help</h4>
      <div class="nx-mi" onclick="nxCloseAll();openTrack()"><span>Track your order</span></div>
      <div class="nx-mi" onclick="nxCloseAll();openPolicy('sizing')"><span>Size guide</span></div>
      <div class="nx-mi" onclick="nxCloseAll();openPolicy('faq')"><span>FAQ's</span></div>
      <div class="nx-mi" onclick="nxCloseAll();openPolicy('shipping')"><span>Shipping policy</span></div>
      <div class="nx-mi" onclick="nxCloseAll();openPolicy('returns')"><span>Exchange &amp; returns</span></div>
      <div class="nx-mi" onclick="nxCloseAll();openPolicy('contact')"><span>Contact</span></div>
      <div class="nx-mi" onclick="nxCloseAll();goAbout()"><span>About us</span></div>`;
  }

  window.nxOpenMenu = function () {
    buildMenu();
    nxOpen('nxMenu');
  };

  if (window.innerWidth <= 900) {
    document.getElementById('layout').classList.add('nofilter');
    document.getElementById('filterToggleBtn').textContent = 'Show filters';
  }
})();
