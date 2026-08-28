const enquiryHref =
  'mailto:hq@rogergroup.xyz?subject=AuditPDF.com%20acquisition%20enquiry'

export default function HomePage() {
  return (
    <main>
      <div className="page-shell">
        <header className="masthead">
          <a className="wordmark" href="/" aria-label="AuditPDF.com home">
            AuditPDF<span>.com</span>
          </a>
          <p className="status">
            <span className="status-dot" />
            <span className="status-text">Available for acquisition</span>
          </p>
        </header>

        <section className="hero" aria-labelledby="page-title">
          <div className="eyebrow">A useful name for accountable work</div>
          <h1 id="page-title">
            Own the domain<br />
            <em>AuditPDF.com</em>
          </h1>
          <p className="lead">
            A direct, memorable .com for audit software, compliance reports,
            assessment tools or document automation.
          </p>
          <a className="enquiry" href={enquiryHref}>
            Make an acquisition enquiry
            <span aria-hidden="true">↗</span>
          </a>
        </section>

        <section className="details" aria-label="Acquisition details">
          <article>
            <p className="number">01</p>
            <h2>The domain</h2>
            <p>
              AuditPDF.com is registered until 28 March 2027. The former
              AuditBrief product has been retired and is no longer accepting
              accounts, files or payments.
            </p>
          </article>
          <article>
            <p className="number">02</p>
            <h2>The transfer</h2>
            <p>
              Enquiries are invited for the domain name. Any source-code
              transfer would require a separate agreement and technical review.
            </p>
          </article>
          <article>
            <p className="number">03</p>
            <h2>The boundary</h2>
            <p>
              No customer, account, uploaded-file or analytics data is included
              in a sale. A buyer receives only the assets expressly agreed.
            </p>
          </article>
        </section>

        <footer>
          <p>Formerly AuditBrief · Product retired 28 August 2026</p>
          <a href={enquiryHref}>hq@rogergroup.xyz</a>
        </footer>
      </div>
    </main>
  )
}
