import React from "react";
import Heading from "../../components/Heading/Heading";
const TermsAndConditions = () => {
  return (
    <section className="bg-gray-50 pb-20 -mb-20">
      <div className="max-w-4xl mx-auto px-10 pt-40">
        {/* Heading */}
        <div className="text-center">
          <Heading highlight="Terms and Conditions" />
          <p className="mt-4 text-sm font-semibold text-gray-700">
            {" "}
            Last Updated: September 8, 2026{" "}
          </p>
        </div>
        {/* intro */}
        <div className="mt-10">
          <p>
            Welcome to <strong>FoodCart</strong>. By accessing or using our
            website, you agree to follow and be bound by the terms and
            conditions described below. Please read these terms carefully before
            using our website or placing an order.
          </p>
        </div>
        {/* All details */}

        <div>
          {/* sec-1 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              1. About Our Website
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              FoodCart is an online food ordering platform that allows customers
              to browse food items, view product information, add items to their
              cart, and place orders.
            </p>
          </div>
          {/* sec-2 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              2. Using Our Website
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              You agree to use this website only for lawful purposes. You must
              not:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-900">
              {" "}
              <li>
                Use the website for fraudulent or illegal activities.
              </li>{" "}
              <li>Attempt to damage or disrupt the website.</li>{" "}
              <li>Copy or misuse our website content without permission.</li>{" "}
              <li>Provide false information when placing an order.</li>{" "}
              <li>Attempt to gain unauthorized access to the website.</li>{" "}
            </ul>
          </div>
          {/* sec-3 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              3. Food Products and Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We make reasonable efforts to ensure that food names,
              descriptions, images, prices, and other product information
              displayed on our website are accurate.
            </p>
            <p className="mt-4 leading-7 text-zinc-900">
              We make reasonable efforts to ensure that food names,
              descriptions, images, prices, and other product information
              displayed on our website are accurate.If you have food allergies
              or specific dietary requirements, please check the ingredients
              before placing an order.
            </p>
          </div>
          {/* sec-4 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">4. Prices</h3>
            <p className="mt-4 leading-7 text-zinc-900">
              All prices displayed on the website are subject to change without
              prior notice.We reserve the right to correct pricing errors,
              product information errors, or other inaccuracies that may appear
              on the website.
            </p>
          </div>
          {/* sec-5 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">5. Orders</h3>
            <p className="mt-4 leading-7 text-zinc-900">
              When you place an order through FoodCart, you are requesting to
              purchase the selected products. An order is considered accepted
              when we confirm the order. We reserve the right to cancel or
              refuse an order if the requested food item is unavailable,
              incorrect pricing is displayed, delivery information is
              incomplete, or we are unable to process the order.
            </p>
            <p className="mt-4 leading-7 text-zinc-900">
              We reserve the right to cancel or refuse an order if the requested
              food item is unavailable, incorrect pricing is displayed, delivery
              information is incomplete, or we are unable to process the order.
            </p>
          </div>
          {/* sec-6 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">6. Delivery</h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We aim to deliver orders within the estimated delivery time
              provided on the website. Delivery times may vary because of
              traffic, weather, high order volumes, or other circumstances
              beyond our reasonable control.
            </p>
            <p className="mt-4 leading-7 text-zinc-900">
              Customers are responsible for providing accurate delivery
              information and being available to receive their orders.
            </p>
          </div>
          {/* sec-7 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">8. Payments</h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Customers are responsible for providing accurate payment
              information when required.We may use third-party payment providers
              to process payments. Payment information may be handled according
              to the terms and privacy policies of the relevant payment
              provider.
            </p>
          </div>
          {/* sec-8 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              9. User Information
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              When placing an order, you may be required to provide information
              such as your name, phone number, email address, and delivery
              address.You agree to provide accurate and up-to-date information.
              We will handle personal information according to our Privacy
              Policy.
            </p>
          </div>
          {/* sec-9 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              11. Third-Party Services
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              Our website may contain links or integrations to third-party
              services, websites, or payment providers.FoodCart is not
              responsible for the content, availability, security, or policies
              of third-party websites and services.
            </p>
          </div>
          {/* sec-10 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              12. Website Availability
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              We aim to keep FoodCart available and functioning properly, but we
              do not guarantee that the website will always be available,
              uninterrupted, or free from errors.
            </p>
          </div>
          {/* sec-12 */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-zinc-900">
              13. Contact Us
            </h3>
            <p className="mt-4 leading-7 text-zinc-900">
              If you have any questions about these Terms & Conditions, please
              contact us through the Contact Us section of our website.
            </p>
          </div>
          {/* Bottom Message */}{" "}
          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            {" "}
            <p className="text-zinc-900">
              {" "}
              Thank you for using <strong>FoodCart</strong>.{" "}
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
