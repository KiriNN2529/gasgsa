import React from 'react';
import iPad_Air from '../assets/images/hero__dvsxv8smkkgi_largetall.jpg';
import Watch from '../assets/images/watch.jpg';
import Watch_logo from '../assets/logo/watch-6.png';
import Fitness from "../assets/images/fitness.jpg";
import Fitness_logo from "../assets/logo/Fitness+.png";
import Airpods from "../assets/images/airpods.jpg";

const Main = () => {
  return (
    <div className="Main">
      <section className="hero iphone-12">
        <div className="container-fluid blue">
          <div className="info info-covid">
            <a href="#">
              Evaluate COVID‑19 symptoms and understand next steps {'>'}
            </a>
          </div>
        </div>
        <div className="container-fluid gray">
          <div className="info info-onlineShop">
            <a href="#">Shop online</a>
            <p>and get Specialist help, free no-contact delivery, and more.</p>
          </div>
        </div>
        <div className="container-xl">
          <div className="title">
            <h2 className="title-heading">iPhone 12</h2>
            <h3 className="title-sub-heading">Blast past fast.</h3>
            <p className="title-info">
              From $29.12/mo. for 24 mo. or $699 before trade-in.1 Buy directly
              from Apple with special carrier offers.
            </p>
          </div>
          <div className="cta">
            <a href="#" className="cta-link">
              Learn more
            </a>
            <a href="#" className="cta-link">
              Buy
            </a>
          </div>
        </div>
      </section>

      <section className="hero iphone-12-pro">
        <div className="container-xl">
          <div className="title title-light">
            <h2 className="title-heading">iPhone 12 Pro</h2>
            <h3 className="title-sub-heading">It's a leap year.</h3>
            <p className="title-info">
              From $41.62/mo. for 24 mo. or $999 before trade-in.2 Buy directly
              from Apple with special carrier offers.
            </p>
          </div>
          <div className="cta">
            <a href="#" className="cta-link cta-link-darker">
              Learn more
            </a>
            <a href="#" className="cta-link cta-link-darker">
              Buy
            </a>
          </div>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row margin-b-10">
          <div className="col-md margin-r-10 ipad__air p-0">
            <img src={iPad_Air} alt="ipad-air" />
            <div className="title-offerSection">
              <h2 className="title__heading-offer">iPad Air</h2>
              <h3 className="title__subheading-offer">
                Powerful. Colorful. Wonderful
              </h3>
              <div className="cta">
                <a href="#" className="cta-link cta-link-darker">
                  Learn more
                </a>
                <a href="#" className="cta-link cta-link-darker">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md p-0">
            <div className="hero fitness watch">
              <div className="watch-img">
                <img src={Watch} alt="watch-6" />
              </div>
              <div className="title-offerSection">
                <h2 className="title__heading-offer">
                  <img className="watch-logo" src={Watch_logo} alt="watch-6" />
                </h2>
                <h3 className="title__subheading-offer-watch">
                  The future of health is on your wrist.
                </h3>
                <div className="cta">
                  <a href="#" className="cta-link">
                    Learn more
                  </a>
                  <a href="#" className="cta-link">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row margin-b-10">
          <div className="col-md  margin-r-10 fitness-img p-0">
            <img src={Fitness} alt="fitness-img" />
            <div className="title-offerSection">
              <h2 className="title__heading-offer">iPad Air</h2>
              <img src={Fitness_logo} alt="" className="fitness-logo" />
              <h3 className="title__subheading-offer">
                Powerful. Colorful. Wonderful
              </h3>
              <div className="cta">
                <a href="#" className="cta-link cta-link-darker">
                  Learn more
                </a>
                <a href="#" className="cta-link cta-link-darker">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md p-0">
            <div className="hero fitness">
              <div className="airpods-img">
                <img src={Airpods} alt="watch-6" />
              </div>
              <div className="title-offerSection">
                <h2 className="title__heading-offer">
                  <img className="watch-logo" src={Watch_logo} alt="watch-6" />
                </h2>
                <h3 className="title__subheading-offer-watch">
                  The future of health is on your wrist.
                </h3>
                <div className="cta">
                  <a href="#" className="cta-link">
                    Learn more
                  </a>
                  <a href="#" className="cta-link">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row margin-b-10">
          <div className="col-md  margin-r-10 ipad__air p-0">
            <img src={iPad_Air} alt="ipad-air" />
            <div className="title-offerSection">
              <h2 className="title__heading-offer">iPad Air</h2>
              <h3 className="title__subheading-offer">
                Powerful. Colorful. Wonderful
              </h3>
              <div className="cta">
                <a href="#" className="cta-link cta-link-darker">
                  Learn more
                </a>
                <a href="#" className="cta-link cta-link-darker">
                  Buy
                </a>
              </div>
            </div>
          </div>
          <div className="col-md p-0">
            <div className="hero fitness watch">
              <div className="watch-img">
                <img src={Watch} alt="watch-6" />
              </div>
              <div className="title-offerSection">
                <h2 className="title__heading-offer">
                  <img className="watch-logo" src={Watch_logo} alt="watch-6" />
                </h2>
                <h3 className="title__subheading-offer-watch">
                  The future of health is on your wrist.
                </h3>
                <div className="cta">
                  <a href="#" className="cta-link">
                    Learn more
                  </a>
                  <a href="#" className="cta-link">
                    Buy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xl">
        <section className="main-info">
          <span>
            1. Price includes a $30 AT&T, T-Mobile, Sprint, or Verizon discount.
            Requires activation with carrier. Monthly pricing: Available to
            qualified customers and requires 0% APR, 24-month installment loan
            with Citizens One or Apple Card Monthly Installments and iPhone
            activation with AT&T, Sprint, T-Mobile, or Verizon for purchases in
            an Apple Store. Taxes and shipping not included. Additional Apple
            Card Monthly Installments and iPhone Payments terms apply. 2.
            Monthly pricing: Available to qualified customers and requires 0%
            APR, 24-month installment loan with Citizens One or Apple Card
            Monthly Installments and iPhone activation with AT&T, Sprint,
            T-Mobile, or Verizon for purchases in an Apple Store. Taxes and
            shipping not included. Additional Apple Card Monthly Installments
            and iPhone Payments terms apply. 3. $9.99/month after free trial. No
            commitment. Plan automatically renews after trial until cancelled.
            4. The Apple One free trial includes only services that you are not
            currently using through a free trial or a subscription. Plan
            automatically renews after trial until cancelled. Restrictions and
            other terms apply. 5. Subject to credit approval. Valid only on
            qualifying purchases in the U.S. for new Apple Card customers who
            open an account and use it between 3/1/2021 and 3/31/2021 at Apple
            Store locations, apple.com, the Apple Store app, or by calling
            1-800-MY-APPLE. Accounts opened prior to 3/1/2021 or after 3/31/2021
            do not qualify. 6% is the total amount of Daily Cash that can be
            earned for qualifying Apple purchases using Apple Card. The
            following purchases with Apple Card are ineligible to earn 6% back,
            but will still earn 3% back: monthly financing through Apple Card
            Monthly Installments, Apple iPhone Payments, iPhone Upgrade Program,
            and wireless carrier financing plans; Apple Media Services;
            AppleCare+ monthly payments. Returning qualified items that were
            purchased during the offer period may impact your cash back. 6%
            savings is earned as Daily Cash and is transferred to your Apple
            Cash card when transactions post to your Apple Card account. If you
            do not have an Apple Cash card, Daily Cash can be applied by you as
            a credit on your statement balance. See the Apple Card Customer
            Agreement for more details on Daily Cash and qualifying
            transactions. Apple Card issued by Goldman Sachs Bank USA, Salt Lake
            City Branch. To access and use all the features of Apple Card, you
            must add Apple Card to Wallet on an iPhone or iPad with iOS or
            iPadOS 13.2 or later. Update to the latest version of iOS or iPadOS
            by going to Settings General Software Update. Tap Download and
            Install. Available for qualifying applicants in the United States.
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch. Learn more about how Apple Card applications are evaluated
            at support.apple.com/kb/HT209218. Apple TV+ is $4.99/month after
            free trial. One subscription per Family Sharing group. Offer good
            for 3 months after eligible device activation. Plan automatically
            renews until cancelled. Restrictions and other terms apply.
          </span>
        </section>
      </div>
    </div>
  );
};
export default Main;
