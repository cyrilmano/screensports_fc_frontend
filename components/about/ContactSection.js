export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Screensport FC?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards your football dreams. Contact us today
            to learn more about our programs and enrollment process.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@screensportfc.com</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-gray-300">123 Academy Drive, Sports City</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
            >
              <span>💬</span> Chat on WhatsApp
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-secondary transition-colors">
              Request Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}