import React from 'react'
// components
import Title from '../Title'
// page components
import Offerscard from '../page-components/Offerscard'

import { offerList , moreOfferList } from '../../db/OffersList'



export default function Offers(
    {offersRef,
        showOffers,
        handleShowOffers
    }) {
  return (
    <section ref={offersRef} className="offers container container-md p-2">
            <Title classes={"subtitle text-center mb-4"}
              text={"Here's what you get"} />
            <div className="offers-container" >
             
              {offerList.map((offer, index) => (
                <Offerscard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}>

                </Offerscard>
              ))}
            </div>

            {showOffers && (<div className="offers-container fadeIn" >
              {moreOfferList.map((offer, index) => (
                <Offerscard
                  key={index}
                  icon_1={offer.icon_1}
                  title={offer.title}
                  text={offer.text}>

                </Offerscard>
              ))}
            </div>)}
            <a onClick={handleShowOffers} style={{ cursor: "pointer", textDecoration: "underline" }}>
              <h4 className="text-center text-primary mt-2">
                {showOffers ? "less" : "more..."}
              </h4>
            </a>
          </section>
  )
}
