import { useState } from "react";
import "./App.css";

const GOAL = 80000;
const RAISED = 21500;
const PERCENT = Math.min(100, Math.round((RAISED / GOAL) * 100));

export default function App() {

  function handleCopy(event, text) {
    navigator.clipboard.writeText(text);

    const btn = event.target;
    const original = btn.textContent;

    btn.textContent = "Copied ✓";
    btn.classList.add("copied");

    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1200);
  }

  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div className="layout">
      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-left">
          coowner<span>.estate</span>
        </div>
        <div className="topbar-right">
          <button
            className={`lang-btn ${lang === "ua" ? "active" : ""}`}
            onClick={() => setLang("ua")}
          >
            UA
          </button>
          <button
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>
      </div>

      {/* HERO */}
      <header className="hero-new">
  <div className="hero-overlay"></div>

  <div className="hero-content fade-in">
    <span className="badge">
      {lang === "en" ? "RWA Pilot Project" : "Пілотний RWA-проєкт"}
    </span>

    <h1>{t.heroTitle}</h1>
    <p className="hero-sub">{t.heroSubtitle}</p>

    <div className="hero-buttons">
      <a href="#payments" className="btn primary big">
        {t.btnContribute}
      </a>
      <a href="#about" className="btn secondary big">
        {t.btnLearnMore}
      </a>
    </div>
  </div>
</header>

{/* PROGRESS CARD - NEW DESIGN */}
<section className="progress-section">
  <div className="progress-card-new">
    
    <div className="progress-amounts">
      <div className="raised">
        ${RAISED.toLocaleString()}
      </div>
      <div className="goal">
        {lang === "en" ? "raised of" : "зібрано з"} ${GOAL.toLocaleString()}
      </div>
    </div>

    <div className="progress-bar-new">
      <div 
        className="progress-fill-new" 
        style={{ width: `${PERCENT}%` }} 
      ></div>
    </div>

    <div className="progress-bottom">
      <div className="percent">{PERCENT}%</div>
      <div className="note">{t.progressNote}</div>
    </div>

  </div>
</section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>{t.aboutTitle}</h2>
        <p>{t.aboutText1}</p>
        <p>{t.aboutText2}</p>
      </section>

      {/* WHY */}
      <section className="section">
        <h2>{t.whyTitle}</h2>
        <p>{t.whyText1}</p>
        <p>{t.whyText2}</p>
      </section>

      {/* ABOUT THE APARTMENT */}
      <section className="section section-muted">

        <h2>{t.apartmentTitle}</h2>
<p className="apt-sub">{t.apartmentSubtitle}</p>

<div className="property-grid">

  {/* PRICE */}
  <div className="property-card fade-in">
    <div className="icon-wrap">
      <svg
        className="prop-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M9 9h4a2 2 0 0 1 0 4h-2.5M11 7v10" />
      </svg>
    </div>
    <h3>{t.aptPriceLabel}</h3>
    <p className="value">$80,000</p>
  </div>

  {/* LOCATION */}
  <div className="property-card fade-in">
    <div className="icon-wrap">
      <svg
        className="prop-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 22s7-7.1 7-12a7 7 0 0 0-14 0c0 4.9 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </div>
    <h3>{t.aptLocationLabel}</h3>
    <p className="value">{t.aptLocation}</p>
  </div>

  {/* AREA */}
  <div className="property-card fade-in">
    <div className="icon-wrap">
      <svg
        className="prop-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 4v16M4 9h16" />
      </svg>
    </div>
    <h3>{t.aptAreaLabel}</h3>
    <p className="value">{t.aptArea}</p>
  </div>

  {/* PLAN / TYPE */}
  <div className="property-card fade-in">
    <div className="icon-wrap">
      <svg
        className="prop-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v8h12M9 13v8M3 9h6" />
      </svg>
    </div>
    <h3>{t.aptPlanLabel}</h3>
    <p className="value">{t.aptPlan}</p>
  </div>

</div>

<p className="apt-note">{t.apartmentNote}</p>


      </section>

{/* APARTMENT GALLERY */}
<section className="section">
  <h2>Apartment Gallery</h2>
  <p style={{ opacity: 0.7 }}>
    Real photos & developer renders. Visual confirmation of the asset.
  </p>
  {/* APARTMENT VIDEO TOUR */}
