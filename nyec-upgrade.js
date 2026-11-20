(function () {
  const css = `
.nx-wrap{position:relative;display:inline-block}
nav button.nx-on{background:var(--ink);color:#fff;border-color:var(--ink)}
.nx-dd{position:absolute;top:calc(100% + 14px);left:0;min-width:240px;background:#fff;border:1px solid var(--line);border-radius:22px;padding:12px 24px;box-shadow:0 18px 40px rgba(0,0,0,.14);display:none;z-index:50}
.nx-dd.open{display:block}
.nx-item{display:flex;justify-content:space-between;gap:28px;padding:10px 0;font-size:.92rem;cursor:pointer;color:var(--ink)}
.nx-item span:last-child{color:var(--muted)}
.nx-item:hover span:first-child{text-decoration:underline}
.nx-back{position:fixed;inset:0;background:rgba(0,0,0,.45);opacity:0;pointer-events:none;transition:opacity .25s;z-index:200}
.nx-back.open{opacity:1;pointer-events:all}
.nx-drawer{position:fixed;top:0;right:0;height:100%;width:min(460px,100%);background:#fff;color:var(--ink);z-index:210;transform:translateX(100%);transition:transform .3s ease;display:flex;flex-direction:column;border-radius:28px 0 0 28px}
.nx-drawer.open{transform:none}
.nx-dh{display:flex;justify-content:space-between;align-items:center;padding:26px 28px;border-bottom:1px solid var(--line)}
.nx-dh h3{font-size:1.6rem;font-weight:500}
.nx-dh sup{font-size:.7rem;margin-left:3px}
.nx-x{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);background:#fff;font-size:1rem}
.nx-db{flex:1;overflow-y:auto;padding:24px 28px}
.nx-df{padding:20px 28px 28px;background:#f8f8f8}
.nx-df p{font-size:.78rem;color:var(--muted);line-height:1.5;margin:8px 0 16px}
.nx-sub{display:flex;justify-content:space-between;align-items:center}
.nx-sub strong{font-size:1.3rem}
.nx-btns{display:grid;grid-template-columns:1.2fr 1fr;gap:10px}
.nx-btns .btn{padding:16px 10px}
.nx-empty{color:var(--muted);padding:10px 0;line-height:1.5}
.nx-line{display:grid;grid-template-columns:96px 1fr auto;gap:16px;align-items:start;margin-bottom:22px}
.nx-line img{width:96px;height:112px;object-fit:cover;border-radius:14px;background:var(--card)}
.nx-li{display:flex;flex-direction:column;gap:5px;font-size:.88rem}
.nx-li span{color:var(--muted);font-size:.8rem}
.nx-rm{background:none;border:0;text-decoration:underline;font-size:.78rem;color:var(--ink)}
.nx-input{width:100%;padding:18px 20px;border:0;background:#f3f3f3;border-radius:14px;font:inherit;font-size:.95rem;outline:none;margin-bottom:18px}
.nx-hit{display:flex;gap:14px;align-items:center;padding:10px 0;cursor:pointer;border-bottom:1px solid var(--line)}
.nx-hit img{width:56px;height:68px;object-fit:cover;border-radius:10px;background:var(--card)}
.nx-hit div{display:flex;flex-direction:column;gap:4px;font-size:.9rem}
.nx-hit span{font-size:.78rem;color:var(--muted)}
.pdp-sizes-label{display:none}
.nx-note{font-size:.82rem;font-weight:600;color:var(--muted);align-self:center}
.pdp-size-btn.nx-one{flex:0 0 84px}
#checkoutPage{display:none;background:#fff;color:var(--ink);min-height:100vh}
.co-top{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;padding:20px 24px;border-bottom:1px solid var(--line)}
.co-back{justify-self:start;display:inline-flex;align-items:center;gap:8px;background:#fff;border:2px solid var(--ink);border-radius:999px;padding:10px 20px;font-size:.88rem;font-weight:500;color:var(--ink);text-decoration:none;transition:background .15s,color .15s}
.co-back:hover{background:var(--ink);color:#fff}
@media(max-width:900px){.co-back{padding:8px 14px;font-size:.8rem}}
.co-wrap{display:grid;grid-template-columns:1fr 1fr;min-height:calc(100vh - 70px)}
.co-left{padding:40px 48px 60px;display:flex;flex-direction:column;align-items:flex-end}
.co-left>div{width:100%;max-width:520px}
.co-right{background:#f4f4f4;padding:40px 48px}
.co-right>div{width:100%;max-width:400px}
.co-left h3{font-size:1.15rem;font-weight:600;margin:24px 0 14px}
.co-left h3:first-child{margin-top:0}
.co-in{width:100%;padding:17px 16px;border:1.5px solid var(--line);border-radius:14px;font:inherit;font-size:.92rem;margin-bottom:12px;outline:none;background:#fff;color:var(--ink)}
.co-in:focus{border-color:#0a5bd6}
.co-in.input-error{border-color:var(--red);background:#fff4f3}
.co-opt{border:1.5px solid var(--line);border-radius:14px;padding:16px;display:flex;justify-content:space-between;gap:12px;cursor:pointer;margin-bottom:10px;font-size:.9rem}
.co-opt.on{border-color:#0a5bd6;background:#f2f6ff}
.co-it{display:flex;gap:14px;align-items:center;margin-bottom:16px;font-size:.88rem}
.co-it img{width:64px;height:64px;border-radius:12px;object-fit:cover;background:var(--card)}
.co-it div{flex:1}
.co-it small{display:block;color:var(--muted);margin-top:3px}
.co-row{display:flex;justify-content:space-between;font-size:.9rem;margin-bottom:10px}
.co-total{display:flex;justify-content:space-between;align-items:baseline;font-size:1.3rem;font-weight:700;margin-top:16px}
.co-actions{display:flex;flex-direction:column;gap:10px;margin-top:16px}
#coConfirm{display:none;max-width:560px;margin:50px auto;padding:0 20px}
@media(max-width:900px){
.co-wrap{grid-template-columns:1fr}
.co-right{order:-1;padding:24px}
.co-left{padding:24px;align-items:stretch}
.nx-drawer{border-radius:0}
}`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  const oldBag = document.getElementById('bagModal');
  if (oldBag) oldBag.remove();

  document.body.insertAdjacentHTML('beforeend', `
<div class="nx-back" id="nxBack" onclick="nxCloseAll()"></div>
<aside class="nx-drawer" id="nxCart">
  <div class="nx-dh"><h3>Cart <sup id="nxCartN">0</sup></h3><button class="nx-x" onclick="nxCloseAll()" aria-label="Close">&#10005;</button></div>
  <div class="nx-db" id="nxCartItems"></div>
  <div class="nx-df" id="nxCartFoot">
    <div class="nx-sub"><span>Subtotal</span><strong id="nxSub">Rs. 0</strong></div>
    <p>Pay by EasyPaisa to save Rs. 150 and get free shipping. Cash on Delivery adds Rs. 200.</p>
    <div class="nx-btns"><button class="btn" onclick="openCheckout()">Check out</button><button class="btn btn-outline" onclick="nxCloseAll()">Keep shopping</button></div>
  </div>
</aside>
<aside class="nx-drawer" id="nxSearch">
  <div class="nx-dh"><h3>Search</h3><button class="nx-x" onclick="nxCloseAll()" aria-label="Close">&#10005;</button></div>
  <div class="nx-db"><input class="nx-input" id="nxSearchInput" placeholder="Search for ..." oninput="nxSearch(this.value)" autocomplete="off"><div id="nxResults"></div></div>
</aside>
<div id="checkoutPage">
  <div class="co-top"><button class="co-back" onclick="closeCheckout()">&larr; Back to store</button><div class="brand" onclick="closeCheckout()">Not Your Ex's Closet</div><span></span></div>
  <div class="co-wrap" id="coMain">
    <div class="co-left"><div>
      <h3>Delivery</h3>
      <input class="co-in" id="custName" placeholder="Full name" oninput="clearError(this);updateReceipt()">
      <input class="co-in" id="custPhone" type="tel" placeholder="Phone (0316-7271822)" oninput="clearError(this);updateReceipt()">
      <input class="co-in" id="custCity" placeholder="City" oninput="clearError(this);updateReceipt()">
      <input class="co-in" id="custAddress" placeholder="Complete address (House #, Street, Area)" oninput="clearError(this);updateReceipt()">
      <h3>Shipping method</h3>
      <div class="co-opt on"><span id="coShipName">Free shipping</span><b id="coShipPrice">Rs 0</b></div>
      <h3>Payment</h3>
      <input type="hidden" id="payMethod" value="DIGITAL">
      <div class="co-opt on" id="coPayDIGITAL" onclick="nxPay('DIGITAL')"><span>EasyPaisa</span><b>Rs. 150 off</b></div>
      <div class="co-opt" id="coPayCOD" onclick="nxPay('COD')"><span>Cash on Delivery</span><b>+ Rs. 200</b></div>
      <div class="pay-details-box" id="digitalPayBox">
        <strong>Transfer the total to this account, then send the screenshot on WhatsApp or Instagram DM:</strong>
        <div class="pay-copy-row"><span id="displayPayInfo"></span><button type="button" class="btn btn-outline btn-sm" onclick="copyPayNumber()">Copy</button></div>
      </div>
      <h3>Order slip</h3>
      <div class="receipt-box" id="receiptPreview"></div>
      <div class="co-actions">
        <button class="btn" onclick="sendWhatsApp()">Lock order on WhatsApp</button>
        <button class="btn btn-outline" onclick="copyInstaDM()">Copy slip for Instagram DM</button>
      </div>
    </div></div>
    <div class="co-right"><div id="coSummary"></div></div>
  </div>
  <div id="coConfirm">
    <div class="confirm-box">
      <div class="confirm-badge">Order slip generated and reserved</div>
      <h2 style="margin-bottom:6px;">Order confirmed</h2>
      <p style="font-size:.9rem;color:var(--muted);margin-bottom:12px;">Save your tracking ID. Share it on WhatsApp or Instagram DM any time to check your parcel.</p>
      <div class="tracking-pill"><span id="confirmedTrackingId">NYEC-TRK-0000</span><button class="btn btn-outline btn-sm" onclick="copyTrackingId()">Copy ID</button></div>
      <div id="confirmedDigitalNote" style="background:#f4f4f4;border-radius:14px;padding:10px;font-size:.84rem;margin-bottom:10px;text-align:left;"></div>
      <div class="receipt-box" id="confirmedReceiptCopy" style="text-align:left;"></div>
      <p style="font-size:.84rem;color:var(--muted);margin-bottom:14px;line-height:1.45;">Make sure you press Send in WhatsApp or paste the slip in the Instagram DM so we can dispatch within 24 hours.</p>
      <button class="btn btn-outline" style="width:100%;" onclick="closeCheckout()">Continue browsing</button>
    </div>
  </div>
</div>`);

  const icons = document.querySelector('.icons');
  icons.insertAdjacentHTML('afterbegin', '<button class="icon-btn" onclick="nxOpenSearch()" aria-label="Search"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg></button>');

  const nav = document.querySelector('nav');
  const first = nav.querySelector('button');
  const wrap = document.createElement('span');
  wrap.className = 'nx-wrap';
  nav.insertBefore(wrap, first);
  wrap.appendChild(first);
  first.setAttribute('onclick', 'nxToggleCat(event)');
  wrap.insertAdjacentHTML('beforeend', '<div class="nx-dd" id="nxDD"></div>');

  function renderDD() {
    document.getElementById('nxDD').innerHTML = categoriesList.map(c => {
      const n = c.key === 'ALL' ? items.length : items.filter(i => i.category === c.key).length;
      return `<div class="nx-item" onclick="nxPickCat('${c.key}')"><span>${c.label}</span><span>${n}</span></div>`;
    }).join('');
  }

  window.nxToggleCat = function (e) {
    e.stopPropagation();
    renderDD();
    const dd = document.getElementById('nxDD');
    dd.classList.toggle('open');
    first.classList.toggle('nx-on', dd.classList.contains('open'));
  };

  window.nxPickCat = function (key) {
    document.getElementById('nxDD').classList.remove('open');
    first.classList.remove('nx-on');
    setCategory(key);
    scrollToGrid();
  };

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nx-wrap')) {
      document.getElementById('nxDD').classList.remove('open');
      first.classList.remove('nx-on');
    }
  });

  window.nxOpen = function (id) {
    document.getElementById('nxBack').classList.add('open');
    document.getElementById(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.nxCloseAll = function () {
    document.getElementById('nxBack').classList.remove('open');
    document.querySelectorAll('.nx-drawer').forEach(d => d.classList.remove('open'));
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') nxCloseAll();
  });

  window.nxOpenSearch = function () {
    nxOpen('nxSearch');
    const inp = document.getElementById('nxSearchInput');
    setTimeout(() => inp.focus(), 300);
  };

  window.nxSearch = function (q) {
    q = q.trim().toLowerCase();
    const box = document.getElementById('nxResults');
    if (!q) { box.innerHTML = ''; return; }
    const hits = items.filter(i => (i.title + ' ' + i.id + ' ' + i.category + ' ' + i.size).toLowerCase().includes(q));
    box.innerHTML = hits.length ? hits.map(i => `
      <div class="nx-hit" onclick="nxCloseAll();openQuickView('${i.id}')">
        <img src="${i.img}" alt="" onerror="this.src='https://placehold.co/200x240/E6E6E6/1A1A1A?text=NYEC'">
        <div><b>${i.title}</b><span>${i.id} &bull; Size ${i.size} &bull; Rs. ${i.price.toLocaleString()}${i.sold ? ' &bull; Sold' : ''}</span></div>
      </div>`).join('') : '<p class="nx-empty">No pieces found. Try a different word.</p>';
  };

  window.openBagModal = function () {
    updateBagUI();
    nxOpen('nxCart');
  };

  window.updateBagUI = function () {
    const total = bag.reduce((s, i) => s + i.price, 0);
    document.getElementById('bagCount').textContent = bag.length;
    document.getElementById('nxCartN').textContent = bag.length;
    document.getElementById('nxSub').textContent = 'Rs. ' + total.toLocaleString();
    document.getElementById('nxCartFoot').style.display = bag.length ? 'block' : 'none';
    document.getElementById('nxCartItems').innerHTML = bag.length ? bag.map(i => `
      <div class="nx-line">
        <img src="${i.img}" alt="" onerror="this.src='https://placehold.co/200x240/E6E6E6/1A1A1A?text=NYEC'">
        <div class="nx-li"><b>${i.title}</b><span>Size ${i.size} &bull; ${i.id}</span><span>Rs. ${i.price.toLocaleString()}</span></div>
        <button class="nx-rm" onclick="removeFromBag('${i.id}')">Remove</button>
      </div>`).join('') : '<p class="nx-empty">Your cart is empty. Claim a 1-of-1 piece before someone else does.</p>';
    nxRefresh();
  };

  window.nxPay = function (m) {
    document.getElementById('payMethod').value = m;
    document.getElementById('coPayDIGITAL').classList.toggle('on', m === 'DIGITAL');
    document.getElementById('coPayCOD').classList.toggle('on', m === 'COD');
    togglePayDetails();
    nxRefresh();
  };

  function nxRefresh() {
    const sub = bag.reduce((s, i) => s + i.price, 0);
    const dig = document.getElementById('payMethod').value === 'DIGITAL';
    const disc = dig ? 150 : 0;
    const ship = dig ? 0 : 200;
    document.getElementById('coShipName').textContent = dig ? 'Free shipping' : 'Cash on Delivery shipping';
    document.getElementById('coShipPrice').textContent = 'Rs ' + ship;
    document.getElementById('coSummary').innerHTML = bag.map(i => `
      <div class="co-it">
        <img src="${i.img}" alt="" onerror="this.src='https://placehold.co/200x200/E6E6E6/1A1A1A?text=NYEC'">
        <div>${i.title}<small>Size ${i.size} &bull; ${i.id}</small></div>
        <span>Rs. ${i.price.toLocaleString()}</span>
      </div>`).join('') + `
      <div class="co-row" style="margin-top:20px"><span>Subtotal</span><span>Rs. ${sub.toLocaleString()}</span></div>
      ${dig ? `<div class="co-row"><span>Digital payment discount</span><span>- Rs. 150</span></div>` : ''}
      <div class="co-row"><span>Shipping</span><span>Rs. ${ship}</span></div>
      <div class="co-total"><span>Total</span><span>Rs. ${(sub - disc + ship).toLocaleString()}</span></div>`;
    updateReceipt();
  }

  window.openCheckout = function () {
    if (!bag.length) return;
    nxCloseAll();
    document.getElementById('coConfirm').style.display = 'none';
    document.getElementById('coMain').style.display = '';
    document.getElementById('displayPayInfo').textContent = `${config.payNumber} (${config.payTitle})`;
    togglePayDetails();
    nxRefresh();
    document.querySelectorAll('.announce,.page,footer').forEach(e => e.style.display = 'none');
    document.getElementById('checkoutPage').style.display = 'block';
    window.scrollTo(0, 0);
    if (location.hash !== '#checkout') history.pushState({ co: 1 }, '', '#checkout');
  };

  window.closeCheckout = function (fromPop) {
    document.getElementById('checkoutPage').style.display = 'none';
    document.querySelectorAll('.announce,.page,footer').forEach(e => e.style.display = '');
    if (!fromPop && location.hash === '#checkout') history.back();
    window.scrollTo(0, 0);
  };

  window.addEventListener('popstate', function () {
    if (location.hash !== '#checkout') closeCheckout(true);
  });

  window.showCustomerConfirmation = function (slip, trk, isDigital) {
    document.getElementById('coMain').style.display = 'none';
    document.getElementById('coConfirm').style.display = 'block';
    document.getElementById('confirmedTrackingId').textContent = trk;
    document.getElementById('confirmedReceiptCopy').textContent = slip;
    const note = document.getElementById('confirmedDigitalNote');
    if (isDigital) {
      note.style.display = 'block';
      note.innerHTML = `<strong>Payment reminder:</strong> send the total to <strong>${config.payNumber}</strong> (${config.payTitle}) and share the screenshot with Tracking ID <strong>${trk}</strong>.`;
    } else {
      note.style.display = 'none';
    }
    window.scrollTo(0, 0);
  };

  const baseQuickView = window.openQuickView;
  window.openQuickView = function (id) {
    baseQuickView(id);
    const it = currentViewingItem;
    if (!it) return;
    document.getElementById('pdpSizeButtons').innerHTML = `<span class="nx-note">Size</span><div class="pdp-size-btn active nx-one">${it.size}</div><span class="nx-note">Only size available</span>`;
    document.getElementById('pdpActionArea').innerHTML = it.sold
      ? `<button class="btn btn-dark" style="width:100%;" disabled>Already claimed (1-of-1 sold out)</button>`
      : `<button class="btn" style="width:100%;" onclick="claimFromPDP()">Add to cart</button><button class="btn btn-outline" style="width:100%;" onclick="nxBuyNow()">Buy it now</button>`;
  };

  window.nxBuyNow = function () {
    const it = currentViewingItem;
    if (!it || it.sold) return;
    if (!bag.find(i => i.id === it.id)) {
      if (bag.length === 0) currentTrackingId = generateTrackingId();
      bag.push(it);
    }
    closeModal('quickViewModal');
    updateBagUI();
    openCheckout();
  };

  updateBagUI();
})();
