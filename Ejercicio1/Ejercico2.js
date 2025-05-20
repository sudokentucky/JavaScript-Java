function averageAgePerGroup(members) {
    let stats = {};
    let result = {};
    members.forEach(member =>{
        let group = member.group;
        let age = member.age;

        if (!stats[group]){
            stats[group] = {ageSum: age, count:1}
            
        }else{
            stats[group].ageSum += age;
            stats[group].count +=1;
        }
    });

    for (const group in stats){
        let promedio = stats[grupo].ageSum / stats[grupo].count
        result[group] = promedio;
    }
    return result;
  // your code here
}

function averageAgePerGroup(members) {
    let stats = {};
    let result = {};

    for (let i = 0; i < members.length; i++) {
        let group = members[i].group;
        let age = members[i].age;

        if (!stats[group]) {
            stats[group] = { ageSum: age, count: 1 };
        } else {
            stats[group].ageSum += age;
            stats[group].count += 1;
        }
    }

    for (const group in stats) {
        result[group] = stats[group].ageSum / stats[group].count;
    }

    return result;
}


const data = [
  { name: "Ana", age: 20, group: "A" },
  { name: "Luis", age: 30, group: "B" },
  { name: "Pedro", age: 40, group: "A" },
];

console.log(averageAgePerGroup(data));
// Output: { A: 30, B: 30 }