<section className="section">
  <h2>{lang === "en" ? "Apartment Video Tour" : "Відеоогляд квартири"}</h2>
  <p>
    {lang === "en"
      ? "Short video overview of the apartment and surrounding area."
      : "Короткий відеоогляд квартири та прилеглої території."}
  </p>

  <div className="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/u-V0nVualeE"
      title="Apartment Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>

    <div className="gallery-grid">
    {[1, 2, 3, 4, 5, 6].map((num) => (
      <a
        key={num}
        href={`/apartment/apt-${num}.jpg`}
        target="_blank"
        rel="noreferrer"
        className="gallery-item"
      >
        <img
          src={`/apartment/apt-${num}.jpg`}
          alt={`Apartment ${num}`}
        />
      </a>
    ))}
  </div>

  <div className="gallery-actions">
    <a
      href="https://svitlopark.ua/en/"
      target="_blank"
      rel="noreferrer"
      className="btn secondary"
    >
      View developer website
    </a>
  </div>
</section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>{t.howTitle}</h2>
        <div className="how-grid">
          {t.howSteps.map((step, idx) => (
            <div className="how-card" key={idx}>
              <div className="how-icon">{idx + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* UPDATE CHANNELS */}
<section id="updates" className="section">
  <h2>{t.updatesTitle}</h2>
  <p>{t.updatesSubtitle}</p>

 <div className="updates-grid">

  {/* TELEGRAM */}
  <div className="updates-card row">
    <div className="icon-wrap">
      <svg viewBox="0 0 240 240" className="icon-svg">
        <path fill="#2AABEE" d="M120 0C53.73 0 0 53.73 0 120s53.73 120 120 120 120-53.73 120-120S186.27 0 120 0z" />
        <path fill="#fff" d="M175.4 68.6L152.3 173c-1.7 7.6-6.2 9.4-12.6 5.9l-35-25.8-16.9 16.3c-1.9 1.9-3.6 3.6-7.3 3.6l2.6-36.9 67.2-60.7c2.9-2.6-.6-4-4.5-1.4l-83 52.3-35.8-11.2c-7.8-2.4-7.9-7.8 1.6-11.6l139.9-54c6.4-2.3 12.1 1.6 10 11.8z" />
      </svg>
    </div>
    <div className="text-wrap">
      <h3>Telegram</h3>
      <p>{t.updatesTelegram}</p>
      <a
  href="https://t.me/coowner_estate"
  className="btn small secondary"
  target="_blank"
  rel="noreferrer"
>
  Telegram
</a>

    </div>
  </div>

  {/* X / TWITTER */}
  <div className="updates-card row">
    <div className="icon-wrap">
      <svg viewBox="0 0 24 24" className="icon-svg">
        <path fill="#fff" d="M18.36 2H21l-6.61 7.56L22 22h-7.38l-4.82-6.32L4.91 22H2l7.11-8.13L2.4 2h7.47l4.21 5.6L18.36 2zM17 20.27h1.84L8.33 4.17H6.4L17 20.27z"/>
      </svg>
    </div>
    <div className="text-wrap">
      <h3>X / Twitter</h3>
      <p>{t.updatesX}</p>
      <a
  href="https://x.com/Coowner_Estate"
  className="btn small secondary"
  target="_blank"
  rel="noreferrer"
>
  X / Twitter
</a>

    </div>
  </div>

  {/* EMAIL */}
  <div className="updates-card row">
    <div className="icon-wrap">
      <svg viewBox="0 0 24 24" className="icon-svg">
        <path fill="#fff" d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </div>
    <div className="text-wrap">
      <h3>Email</h3>
      <p>{t.updatesEmail}</p>
      <a
  href="mailto:contact@coowner.estate"
  className="btn small secondary"
>
  Email
</a>

    </div>
  </div>

</div>

</section>  {/* ← ЦЕ ЗАКРИВАЄ UPDATE CHANNELS */}

{/* LATEST UPDATES */}
<section className="section">
  <h2>{t.latestTitle}</h2>

  <div className="updates-timeline">
    {t.latestList.map((item, idx) => (
      <div key={idx} className="timeline-item">
        <div className="timeline-dot" />
        <div>
          <h4 className="timeline-title">{item.title}</h4>
          <p className="timeline-text">{item.text}</p>
        </div>
      </div>
    ))}
  </div>
</section>

{/* TRANSPARENCY & PROOF — FINAL MERGED BLOCK */}
<section className="section section-muted">
  <h2>
    {lang === "en" ? "Transparency & Proof" : "Прозорість і підтвердження"}
  </h2>

  <p className="transparency-subtitle">
    {lang === "en"
      ? "This project is fully transparent. All documents and payment confirmations related to the apartment will be shared with supporters. Public updates are posted openly."
      : "Проєкт повністю прозорий. Усі документи та підтвердження оплат за квартиру будуть надані підтримувачам. Публічні оновлення публікуються відкрито."}
  </p>

  <div className="proof-grid">

    <div className="proof-card">
      <h3>
        {lang === "en" ? "My own contribution" : "Мій власний внесок"}
      </h3>
      <p>
        {lang === "en"
          ? "Before mobilization, I invested my personal savings into this apartment. This campaign is not starting from zero."
          : "До мобілізації я вклав власні заощадження у цю квартиру. Цей збір — не з нуля."}
      </p>
      <div className="proof-img-placeholder">Coming soon</div>
    </div>

    <div className="proof-card">
      <h3>
        {lang === "en" ? "Developer cabinet" : "Кабінет забудовника"}
      </h3>
      <p>
        {lang === "en"
          ? "A redacted screenshot from the developer’s online portal will be shown here to confirm that the apartment and payments are real."
          : "Тут буде показано зацензурований скрін із кабінету забудовника для підтвердження реальності квартири та платежів."}
      </p>
      <div className="proof-img-placeholder">Coming soon</div>
    </div>

    <div className="proof-card">
      <h3>
        {lang === "en" ? "Payment confirmations" : "Підтвердження платежів"}
      </h3>
      <p>
        {lang === "en"
          ? "All future payments, confirmations, and updates will be published here and on Telegram / X."
          : "Усі нові платежі, підтвердження та оновлення публікуватимуться тут і в Telegram / X."}
      </p>
      <div className="proof-img-placeholder">Coming soon</div>
    </div>

  </div>

  <p className="transparency-note">
    {lang === "en"
      ? "This project is personal, transparent fundraising. Not an investment product. No guaranteed returns."
      : "Це особистий прозорий фандрейзинг. Не є інвестиційним продуктом. Без гарантій прибутку."}
  </p>
</section>

{/* LEGAL & PAYMENT PROOF */}
<section className="section section-muted">
  <h2>{t.legalProofTitle}</h2>
  <p className="proof-desc">{t.legalProofDesc}</p>

  <div className="proof-grid">

    {/* Contract */}
    <div className="proof-card">
      <h3>{t.legalProofContract}</h3>
      <p>{t.legalProofContractText}</p>

      <a
        href="/docs/contract-preview.jpg"
        target="_blank"
        rel="noreferrer"
        className="btn small secondary"
      >
        {t.viewDocument}
      </a>
    </div>

    {/* Payment Receipt */}
    <div className="proof-card">
      <h3>{t.legalProofReceipt}</h3>
      <p>{t.legalProofReceiptText}</p>

      <a
        href="/docs/payment-receipt.pdf"
        target="_blank"
        rel="noreferrer"
        className="btn small secondary"
      >
        {t.viewDocument}
      </a>
    </div>

    {/* Private documents */}
    <div className="proof-card">
      <h3>{t.legalProofPrivate}</h3>
      <p>{t.legalProofPrivateText}</p>

      <a
        href="mailto:safej2013@gmail.com?subject=Request for full documentation&body=Hello,%20I%20would%20like%20to%20request%20full%20legal%20and%20payment%20documentation%20for%20the%20CoOwner%20Estate%20project."
        className="btn small primary"
      >
        {t.requestFull}
      </a>
    </div>

  </div>

  <p className="proof-note">{t.legalProofNote}</p>
</section>

{/* LIVE ASSET STATUS */}
<section className="section asset-status">
  <h2>Live Asset Status</h2>

  <div className="asset-grid">
    <div className="asset-card">
      <div className="asset-label">Asset</div>
      <div className="asset-value">Apartment in Kyiv</div>
    </div>

    <div className="asset-card">
      <div className="asset-label">Total Price</div>
      <div className="asset-value">$80,000</div>
    </div>

    <div className="asset-card">
      <div className="asset-label">Paid by Owner</div>
      <div className="asset-value">$21,000</div>
    </div>

    <div className="asset-card">
      <div className="asset-label">Raised via Campaign</div>
      <div className="asset-value">$0</div>
    </div>

    <div className="asset-card highlight">
      <div className="asset-label">Remaining</div>
      <div className="asset-value">$59,000</div>
    </div>

    <div className="asset-card">
      <div className="asset-label">Status</div>
      <div className="asset-value">Under ownership finalization</div>
    </div>
  </div>
</section>

{/* PAYMENTS */}
<section id="payments" className="section">
  <h2>{t.paymentsTitle}</h2>
  <p>{t.paymentsIntro}</p>

  {/* BANK GRID */}
  <div className="bank-grid">

    {/* PAYPAL */}
    <div className="card pay-card">
      <h3>PayPal</h3>
      <p>{t.paypalText}</p>
      <a href="YOUR_PAYPAL_LINK" className="btn small primary" target="_blank">
        PayPal Donation
      </a>
    </div>

    {/* MONOBANK */}
    <div className="card pay-card">
      <h3>Monobank JAR</h3>
      <p>UAH donations via Monobank jar link.</p>
      <a href="https://send.monobank.ua/jar/2BeUsH4dxp" className="btn small primary" target="_blank">
        Donate in UAH (Monobank)
      </a>
    </div>

    {/* PUMB */}
    <div className="card pay-card">
      <h3>PUMB UAH</h3>
      <p>UAH donations via PUMB mobile app link.</p>
      <a href="https://mobile-app.pumb.ua/Acky" className="btn small primary" target="_blank">
        Donate in UAH (PUMB)
      </a>
    </div>

    {/* STRIPE */}
    <div className="card pay-card">
      <h3>Card Payment</h3>
      <p>{t.stripeText}</p>
      <button className="btn small secondary disabled" disabled>
        Coming soon
      </button>
    </div>
  </div>
<h3 className="crypto-headline">Preferred global method</h3>

  {/* CRYPTO GRID */}
<div className="crypto-grid">

  {/* ETH */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/eth.png" className="crypto-icon" /> ETH 
    </h3>

    <img src="/qrs/eth-qr.png" className="qr-small" alt="ETH QR" />
    <p className="crypto-address">0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c")}
    >
      Copy
    </button>
  </div>

  {/* SOL */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/sol.png" className="crypto-icon" /> SOL
    </h3>

    <img src="/qrs/sol-qr.png" className="qr-small" alt="SOL QR" />
    <p className="crypto-address">2Whw2AwBkSXra7gTrbb3PMxrosdKKGLNFYizB1ZNi4j1</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "2Whw2AwBkSXra7gTrbb3PMxrosdKKGLNFYizB1ZNi4j1")}
    >
      Copy
    </button>
  </div>

  {/* BTC */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/btc.png" className="crypto-icon" alt="BTC" /> BTC
        
    </h3>

    <img src="/qrs/btc-qr.png" className="qr-small" alt="BTC QR" />
    <p className="crypto-address">bc1qunfjgglppdyfpj0g3lqdlwhwt4watgnlzd3v2d</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "bc1qunfjgglppdyfpj0g3lqdlwhwt4watgnlzd3v2d")}
    >
      Copy
    </button>
  </div>

  {/* BASE */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/base.png" className="crypto-icon" /> BASE
    </h3>

    <img src="/qrs/base-qr.png" className="qr-small" alt="BASE QR" />
    <p className="crypto-address">0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c")}
    >
      Copy
    </button>
  </div>

  {/* POLYGON */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/polygon.png" className="crypto-icon" /> POLYGON
    </h3>

    <img src="/qrs/polygon-qr.png" className="qr-small" alt="Polygon QR" />
    <p className="crypto-address">0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c")}
    >
      Copy
    </button>
  </div>

  {/* BNB */}
  <div className="card pay-card">
    <h3 className="crypto-title">
      <img src="/icons/bnb.png" className="crypto-icon" /> BNB Chain
    </h3>

    <img src="/qrs/bnb-qr.png" className="qr-small" alt="BNB QR" />
    <p className="crypto-address">0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c</p>

    <button
      className="btn small secondary copy-btn"
      onClick={(e) => handleCopy(e, "0x35c4042b3266cdcee2761b6bda3bbbdaa5653d5c")}
    >
      Copy
    </button>
  </div>

</div>

  <p className="note">
    {t.freeEntryNote}{" "}
    <a href="https://forms.gle/BLELPfZdyvXvGUV7A" target="_blank">
  {t.freeEntryLink}
</a>

  </p>
</section>

      {/* WHO I AM */}
      <section className="section section-muted">
        <h2>{t.whoTitle}</h2>
        <p>{t.whoText1}</p>
        <p>{t.whoText2}</p>
      </section>

      {/* RISKS */}
      <section className="section section-muted">
        <h2>{t.risksTitle}</h2>
        <div className="risks-box">
          {t.risksList.map((item, idx) => (
            <div key={idx} className="risk-item">
              <div className="risk-number">{idx + 1}</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

{/* FINAL CTA */}
<section className="section final-cta">
  <h2>{t.ctaTitle}</h2>
  <p>{t.ctaText}</p>

  <div className="cta-buttons">
    <a href="#payments" className="btn big primary">
      {t.ctaSupportBtn}
    </a>

    <a href="#updates" className="btn big secondary">
  {t.ctaFollowBtn}
</a>

  </div>
</section>

{/* SEO SECTION — STRICT STYLE */}
<section className="section section-muted">
  <h2>
    {lang === "en"
      ? "Why this project is transparent and trustworthy"
      : "Чому цей проєкт прозорий і заслуговує на довіру"}
  </h2>

  <p>
    {lang === "en"
      ? "CoOwner Estate is a transparent pilot initiative created by a Ukrainian soldier who continues to serve while fulfilling personal financial obligations. The project focuses on closing the remaining payment for a real apartment in Kyiv — a verified asset with clear documentation and public updates."
      : "CoOwner Estate — це прозора ініціатива українського військового, який продовжує службу та водночас виконує свої фінансові зобов’язання. Проєкт спрямований на закриття залишкової оплати за реальну київську квартиру — перевірений актив із чіткою документацією та відкритими оновленнями."}
  </p>

  <p>
    {lang === "en"
      ? "Unlike traditional fundraising, this model combines donation, symbolic co-ownership, and real-world-asset (RWA) principles. Every contribution supports a tangible housing goal and helps establish a modern, transparent approach to micro-funding property recovery in Ukraine."
      : "На відміну від класичного збору, ця модель поєднує донат, символічну співвласність та принципи real-world-assets (RWA). Кожна підтримка спрямована на конкретну житлову ціль і допомагає формувати сучасний та чесний підхід до мікрофінансування житла в Україні."}
  </p>

  <p>
    {lang === "en"
      ? "This project is not an investment product and does not promise financial returns. It is voluntary support that helps secure stable housing after military service and tests a responsible RWA model for Ukraine’s post-war rebuilding."
      : "Цей проєкт не є інвестиційним продуктом і не обіцяє прибутку. Це добровільна підтримка, що допомагає забезпечити стабільне житло після служби та тестує відповідну RWA-модель для повоєнного відновлення України."}
  </p>
</section>

<footer className="footer">
  <div className="footer-social">
    <a
      href="https://t.me/coowner_estate"
      target="_blank"
      rel="noreferrer"
      className="footer-link"
    >
      Telegram
    </a>
    <a
      href="https://x.com/Coowner_Estate"
      target="_blank"
      rel="noreferrer"
      className="footer-link"
    >
      X / Twitter
    </a>
    <a
      href="mailto:contact@coowner.estate"
      className="footer-link"
    >
      Email
    </a>
  </div>

  <p>© 2025 coowner.estate</p>
  <p className="footer-legal">{t.legal}</p>
</footer>

    </div>
  );
}

/* TRANSLATIONS */
const translations = {
  en: {
    heroTitle: "Support a Ukrainian soldier. Co-own his future home.",
    heroSubtitle:
      "I’m raising funds transparently to close payments on a small apartment in Kyiv — a place to return after service and a pilot RWA (real-world asset) model.",
    btnContribute: "Contribute",
    btnLearnMore: "Learn more",
    progressTitle: "Campaign progress",
    raised: "Raised",
    progressNote: "Manual update — pilot phase.",
    aboutTitle: "About this mission",
    aboutText1:
      "I serve in the Ukrainian Armed Forces. Before mobilization I invested my own savings into an apartment. After joining the army, regular payments became difficult.",
    aboutText2:
      "Instead of asking for anonymous donations, I’m building a transparent model: donation + symbolic co-ownership + RWA pilot.",
    whyTitle: "Why this project matters",
    whyText1:
      "Housing is stability and a mental anchor — especially important after military service.",
    whyText2:
      "By supporting this project you help secure a real home and test a fair RWA model for future reconstruction.",

    latestTitle: "Latest updates",
    latestList: [
      {
        title: "Campaign launched",
        text: "The pilot fundraising page for the Kyiv apartment is now live.",
      },
      {
        title: "Transparency channel opened",
        text: "Telegram, X, and email channels added for public updates.",
      },
      {
        title: "Crypto support enabled",
        text: "Addresses for USDT/USDC on Solana, TRC-20 and EVM were added.",
      },
    ],

    /* APARTMENT */
    apartmentTitle: "About the apartment",
    apartmentSubtitle:
      "A real, specific Kyiv apartment — not an abstraction. This is where all contributions go.",
    aptPriceLabel: "Price",
    aptLocationLabel: "Location",
    aptAreaLabel: "Area",
    aptPlanLabel: "Type",
    aptLocation: "Kyiv, right bank (safe, well-developed area)",
    aptArea: "68 m², 2-bedroom",
    aptPlan: "Modern layout, ideal for living or rental",
    apartmentNote:
      "The apartment is already partially paid for with my own funds. This campaign helps close the remaining balance.",

    /* HOW IT WORKS */
    howTitle: "How it works",
    howSteps: [
      {
        title: "Choose how to support",
        text: "Donate any amount or join as a symbolic co-owner.",
      },
      {
        title: "Funds go to a real apartment",
        text: "A verifiable Kyiv asset with transparent updates.",
      },
      {
        title: "Transparent updates",
        text: "I publish confirmations and progress publicly.",
      },
      {
        title: "Long-term impact",
        text: "You help secure stable housing after service.",
      },
    ],

    /* UPDATES */
    updatesTitle: "Where updates will be posted",
    updatesSubtitle:
      "Progress reports, confirmations, and important steps are posted openly.",
    updatesTelegram: "Fast updates and photos.",
    updatesX: "Global communication and transparency.",
    updatesEmail: "For personal or direct contact.",

    /* PAYMENTS */
    paymentsTitle: "How to support",
    paymentsIntro: "Choose any method convenient for you.",
    paypalText: "Convenient for international supporters.",
    stripeText: "Card payments via Stripe (link soon).",
    cryptoText: "Crypto is fast, global, and independent.",
    freeEntryNote: "No purchase required to support morally.",
    freeEntryLink: "Free entry form",

    transparencyTitle: "Transparency & Proof",
    transparencySubtitle: "Transparency matters. I publish all confirmations related to this campaign.",

    proof1Title: "My own contribution",
    proof1Text: "Before mobilization, I invested my personal savings into this apartment. This is not a zero-start fundraiser — it is a continuation of what I began myself.",
    proof1Caption: "You will later see the screenshot of the first payment here.",

    proof2Title: "Developer cabinet",
    proof2Text: "A redacted screenshot from the developer’s online portal (with personal data removed) will be shown here to confirm that the apartment and payments are real.",
    proof2Caption: "You will later add the developer portal screenshot.",

    proof3Title: "Payment confirmations",
    proof3Text: "All future payments, confirmations, and updates will be posted here and on Telegram / X.",
    proof3Caption: "This block will show all future payment confirmations.",
legalProofTitle: "Legal & Payment Proof",
legalProofDesc:
  "This project maintains transparency by providing public previews of essential documents and offering full documentation upon secure request.",
legalProofContract: "Contract Preview",
legalProofContractText:
  "A redacted preview of the purchase contract. Sensitive details are removed for privacy.",
legalProofReceipt: "Payment Receipt",
legalProofReceiptText:
  "A confirmation of the owner's initial payment toward the apartment.",
legalProofPrivate: "Full Documentation",
legalProofPrivateText:
  "Full legal and financial documents are available upon request for supporters who need further verification.",
viewDocument: "View document",
requestFull: "Request full documentation",
legalProofNote:
  "Full documentation cannot be published publicly for personal security reasons, but can be shared privately on request.",

    /* WHO I AM */
    whoTitle: "Who I am",
    whoText1:
      "My identity is open, but unit details remain private for security reasons.",
    whoText2:
      "This campaign is about dignity and stability — not pity.",

    ctaTitle: "Be part of something real.",
    ctaText: "Your support helps complete a real home in Kyiv and strengthens a transparent soldier-led initiative. Every contribution brings this mission closer to reality.",
    ctaSupportBtn: "Support the campaign",
    ctaFollowBtn: "Follow updates",

    /* RISKS */
    risksTitle: "Risks & Disclaimers",
    risksList: [
      "This is personal transparent fundraising and an RWA pilot, not an investment product.",
      "No guaranteed profit or return.",
      "Regulations differ per country; contributions may count as donations.",
      "Identity is open, but military details remain private.",
      "Not financial advice or a securities offering.",
    ],
    legal:
      "Not financial advice. Personal transparent fundraising. No public offering.",
  },

  ua: {
    heroTitle: "Підтримай військового. Стань частиною його майбутнього дому.",
    heroSubtitle:
      "Я прозоро збираю кошти, щоб закрити платежі за квартиру в Києві — дім, куди можна повернутися після служби, і пілот RWA-моделі.",
    btnContribute: "Підтримати",
    btnLearnMore: "Детальніше",
    progressTitle: "Прогрес кампанії",
    raised: "Зібрано",
    progressNote: "Сума оновлюється вручну — пілотний етап.",
    aboutTitle: "Про ініціативу",
    aboutText1:
      "Я служу в ЗСУ. До мобілізації вклав власні кошти в квартиру. Після служби оплачувати далі стало складно.",
    aboutText2:
      "Замість просто просити донати, я створюю прозору модель: донат + символічна частка + RWA-пілот.",
    whyTitle: "Чому це важливо",
    whyText1:
      "Дім — це стабільність і точка повернення після служби.",
    whyText2:
      "Підтримуючи проєкт, ви зберігаєте конкретний дім і тестуєте чесну RWA-модель.",

    latestTitle: "Останні оновлення",
    latestList: [
      {
        title: "Запуск кампанії",
        text: "Пілотна сторінка збору на київську квартиру тепер активна.",
      },
      {
        title: "Додано канали прозорості",
        text: "Telegram, X та email підключені для відкритих оновлень.",
      },
      {
        title: "Додано криптопідтримку",
        text: "Додано адреси для USDT/USDC на Solana, TRC-20 та EVM.",
      },
    ],

    /* APARTMENT */
    apartmentTitle: "Про квартиру",
    apartmentSubtitle:
      "Реальна київська квартира — жодних абстракцій. Саме на неї йдуть всі внески.",
    aptPriceLabel: "Вартість",
    aptLocationLabel: "Розташування",
    aptAreaLabel: "Площа",
    aptPlanLabel: "Тип",
    aptLocation: "Київ, правий берег (безпечно, розвинений район)",
    aptArea: "68 м², двокімнатна",
    aptPlan: "Сучасне планування, комфортне для життя чи оренди",
    apartmentNote:
      "Частину вартості вже оплачено моїми власними коштами. Кампанія допомагає закрити залишок.",

    /* HOW */
    howTitle: "Як це працює",
    howSteps: [
      {
        title: "Обираєте спосіб підтримки",
        text: "Донат або символічна частка.",
      },
      {
        title: "Кошти йдуть на реальну квартиру",
        text: "Перевіряємий актив у Києві.",
      },
      {
        title: "Прозорі оновлення",
        text: "Публікую підтвердження і прогрес.",
      },
      {
        title: "Довгостроковий ефект",
        text: "Допомога з житлом після служби.",
      },
    ],

    /* UPDATES */
    updatesTitle: "Де будуть оновлення",
    updatesSubtitle:
      "Публікую звіти, підтвердження та ключові кроки у відкритих каналах.",
    updatesTelegram: "Швидкі оновлення та фото.",
    updatesX: "Глобальна прозорість.",
    updatesEmail: "Для персонального контакту.",

    /* PAYMENTS */
    paymentsTitle: "Як підтримати",
    paymentsIntro: "Обирайте зручний спосіб.",
    paypalText: "Для міжнародних переказів.",
    stripeText: "Оплата карткою (посилання скоро).",
    cryptoText: "Крипта — швидко та без кордонів.",
    freeEntryNote: "Підтримати можна і без внесків.",
    freeEntryLink: "Форма підтримки", 
    
    transparencyTitle: "Прозорість та підтвердження",
    transparencySubtitle: "Прозорість — ключова. Я публікую всі підтвердження, пов’язані з цією кампанією.",

    proof1Title: "Мій власний внесок",
    proof1Text: "Я вже вклав власні заощадження в цю квартиру до мобілізації. Це не збір з нуля — це продовження того, що я почав сам.",
    proof1Caption: "Тут буде розміщений скріншот першого платежу.",

    proof2Title: "Кабінет забудовника",
    proof2Text: "Тут буде розміщено зацензурований скріншот з порталу забудовника (без особистих даних), щоб показати, що квартира та платежі — реальні.",
    proof2Caption: "Пізніше додаси скрін із кабінету забудовника.",

    proof3Title: "Підтвердження платежів",
    proof3Text: "Усі нові платежі, підтвердження та оновлення я публікуватиму тут і в Telegram / X.",
    proof3Caption: "Тут з’являтимуться нові підтвердження платежів.",
legalProofTitle: "Юридичні документи та підтвердження оплат",
legalProofDesc:
  "Проєкт забезпечує прозорість, надаючи публічні прев’ю ключових документів та можливість отримати повний пакет документів за приватним запитом.",
legalProofContract: "Попередній перегляд договору",
legalProofContractText:
  "Зацензурований фрагмент договору купівлі квартири. Конфіденційні дані приховані.",
legalProofReceipt: "Квитанція про оплату",
legalProofReceiptText:
  "Підтвердження першого внеску власника за квартиру.",
legalProofPrivate: "Повний пакет документів",
legalProofPrivateText:
  "Повні юридичні та фінансові документи доступні за запитом для підтримувачів, яким потрібна додаткова перевірка.",
viewDocument: "Переглянути документ",
requestFull: "Запитати повний пакет",
legalProofNote:
  "Повні документи не можуть бути опубліковані відкрито з міркувань безпеки, але надаються приватно за запитом.",

    whoTitle: "Хто я",
    whoText1:
      "Мою особу можна перевірити, але деталі служби не публікую.",
    whoText2:
      "Це проєкт про гідність і стабільність.",

    ctaTitle: "Станьте частиною реальної справи.",
    ctaText: "Ваша підтримка допомагає завершити оплату за реальну квартиру в Києві та зміцнює прозору ініціативу, яку веде військовий. Кожен внесок наближає цю місію до реальності.",
    ctaSupportBtn: "Підтримати кампанію",
    ctaFollowBtn: "Стежити за оновленнями",

    risksTitle: "Ризики та застереження",
    risksList: [
      "Це прозорий особистий фандрейзинг та RWA-пілот, а не інвестпродукт.",
      "Повернення чи прибуток не гарантуються.",
      "У різних країнах внески трактуються по-різному.",
      "Особу можна перевірити — деталі служби закриті.",
      "Не є фінансовою порадою чи офертою.",
    ],
    legal:
      "Не є інвестпродуктом. Особистий фандрейзинг. Без фінансової поради.",
  },
};






