import "./WhatsAppFloat.css";

export default function WhatsAppFloat() {
  const phoneNumber = "923471294234"; // Replace with your WhatsApp number

  const message = encodeURIComponent(
    "Hello Pool Captain! I am interested in your swimming pool services. Please share more details."
  );

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappURL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pool Captain on WhatsApp"
    >
      <span className="whatsapp-tooltip">
        Chat with us on WhatsApp
      </span>

      <svg
        viewBox="0 0 32 32"
        className="whatsapp-icon"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M16.02 3C8.85 3 3.02 8.82 3.02 15.99c0 2.29.6 4.54 1.75 6.51L3 29l6.68-1.75a13 13 0 0 0 6.33 1.63h.01c7.17 0 13-5.82 13-12.99a12.9 12.9 0 0 0-3.81-9.19A12.9 12.9 0 0 0 16.02 3Zm0 23.7h-.01a10.8 10.8 0 0 1-5.5-1.5l-.39-.23-3.97 1.04 1.06-3.87-.25-.4a10.7 10.7 0 0 1-1.65-5.75c0-5.92 4.82-10.74 10.73-10.74 2.87 0 5.56 1.12 7.59 3.15a10.66 10.66 0 0 1 3.14 7.6c0 5.92-4.82 10.7-10.75 10.7Zm5.9-8.03c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.73.16-.21.32-.83 1.04-1.02 1.25-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.76-1-2.41-.27-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.7s1.16 3.13 1.32 3.35c.16.21 2.28 3.48 5.53 4.88.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.52-.08-.14-.29-.22-.62-.38Z"
        />
      </svg>

    </a>
  );
}