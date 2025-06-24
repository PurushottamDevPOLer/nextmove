import PieChart from "./charts/PieChart"
import Login from "./auth/Login"

export default function ProfitableFive() {

    const topfive = ['PCMC', 'PMCO', 'PAMC', 'EXLS', 'IMCW']
    let list = []

    for (let i = 0; i < topfive.length; i++) {
        list.push(<li key={i}>{topfive[i]}</li>)
    }
    return (
        <>
            <h2>Top 5: Most Profitable Customers</h2>
            <ul>{list}</ul>
            <p>Amount</p>
            <PieChart />
        </>
    )
}