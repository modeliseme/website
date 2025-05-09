const PrivacyPolicy = () => {
  return (
    <div className="bg-white py-[80px] px-[20px] md:px-[40px]">
      {/* Page Title */}
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-[32px] md:text-[48px] font-semibold text-[#333] mb-[24px]">
          Privacy Policy
        </h1>
        <p className="text-[16px] md:text-[18px] text-gray-600 font-light mb-[40px]">
          This Privacy Policy explains how we collect, use, and protect your
          personal data when you visit our website or use our mobile
          application.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="max-w-[800px] mx-auto space-y-[40px]">
        {/* Section 1: Information We Collect */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            1. Information We Collect
          </h2>
          <p className="text-[16px] text-gray-700 font-light mb-[8px]">
            We collect information from you when you visit our website, register
            for an account, subscribe to our newsletter, fill out a form, or use
            features in our mobile application. This may include:
          </p>
          <ul className="list-disc list-inside text-[16px] text-gray-700 font-light space-y-1">
            <li>Your name and email address</li>
            <li>Browsing behavior on our website</li>
            <li>
              Facial image data if you use our digital try-on feature in the app
            </li>
          </ul>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-[16px] text-gray-700 font-light space-y-1 mb-[8px]">
            <li>Improve our website and app experience</li>
            <li>Respond to inquiries and support requests</li>
            <li>Send you marketing communications (if you have opted in)</li>
            <li>
              Generate a 3D model of your face for virtual try-on purposes (only
              if you opt in)
            </li>
          </ul>
          <p className="text-[16px] text-gray-700 font-light">
            We do not share your personal data with third parties without your
            consent, except as required by law.
          </p>
        </div>

        {/* Section 3: Cookies */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            3. Cookies
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            Our website uses cookies to enhance your experience. Cookies help us
            analyze website traffic and customize your browsing experience. You
            can disable cookies in your browser settings, though this may affect
            some features of the website.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            4. Data Security
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We take reasonable precautions to protect your personal data from
            unauthorized access, alteration, disclosure, or destruction.
            However, please be aware that no method of transmission over the
            internet is completely secure.
          </p>
        </div>

        {/* Section 5: Your Rights */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            5. Your Rights
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            You have the right to access, update, or delete your personal
            information at any time. You may also withdraw consent for receiving
            marketing communications. To exercise these rights, please contact
            us using the information provided below.
          </p>
        </div>

        {/* Section 6: Changes to This Privacy Policy */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and the "Last Updated" date will be
            revised accordingly. We encourage you to review this policy
            periodically for updates.
          </p>
        </div>

        {/* Section 7: Age Restrictions */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            7. Age Restrictions
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            Our application and services are not intended for individuals under
            the age of 13. By using our website or app, you confirm that you are
            at least 13 years old. If you are under 13, you are not permitted to
            access or use our services.
          </p>
        </div>

        {/* Section 8: Contact Information */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            8. Contact Information
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            If you have any questions regarding this Privacy Policy or wish to
            exercise your rights, please contact us at:
            <a href="mailto:privacy@modeliseme.com" className="text-[#0B63E5]">
              &nbsp;privacy@modeliseme.com
            </a>
          </p>
        </div>

        {/* Section 9: Face Data Collection and Use */}
        <div>
          <h2 className="text-[24px] font-semibold text-[#333] mb-[12px]">
            9. Face and Body Image Data Collection and Use
          </h2>
          <p className="text-[16px] text-gray-700 font-light">
            We collect full-body front-view image data, which includes facial
            information, from users who choose to use our digital try-on
            feature.
          </p>

          <ul className="list-disc list-inside text-[16px] text-gray-700 font-light space-y-1">
            <li>
              <strong>What Data We Collect:</strong> A full-body front-view
              image that includes your face and physical features, used to
              generate a 3D mesh model.
            </li>
            <li>
              <strong>Purpose:</strong> This data is used solely to create a 3D
              representation of your body for the virtual try-on experience
              within the app. It is not used for identification, surveillance,
              or any unrelated purpose.
            </li>
            <li>
              <strong>Storage:</strong> Image data is processed over the cloud.
              The processed data is stored securely on our servers unless a user
              explicitly requests deletion. Users can request deletion by
              emailing us at{" "}
              <a
                href="mailto:privacy@modeliseme.com"
                className="text-[#0B63E5]"
              >
                &nbsp;privacy@modeliseme.com.
              </a>{" "}
              Once a valid request is received, all associated image and mesh
              data will be permanently deleted within 30 days.
            </li>
            <li>
              <strong>Retention:</strong> Unless a deletion request is
              submitted, the data is retained securely in our database to
              support continued access to the try-on experience.
            </li>
            <li>
              <strong>Third-Party Sharing:</strong> We do not share, sell, or
              disclose image or mesh data to any third parties.
            </li>
            <li>
              <strong>User Consent:</strong> Users must explicitly grant
              permission before any image data is captured or processed. Opting
              out disables the use of application features.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
