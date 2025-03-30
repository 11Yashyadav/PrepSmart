import "../styles/contact-us.css";

export default function ContactUs() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">
            Thank you for your interest in <span className="font-bold">PrepSmart</span>.
          </p>
          <p className="mb-4">
            Whether you're a user seeking assistance, a partner exploring collaboration, or an investor interested in supporting our mission, we welcome your inquiries.
          </p>
          <p className="mb-4">
            Use the form below to send us a direct message. We aim to respond within 24 hours.
          </p>
  
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 rounded-md text-black" />
            <input type="email" placeholder="Email" className="w-full p-3 rounded-md text-black" />
            <textarea placeholder="Query" rows={4} className="w-full p-3 rounded-md text-black"></textarea>
            <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-semibold hover:opacity-90">
              Submit
            </button>
          </form>
  
          <p className="mt-6 text-sm text-gray-400">
            Thank you for considering <span className="font-bold">PrepSmart</span>. Whether you're a user, partner, or potential investor, we appreciate your interest and look forward to the opportunity to connect.
          </p>
        </div>
      </div>
    );
  }
  