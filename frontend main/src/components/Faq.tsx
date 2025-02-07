import { Accordion } from "flowbite-react";

const Faq = () => {
  return (
    <div id="faq">
      <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900 pb-10 mt-20">
        Know About Kidney Stone
      </h1>
      <Accordion className="lg:mx-80">
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent">
            What are kidney stones?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Kidney stones are hard deposits of minerals and salts that form in
              the kidneys and can cause severe pain when passing through the
              urinary tract.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent ">
            What causes kidney stones?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Kidney stones are often caused by a combination of genetics,
              dehydration, dietary factors (like high salt, sugar, or protein
              intake), and underlying health conditions.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent ">
            What are the symptoms of kidney stones?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Symptoms can include sharp pain in the back or side, pain during
              urination, blood in the urine, nausea, and frequent urge to
              urinate.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent">
            How are kidney stones diagnosed?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Doctors use imaging tests like ultrasound, CT scans, or X-rays to
              detect stones, as well as urine and blood tests to determine the
              type of stone.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent ">
            How are kidney stones treated?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Small stones may pass on their own with increased fluid intake,
              while larger stones may require medication, lithotripsy (shock
              waves), or surgery.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="hover:bg-primary focus:bg-primary text-black focus:ring-2 focus:ring-accent">
            Can kidney stones be prevented?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Staying hydrated, reducing salt and protein intake, and avoiding
              high-oxalate foods (like spinach, nuts, and chocolate) can reduce
              the risk of stones.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Faq;
