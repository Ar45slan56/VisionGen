import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-24 bg-gradient-to-r from-[#1e3a8a] to-[#06b6d4] text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4">Let’s Build Something Brilliant</h1>
        <p className="text-lg max-w-xl mx-auto">We specialize in AI and Web solutions tailored to your business goals.</p>
      </section>

      <section className="py-12 px-4">
        <ContactForm />
      </section>
    </div>
  )
}
