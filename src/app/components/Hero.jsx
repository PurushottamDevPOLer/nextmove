import ProfitableFive from "./ProfitableFive"

export default function Hero() {
    const revenue = "3540073099"
    const expense = "2720099668"
    const earning = "817003431"
    return (
        <>
            <h2>Billing Dashboard</h2>
            <div>
                <p>Revenue</p>
                <p>{revenue}</p>
            </div>
            <div>
                <p>Expense</p>
                <p>{expense}</p>
            </div>
            <div>
                <p>Earning</p>
                <p>{earning}</p>
            </div>
            <ProfitableFive />
        </>
    )
}