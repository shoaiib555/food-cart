import React from "react";
import Heading from "../../components/Heading/Heading";
const PrivacyPolicy = () => {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-10 pt-30">
        {/* heading */}
        <div className="text-center">
          <Heading highlight="Privacy Policy" />
          <p className="mt-4 text-sm text-gray-700">
            {" "}
            Last Updated: September 9, 2026{" "}
          </p>
        </div>
        {/* intro */}
        <div className="mt-10">
          <p className="text-zinc-900">
            {" "}
            At <strong>FoodCart</strong>, we respect your privacy and are
            committed to protecting your personal information. This Privacy
            Policy explains what information we may collect, how we use it, and
            how we protect it when you use our website.{" "}
          </p>
        </div>
        {/* All details */}
        <div>
          {/* sec-1 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              1. Information We Collect
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              When you use our website or place an order, we may collect
              information such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-900">
              {" "}
              <li>Your name</li> <li>Email address</li> <li>Phone number</li>{" "}
              <li>Delivery address</li> <li>Order details</li>{" "}
              <li>Information you provide through our contact form</li>{" "}
            </ul>
          </div>
          {/* sec-2 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              2. How We Use Your Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              {" "}
              We may use the information we collect to:{" "}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-900">
              {" "}
              <li>Process and manage your food orders.</li>{" "}
              <li>Communicate with you about your orders.</li>{" "}
              <li>Respond to your questions and messages.</li>{" "}
              <li>Improve our website and services.</li>{" "}
              <li>Provide customer support.</li>{" "}
              <li>Prevent fraud, misuse, or unauthorized activity.</li>{" "}
            </ul>
          </div>
          {/* sec-3 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              3. Order Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              When you place an order through FoodCart, we may use your contact
              and delivery information to process and deliver your order.We may
              also retain basic order information for customer service, order
              management, and record-keeping purposes.
            </p>
          </div>
          {/* sec-4 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              4. Payment Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              If online payments are available on our website, payments may be
              processed through third-party payment providers.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              We do not intentionally store your complete payment card
              information on our own systems. Payment information may be
              processed according to the privacy policy and security practices
              of the payment provider.
            </p>
          </div>
          {/* sec-5 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              5. Cookies and Similar Technologies
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Our website may use cookies or similar technologies to improve
              website functionality, remember preferences, and understand how
              visitors use our website.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              You can manage or disable cookies through your browser settings.
              However, disabling certain cookies may affect some website
              functionality.
            </p>
          </div>
          {/* sec-6 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              6. How We Protect Your Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We take reasonable measures to protect the information we collect
              from unauthorized access, misuse, alteration, or
              disclosure.However, no method of transmitting or storing
              information online can be guaranteed to be completely secure.
            </p>
          </div>
          {/* sec-7*/}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              7. Sharing Your Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We do not sell or rent your personal information.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              We may share necessary information with trusted service providers
              when required to operate our website and provide services to you,
              such as delivery or payment processing.{" "}
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              We may also disclose information when required by law or when
              necessary to protect our rights, users, or website.
            </p>
          </div>
          {/* sec-8 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              8. Third-Party Services
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Our website may use third-party services such as payment
              processors, analytics tools, hosting providers, or other services.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              These third parties may collect or process information according
              to their own privacy policies. We recommend reviewing their
              policies when using their services.
            </p>
          </div>
          {/* sec-9 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              9. Your Privacy Choices
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Depending on applicable law, you may have rights regarding your
              personal information, including the ability to request access,
              correction, or deletion of certain information.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              To make a privacy-related request, please contact us through our
              Contact Us page.
            </p>
          </div>
          {/* sec-10 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              10. Children's Privacy
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              FoodCart is not intended to knowingly collect personal information
              from children without appropriate permission.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              If you believe that a child has provided personal information to
              us, please contact us so that we can review and take appropriate
              action.
            </p>
          </div>
          {/* sec-11 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              11. Links to Other Websites
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices, content, or security of
              those websites.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              We encourage you to review the privacy policies of third-party
              websites before providing them with your personal information.
            </p>
          </div>
          {/* sec-12 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              12. Changes to This Privacy Policy
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page along with an updated "Last Updated"
              date.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              We recommend checking this page periodically to stay informed
              about how we handle your information.
            </p>
          </div>
          {/* sec-13 */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-zinc-900">
              13. Contact Us
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              If you have questions, concerns, or requests regarding this
              Privacy Policy, please contact us through the Contact Us section
              of our website.
            </p>
            <p className="mt-1 leading-7 text-zinc-900">
              To make a privacy-related request, please contact us through our
              Contact Us page.
            </p>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            {" "}
            <p className="text-gray-600">
              {" "}
              Thank you for trusting <strong>FoodCart</strong>.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
