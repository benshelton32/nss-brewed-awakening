import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

// End goal: Click employee and name and get ${employee.name} sold # products.

// 

const filterOrdersByEmployee = (employee) => {
    let arrayOfEmployeeOrders = []
    for (const order of orders) {
        if (order.employeeId === employee.id) {
            arrayOfEmployeeOrders.push (order)
        }
    }
    return arrayOfEmployeeOrders
}

const employeeOrdersHTML = (arrayOfEmployeeOrders) => {
    let numberOfOrdersHTML = ""
    for (let i = 0; i < arrayOfEmployeeOrders.length; i++) {
        numberOfOrdersHTML ++
    }
    return numberOfOrdersHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")

            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const filteredOrders = filterOrdersByEmployee(employee)
                    const numberOfOrdersByEmployee = employeeOrdersHTML(filteredOrders)

                    window.alert(`${employee.name} sold ${numberOfOrdersByEmployee} products`)
                }
            }
        }
    }
)