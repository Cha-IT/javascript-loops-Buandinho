//oppgave 1
let IT = {
    spraak: ["html", "css"],
    likerfaget: false,
    timetall: 5,
    klasserom: "C14",
    antallElever: 25    
}
IT.spraak.push("javascript")

IT.antallElever = 24;  

IT.likerfaget = true;

delete IT.timetall;

for (let i = 0; i < IT.spraak.length; i++) {
    console.log(IT.spraak[i])
}
for (let key in IT) {
    document.write(key);
    }
    
document.write(IT.spraak[0] + "<br>" + IT.spraak[1] + "<br>" + IT.spraak[2] + "<br>")

for (let key in IT) {
    document.write(key + ": " + IT[key] + "<br>");
    }

  

  

//oppgave 2


