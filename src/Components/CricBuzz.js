import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import "./CricBuzzStyling.css"

function CricBuzz(props) {

const [cricketScore, setCricketScore] = useState([])

    useEffect(() => {
        axios.get("https://6437d0750c58d3b14579f3b0.mockapi.io/score").then (score => setCricketScore(score.data))
    }, [])

    console.log(props.cricketScore)

    const [navItems,setNavItems]=useState(["MATCHES","PBKS vs GT-Complete","KKR vs SRH-Preview","RR vs CSK-RR Won", "DC vs MI-MI Won","RCB vs LSG-LSG Won"])

    return (
        <div className='parent'>
            <div className='navBar'>
                <img className='logo' src='https://www.cricbuzz.com/images/cb_logo.svg' />
                <div className='margin'>
                <span>Live Scores</span>
                <span>Shedule</span>
                <span>Archives</span>
                <span>News <select> <option></option> </select> </span>
                <span>Series <select> <option></option> </select> </span>
                <span>Teams <select> <option></option> </select> </span>
                <span>Videos <select> <option></option> </select> </span>
                <span>Rankings <select> <option></option> </select> </span>
                <span>more <select> <option></option> </select> </span>
                <span className='cric'>Cricbuzz Plus</span>
                </div>
            </div>
            <div className='navBar2'>
            {navItems.map( (nav,index)=>
       (
                          <span key={index}>{nav}</span>
       )
       )}
            </div>
            <h1>Indian Premier League 2023</h1>
            <p>70 T20s - Mar 31 - May 28</p>
            <tabel>
                <thead>
                    <tr>
                        <th>Teams</th>
                        <th>Mat</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NR</th>
                        <th>Pts</th>
                        <th>NRR</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
            {cricketScore.map((item,index) => <tr key={item.id}>
                                              <td className='images'> <img src= {item.image}/> {item.Teams}</td>
                                              <td>{item.Mat}</td>
                                              <td>{item.Won}</td>
                                              <td>{item.Lost}</td>
                                              <td>{item.Tied}</td>
                                              <td>{item.NR}</td>
                                              <td>{item.Pts}</td>
                                              <td>{item.Nrr}</td>
                                              <td> <select>  
                                                            <option></option>                                                         
                                                   </select> 
                                              </td>
                                                </tr>)}

                </tbody>
            </tabel>
        </div>
        
    )
}

export default CricBuzz
