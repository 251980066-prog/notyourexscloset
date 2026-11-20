(function () {
  const css = `
.vault-door{background-color:var(--dark)}
.vault-left{border-right:2px solid #3a3a3a}
.vault-right{border-left:2px solid #3a3a3a}
.cube-face{font-family:'Inter Tight',Arial,sans-serif;font-weight:800;letter-spacing:-.02em;border:1.5px solid #3a3a3a;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.face-front{color:var(--red)}
.intro-title-3d{font-family:'Inter Tight',Arial,sans-serif;font-weight:800;font-size:clamp(1.8rem,6vw,3.6rem);letter-spacing:-.04em;line-height:1;padding:20px 36px;background:#161616;border:1.5px solid #3a3a3a;border-radius:28px;box-shadow:none}
.intro-sub{font-family:'Inter Tight',Arial,sans-serif;font-weight:500;letter-spacing:.14em;color:#9a9a9a}
.shop-now-3d{font-family:'Inter Tight',Arial,sans-serif;font-weight:600;letter-spacing:-.01em;font-size:clamp(.95rem,2vw,1.05rem);padding:16px 36px;border-radius:999px;box-shadow:none}
.shop-now-3d:hover{background:#ececec;transform:translateY(-2px)!important;box-shadow:none}
.shop-now-3d:active{transform:translateY(0)!important;box-shadow:none}`;
  const st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
})();
