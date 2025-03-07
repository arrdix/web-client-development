function calculateRectangleArea(length: number, width: number): number {
    return width * length
}

interface calculateCircleReturn {
    diameter: number
    circumference: number
    area: number
}

function calculateCircle(radius: number): calculateCircleReturn {
    const pi = 3.14

    const diameter = radius * 2
    const circumference = diameter * pi
    const area = pi * radius * radius

    return { diameter, circumference, area }
}

function calculateTriangleAngle(angle1: number, angle2: number): number {
    const totalAngle = 180

    return totalAngle - (angle1 + angle2)
}

function calculateDaysDiff(date1: Date, date2: Date): number {
    const diff = date2.getTime() - date1.getTime() // get diff in ms

    return diff / (1000 * 3600 * 24) // to second * to minutes * to hour
}

function getInitialName(name: string): string {
    const parts = name.split(' ')
    const initials = parts.map((part) => part.charAt(0).toUpperCase())

    return initials.join('')
}

console.log('Rectangle Area: ', calculateRectangleArea(5, 3))
console.log('Circle Calculation: ', calculateCircle(5))
console.log('Triangle Angle: ', calculateTriangleAngle(80, 65))
console.log('Day DIfferences: ', calculateDaysDiff(new Date('2024-03-19'), new Date('2024-03-21')))
console.log('Initial Name: ', getInitialName('Yudistira Whendra Ardi Nugraha Putra'))
