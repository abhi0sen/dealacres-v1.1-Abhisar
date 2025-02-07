'use client'
import {useState} from 'react'
import {Lato} from 'next/font/google'
import styles from './maincontent.module.css'
import {BsCurrencyRupee} from 'react-icons/bs'
import Mainoverview from './Mainoverview.jsx'
import Amenities from './Amenities.jsx'
import Specification from './Specification.jsx'
import Locality from './Locality.jsx'
import Developerinfo from './Developerinfo.jsx'
import FAQ from './FAQ.jsx'
import LeaveReview from './LeaveReview.jsx'

const lato = Lato({
    subsets: ['latin'],
    weight: ['300','400','700','900']
})

function MainContentContainer(props) {

    const API_KEY = 'AIzaSyCLnG8KQEzHCSMW62v1Kknt95xEGKMXW-0'

    const [showFull,setShowFull] = useState(false)
    const mapSrc= `https://www.google.com/maps/embed/v1/place?q=${props.content.mapCoordinates.latitude},${props.content.mapCoordinates.longitude}&key=${API_KEY}`

    return (
      <div style={lato.style} className={styles.mainContainer}>
          <div className={styles.headerComp}>
              <h6>{props.content.currentStatus}</h6>
              <div className={styles.head}>{props.content.title}, <p style={{display:'inline'}}>{props.content.sideTitle}</p></div>
              <h5><BsCurrencyRupee style={{display:'inline'}}/>{props.content.price}</h5>
          </div>
          <div className={styles.aboutProperty}>
              <h3>About this home</h3>
              <p>{showFull?props.content.about:`${props.content.about.substring(0,600)}`}</p>
              <h6 onClick={()=>setShowFull(!showFull)}>{showFull? 'Show Less':'Show More'}</h6>
          </div>
          <div>
            <h1>{props.content.title} Overview</h1>
            <Mainoverview overviewData = {props.content.overview} />
          </div>
          <div className={styles.mapContainer}>
            <iframe src={mapSrc} width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div>
            <h1>Specification: {props.content.title}</h1>
            <Specification specificationData = {props.content.specification}/>
          </div>
          <div>
            <h1>Amenities</h1>
            <Amenities ameData={props.content.Amenities}/>
          </div>
          <div>
            <h1> About Developer</h1>
            <Developerinfo devData = {props.content.aboutDeveloper}/>
          </div>
          <div className = {styles.mainContainerLine}></div>
          <div>
            <h1>Locality Overview</h1>
            <Locality localityData = {props.content.localityOverview} desc={true}/>
          </div>
          <div>
            <h1>Frequently Asked questions</h1>
            <FAQ faqdata = {props.content.FaqData}/>
          </div>
          <div>
            <h1>Leave a review</h1>
            <LeaveReview/>
          </div>
      </div>
    )
}

export default MainContentContainer