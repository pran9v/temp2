import React, { useEffect } from 'react';

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-full bg-[#FEFCE8]">
      <div
        id="terms-conditions"
        className="min-h-screen max-w-4xl mx-auto px-4 py-8 pt-40"
      >
        <header className="text-center mb-8">
          <h1 className="text-4xl font-semibold mb-2">Terms & Conditions</h1>
          <p className="text-lg text-gray-600">
            The use of this site requires that you understand and accept the terms and conditions assigned here.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Access</h2>
          <p className="mb-4">
            THE SERVICE IS STRICTLY FOR AMUSEMENT PURPOSES ONLY. THE SERVICE DOES NOT OFFER REAL MONEY GAMBLING OR AN OPPORTUNITY TO WIN REAL MONEY OR PRIZES. NO ACTUAL MONEY OR ANYTHING OF VALUE CAN BE WON PLAYING THE GAMES OFFERED THROUGH THE SERVICE, AND NO ACTUAL MONEY IS REQUIRED TO PLAY.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Our Research and Evaluation Guidelines</h2>
          <p className="mb-4">
            Our research and evaluation guidelines are rigorous and aimed at providing only the most accurate information possible. Visitors must agree that this site is not liable for any omissions or mistakes, damages, or losses of any kind resulting from the use of this content or this website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Age</h2>
          <p className="mb-4">
            This site is not to be accessed by anyone under the age of 18 years (or the legal age for online gaming in the jurisdiction or region in question). This site cannot be held liable for any fraudulent claims of legal status at the time of registration or use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Editorial Rights</h2>
          <p className="mb-4">
            Visitors to this site understand that some of the content is "user-generated." Though we greatly value the contributions and feedback of our visitors, we reserve the right to edit or completely remove any reviews that are published by our customers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Disclaimer</h2>
          <p className="mb-4">
            The information contained in this site is delivered on an "as is" basis. We do not provide warranties or representations as to the site's information or operation. Nor do we express or imply that there are warranties on the content or materials contained in the site.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy</h2>
          <p className="mb-4">
            This site collects data in order to maintain and enhance the quality of the materials provided. This includes some login options meant to guarantee communication with visitors. The privacy and security of this data is explained in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to change or alter these terms at any time and according to our discretion. It is the responsibility of our visitors to review the terms, and any ongoing use of this site constitutes your acceptance of all the terms outlined above.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
