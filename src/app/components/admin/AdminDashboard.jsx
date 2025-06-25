export default function AdminDashboard() {
    const revenue = "3540073099"
    const expense = "2720099668"
    const earning = "817003431"
    return (
        <>
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
        </>
    )
}