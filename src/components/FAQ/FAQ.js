import React, { useState } from "react";
import styles from "./faq.module.css";

const FAQ = () => {
  const [answersVisibility, setAnswersVisibility] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });

  const toggleAnswer = (index) => {
    setAnswersVisibility((prevVisibility) => ({
      ...prevVisibility,
      [index]: !prevVisibility[index],
    }));
  };

  return (
    <div className={styles["faq-outer"]}>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(0)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            How is TERRAIN funded? Are you a not-for-profit organisation?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>
        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[0] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            We are a for-profit initiative as a social enterprise and choose to
            be so in order to enable the longevity of our work, and remove
            reliance upon external funding support needed to start us up. We
            also think it’s important to remove reliance on funding bodies to
            make way and open opportunities in our communities for supporting
            new and emerging initiatives in the future. We self-finance and pay
            ourselves through services alone, via consultation, workshops and
            various other contributions. This allows us to maintain the creative
            integrity of our projects and resources as they are not compromised
            with a need for monetisation.
            <br></br>
            <br></br>
            Being for-profit doesn’t make us raging capitalists. We all face
            many structural challenges as a direct result of our current form of
            capitalism that is fundamentally broken. Being a for-profit
            initiative means that we can be part of reimagining our economic
            system instead of working outside of it by taking direct
            responsibility for our decisions. We envision our future governed by
            principles of ecological economics, a pluralist view that sees the
            human economy as a subsystem of the global ecological system; thus,
            materials and energy flow as part of the larger transfer of
            materials within our biosphere.
          </p>
        </div>
      </div>

      <div className={styles["q-outer"]} onClick={() => toggleAnswer(1)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            How can I engage or support TERRAIN?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[1] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            What we ask is that you make time to read a book, slow down, ask a
            question, breathe, pay attention, extend your sense of self, meet
            the community. <br></br>
            <br></br>Be aware and critical of the systems and worldviews we
            accept, and be brave enough to attempt reimagining and shifting them
            for the better. If they feel incompatible and out-of-date, they
            probably are.
            <br></br>
            <br></br>You can also hire of our space, become a studio member, buy
            a book, attend an event, seek our services, recommend our services,
            and tell your nice friends about us.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(2)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            Are you hiring and do you take interns, work experience and
            volunteers?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[2] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            We simply don’t have the bandwidth (yet) for more staff, we’d like
            to soon though as we continue to grow. As soon as paid positions are
            available we will make them known! For interns, work experience and
            volunteers, drop us an email to hello@terrain.earth with an
            introduction, your curiosity and a CV.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(3)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>Where are you located?</div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[3] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            37.8136° S 144.9631° E; Wurundjeri Country, Naarm/Melbourne,
            Australia, Earth.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(4)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>Can we collaborate?</div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[4] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            Our projects are either directly conceived or collaborative from the
            get-go - they can be one-off or ongoing. We are open to
            collaboration on new projects and we’d love to hear from you - send
            us an email to hello@terrain.earth if you feel so inclined!
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(5)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            What is your website privacy policy?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[5] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            Your data sovereignty is important to us. We don’t want your data
            and so we don’t collect it with any cookies or use analytics. The
            only time we will collect information from you is if you choose to
            sign up to our newsletter, where you can leave your contact
            information, that being your first and last name and email address
            for direct and occasional communications from us only - this contact
            information is not shared with any third parties. We may also
            receive some information from third parties such as if you choose to
            engage with us on social media, where some information is provided
            to us by you. If you communicate with us, in order to respond to you
            we need your contact information, which will be stored in our
            contacts. If you have any questions or comments, or if it appears
            that the above mentioned information is incomplete, please contact
            us at hello@terrain.earth.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(6)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            What do you send in the newsletter if I subscribe?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[6] ? "" : styles["hidden"]
          }`}
        >
          {" "}
          <br></br>
          <p>
            Updates on upcoming happenings by us and our friends, latest book
            releases, and even the occasional music playlist with what we’re
            listening to. We don’t send them to a schedule, only when we have
            something to share with you.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(7)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            Do you sell anything besides books?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[7] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            Essentially, you can’t buy TERRAIN, you can only engage with it
            presently; as it is not a thwarted attempt to join the commerce
            bandwagon, there is no face oil or incense that will help you here.
            There is no paradoxical consumption required for simplification -
            you already have everything you need. We avoid commodifying
            ourselves with objects or things that could easily become a
            distraction from our mission and further contribute to excessive
            habits of over-consumption. If we do make or sell anything besides
            the resources held on the Bookshelf, they will likely be a limited
            run, and made and sold locally; accompanied with transparency in
            their production, manufacture, transportation and disposal (though
            hopefully this last step won’t be necessary). Each decision we make
            is embodied by our values and seen as an opportunity to do
            business-as-usual a little differently.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(8)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            Exchanges, shipping and refunds
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[8] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            We're unable to offer refunds for change of mind, but you can return
            a book to us within 14 days for an exchange or store-credit if the
            item is in as-new condition (no scuffs or wear). Credit will only
            cover the value of the book and will need to be returned to us at
            the customer's expense. Send us an email to hello@terrain.earth with
            the reason for your exchange and we'll be in touch as soon as
            possible.
            <br></br>
            <br></br>We are currently not offering shipping as we are busy
            working out the right system for us to implement. Thank you for your
            patience and we hope to be shipping Australia-wide very soon. An
            update will be shared in our newsletter as soon as this becomes
            available.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(9)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            Is TERRAIN political or part of social justice and climate action
            movements?
          </div>
          <div className={styles["q-expand"]}>+</div>
        </div>

        <div
          className={`${styles["q-answer"]} ${
            answersVisibility[9] ? "" : styles["hidden"]
          }`}
        >
          <br></br>
          <p>
            In the phrase “social justice” we question what exactly we refer to
            when we say social. There are incredible acts of restorative justice
            that are being initiated all over the world. These acts exemplify
            the work being done out there on the front lines that not only
            brings much needed visibility to the public, but are also providing
            resources and the support needed for how we are to move forward
            through the pain and heal, and importantly - putting us in back our
            place by reminding us what it means to be compassionate social
            creatures.
            <br></br>
            <br></br>Being social or having sociality is something we tend to
            only award as a status to humans; rendering our environments and
            landscapes devoid, mute, machinic, and in many ways unworthy of our
            superior social lives and all that come with it (such as rights and
            protection) - when in truth there are social lives and exchanges,
            mutualisms and symbiosis between all things happening all the time,
            some so sophisticated our scientists still struggle to grasp.
            <br></br>
            <br></br>As said by Martin Luther King, “a threat to justice
            anywhere is a threat to justice everywhere”. We cannot entirely
            respect the rights of nature if we are still struggling to address
            systematic human rights and social abuses across many forms. It is
            our job now to connect these dots of how women’s rights are
            connected to climate, how ecosystem health returns and flourishes
            once lands are returned to and managed by their Indigenous owners,
            how injustices perpetuated by classical and neoclassical capitalism
            contribute to the diminishing of collective prosperity, and how
            LGBTQIA+ understanding and respect will continue to pave the way for
            embracing a fluid and non-binary world that is at the core of how
            our ecosystems have and always will function. There is tremendous
            intersectionality in how we will not only present the visual media
            of what a just and harmonious world will look like - but the
            transition and collaboration it will take to get us there in making
            it a living reality for all. We therefore see ourselves as a node
            within a massive global network of restorative justice movements
            across all scales.
            <br></br>
            <br></br>***”We must seek ‘planetary justice’, because inequalities
            don't fall neatly under climate justice, social justice or
            environmental justice.” - Catherine Coleman Flowers We also
            recognise that indigenous leadership, voice and sovereignty are all
            forms of climate action.
          </p>
        </div>
      </div>
      <div className={styles["q-outer"]} onClick={() => toggleAnswer(10)}>
        <div className={["q-box"]}>
          <div className={styles["q-underline"]}>
            Can we hire the space for an event?
          </div>
          <div className={styles["q-expand"]}>+</div>

          <div
            className={`${styles["q-answer"]} ${
              answersVisibility[10] ? "" : styles["hidden"]
            }`}
          >
            <br></br>
            <p>
              Yes! If you're interested in hiring our space for an event, get in
              touch with us at hello@terrain.earth and share your event concept.
              Please keep in mind that events held at TERRAIN should be aligned
              with our values.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
