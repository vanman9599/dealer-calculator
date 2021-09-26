import React, { useState, useEffect } from 'react'
import '../App.css'

const Fields = () => {
    const [MSRP, setMSRP] = useState(1350)
    const [soldPrice, setSoldPrice] = useState(0)
    const [cost, setCost] = useState(520)
    const [expense, setExpense] = useState(50)
    const [profit, setProfit] = useState(0)
    const [dealerCommissionRate, setDealerCommissionRate] = useState(25)
    const [salesManagerCommissionRate, setSalesManagerCommissionRate] = useState(50)
    const [ownerCommissionRate, setOwnerCommissionRate] = useState(25)



    const checkTotalPercentage = (e = dealerCommissionRate, s = salesManagerCommissionRate, o = ownerCommissionRate) => {
        const total = Number(e) + Number(o) + Number(s)
        if (total === 100) {
            console.log(total)
            return true
        } else {
            console.log(total)
            return false
        }

    }


    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if (checkTotalPercentage() === false) return alert("percentages must equal 100")
                setProfit(soldPrice - cost - expense)
            }}>
                <div>
                    <label>MSRP</label>
                    <input type="text" value={MSRP} onChange={(e) => setMSRP(e.target.value)} />
                </div>
                <div>
                    <label className="labels">Selling Price</label>
                    <input className="smallInput" type="text" value={soldPrice} onChange={(e) => {
                        setSoldPrice(e.target.value)

                    }} />
                </div>
                <div>
                    <label>Owner Cost</label>
                    <input type="text" value={cost} onChange={(e) => setCost(e.target.value)} />
                </div>
                <div>
                    <label>Expenses</label>
                    <input type="text" readOnly value={expense} onChange={(e) => setExpense(e.target.value)} />
                </div>
                <div>
                    <label>Profit</label>
                    <input type="text" readOnly value={soldPrice - cost - expense} onChange={(e) => {
                        setProfit(e.target.value)

                    }} />
                </div>
                <div>
                    <label>Sales Mgr Commission Rate</label>
                    <input size="4" size="4" type="text" value={salesManagerCommissionRate} onChange={(e) => {
                        setSalesManagerCommissionRate(e.target.value)
                    }} />
                </div>

                <div>
                    <label>Dealer Commission Rate</label>
                    <input type="text" size="4" value={dealerCommissionRate} onChange={(e) => {
                        setDealerCommissionRate(e.target.value)
                    }} />
                </div>
                <div>
                    <label>Owner Commission</label>
                    <input type="text" size="4" value={ownerCommissionRate} onChange={(e) => {
                        setOwnerCommissionRate(e.target.value)
                    }} />
                </div>
                <div>

                    <label>Owner Commission</label>
                    <span>${profit * (ownerCommissionRate / 100)}</span>
                </div>
                <div>
                    <label>Dealer Commission</label>
                    <span>${profit * (dealerCommissionRate / 100)}</span>
                </div>

                <div>
                    <label>Sales Mgr Commission</label>
                    <span>${profit * (salesManagerCommissionRate / 100)}</span>
                </div>

                <div>
                    <button onClick={(e) => {
                        e.preventDefault()

                        setSoldPrice(0)
                        setProfit(0)
                    }} >Clear</button>
                    <input type="submit" value="calculate" />
                </div>
            </form>

        </div>
    )
}

export default Fields
