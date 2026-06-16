"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [submitResult, setSubmitResult] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Swapped to SyntheticEvent to clear your specific linter warning
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setIsSubmitting(true);
    setSubmitResult("idle");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    // Safely assert the environment variable as a string
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string;
    
    if (!accessKey) {
      console.error("Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY environment variable");
      setSubmitResult("error");
      setIsSubmitting(false);
      return;
    }
    
    formData.append("access_key", accessKey);
    formData.append("from_name", "Atmik Bharat Inbound Engine");
    
    const productType = formData.get("product_type") || "General";
    formData.append("subject", `New Project Inquiry: ${productType}`);

    // DELETED the duplicate hardcoded access_key here!

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        console.error("Web3Forms responded with status", response.status);
        setSubmitResult("error");
        return;
      }

      const data: { success: boolean; message?: string } = await response.json();

      if (data && data.success) {
        setSubmitResult("success");
        formElement.reset(); // Clears the form visually
      } else {
        console.error("Web3Forms error response:", data);
        setSubmitResult("error");
      }
    } catch (error: unknown) { 
      console.error("Form transmission fault:", error);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="resources" className="section-padding bg-cream py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Left Column: Form */}
          <div>
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Didn't Find What You Were Looking For? We've got more answers waiting for you!" 
            />

            <form onSubmit={handleSubmit} id="contact-form" className="mt-8 space-y-10 rounded-3xl bg-white p-6 md:p-8 shadow-sm">
              <h3 className="font-display text-xl font-medium text-slate-900">
                Get in touch with our experts
              </h3>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  required
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>
              
              <select name="product_type" required className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600">
                <option value="">Select a Budget Range</option>
                <option value="Evaluating">Still Evaluating</option>
                <option value="<50K">Less than $50K</option>
                <option value="50K-100K">$50K - $100K</option>
                <option value="100K-250K">$100K - $250K</option>
                <option value=">250K">More than $250K</option>
              </select>
              
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-blue-600 py-3.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending Request..." : "Submit Inquiry"}
              </button>

              {/* UX: UI Feedback States */}
              {submitResult === "success" && (
                <div className="mt-4 rounded-xl bg-green-50 p-4 text-sm text-green-800 border border-green-200">
                  Success! Your inquiry has been sent. Our experts will reach out shortly.
                </div>
              )}
              {submitResult === "error" && (
                <div className="mt-4 rounded-xl bg-red-50 p-4 text-sm text-red-800 border border-red-200">
                  Something went wrong. Please check your network connection or try again later.
                </div>
              )}
            </form>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="space-y-3 pt-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left"
                >
                  <div className="flex gap-4">
                    <span className="font-mono text-lg font-medium text-blue-600/50 pt-1">
                      [{String(index + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="font-semibold text-slate-900 text-lg leading-snug">{faq.question}</h3>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    className="shrink-0 text-2xl text-blue-600 font-light"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="border-t border-slate-100 px-6 pb-6 pt-4 text-base leading-relaxed text-slate-600 ml-12">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
