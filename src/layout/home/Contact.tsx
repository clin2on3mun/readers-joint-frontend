import AppFeatureImage from "@/components/contact/AppFeatureImage";
import ContactForm from "@/components/contact/ContactForm";


export default function Contact() {
  return (
    <section className="bg-background" id="contact">
        <section className="max-w-299.5 grid-col-1 grid md:grid-cols-2 gap-12 space-y-6 mx-auto py-20 px-4">
            <AppFeatureImage/>
            <ContactForm/>
        </section>
        
    </section>
  )
}
