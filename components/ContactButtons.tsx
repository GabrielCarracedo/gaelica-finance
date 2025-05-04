import React from "react";

export function ContactButtons() {
  // Troque o número do WhatsApp aqui quando quiser!
  const whatsappNumber = "5511999168448";
  const whatsappMessage = "Hello, I'd like to know more about Gaelica Finance's services.";
  const email = "contact@gaelicafinance.com";
  const subject = "Contact via Gaelica website";
  const body = "Hello, I would like to know more about Gaelica Finance's services.";

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold py-3 px-6 rounded-lg border border-border transition"
        style={{ minWidth: 160 }}
      >
        {/* SVG oficial do WhatsApp */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
            fill="none"
          >
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path
              d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.122 1.392-.208.237-.414.266-.769.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.771-2.108-1.98-2.463-.208-.355-.022-.546.156-.723.16-.159.355-.414.533-.622.178-.208.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.095-2.637-.288-.692-.581-.597-.8-.608-.208-.009-.444-.011-.68-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.951 0 1.74 1.267 3.422 1.444 3.659.178.237 2.5 3.82 6.055 5.209.847.292 1.507.466 2.023.596.85.204 1.624.175 2.236.106.682-.076 2.104-.859 2.402-1.691.297-.832.297-1.545.208-1.691-.089-.148-.326-.237-.681-.414z"
              fill="#fff"
            />
          </svg>
        </span>
        WhatsApp
      </a>

      {/* E-mail */}
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
        className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-foreground font-bold py-3 px-6 rounded-lg border border-border transition"
        style={{ minWidth: 160 }}
      >
        {/* SVG de e-mail */}
        <span style={{ display: 'flex', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
            <rect width="24" height="24" rx="12" fill="#0072C6"/>
            <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
        E-mail
      </a>
    </div>
  );
}
