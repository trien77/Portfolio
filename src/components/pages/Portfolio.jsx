import React, {useState} from 'react'
import {portfolio} from "../../data/dummydata"
import { Visibility } from '@mui/icons-material'
import Heading from "../common/Heading"



const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className="container">
        <Heading title="Portfolio"/>
            <div className="catButton">
                {category.map((category)=>{
                    <button className="primaryBtn" onClick={()=>filterItems(category)}>{category}</button>
                })}
            </div>
       
            <div className="content grid3">
                {list.map((value,i)=>(
                <div className="box" key={i}>

                    <div className="img">
                        <img src={value.cover}/>
                    </div>

                    <div className="overlay">
                        <h3>{value.title}</h3>
                        <span>{value.name}</span>
                        <Visibility/>
                     </div>

                </div>
                ))}
            </div>
        </div>
      </article>
    </>
  )
}

export default Portfolio
