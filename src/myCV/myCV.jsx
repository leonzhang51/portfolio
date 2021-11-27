import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import style from "./mycv.module.css";

export default function MyCV() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setPageNumber(1);
  }
  return (
    <main>
      <section>
        <article className={style.title}>
          <a href={process.env.PUBLIC_URL + "/leonzhang_ux_designer.docx"}>
            Download in Word Format
          </a>
          <a href={process.env.PUBLIC_URL + "/leonzhang_ux_designer.pdf"}>
            Download in Pdf Format
          </a>
        </article>
        <article className={style.content}>
          <Document
            file={process.env.PUBLIC_URL + "/leonzhang_ux_designer.pdf"}
            onLoadSuccess={onDocumentLoadSuccess}
            className={style.content}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </article>
      </section>
    </main>
  );
}
