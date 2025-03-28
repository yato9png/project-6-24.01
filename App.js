let table = ""; 

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        table += (i * j).toString().padEnd(4, " "); 
    }
    table += "\n"; 
}

alert(table);
