let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]

// for (let i = 0; i < students.length; i++){
//     console.log("Name: " + students[i]["name"] + "," + " Cohort: " + students[i]["cohort"])
// } 


let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 }

// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

console.log("EMPLOYEES")
for (let x in users){
    for (let i = 0; i < users[x].length; i++){
        console.log(i+1 + " - " + users[x][i]['last_name'].toUpperCase() + ", " + users[x][i]['first_name'].toUpperCase() + " - " + (users[x][i]['last_name']+users[x][i]['first_name']).length)
    }
    if (x == Object.keys(users)[1]) break;
    console.log("MANAGERS")
}