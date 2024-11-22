function calculateGPA() {
  const s1 = parseFloat(document.getElementById("s1").value);
  const s2 = parseFloat(document.getElementById("s2").value);
  const s3 = parseFloat(document.getElementById("s3").value);
  const s4 = parseFloat(document.getElementById("s4").value);
  const s5 = parseFloat(document.getElementById("s5").value);
  const s6 = parseFloat(document.getElementById("s6").value);
  const s7 = parseFloat(document.getElementById("s7").value);
  const s8 = parseFloat(document.getElementById("s8").value);
  const s9 = parseFloat(document.getElementById("s9").value);
  const s10 = parseFloat(document.getElementById("s10").value);
  const s11 = parseFloat(document.getElementById("s11").value);
  const c1 = parseFloat(document.getElementById("c1").value);
  const c2 = parseFloat(document.getElementById("c2").value);
  const c3 = parseFloat(document.getElementById("c3").value);
  const c4 = parseFloat(document.getElementById("c4").value);
  const c5 = parseFloat(document.getElementById("c5").value);
  const c6 = parseFloat(document.getElementById("c6").value);
  const c7 = parseFloat(document.getElementById("c7").value);
  const c8 = parseFloat(document.getElementById("c8").value);
  const c9 = parseFloat(document.getElementById("c9").value);
  const c10 = parseFloat(document.getElementById("c10").value);
  const c11 = parseFloat(document.getElementById("c11").value);
  const sub = [s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11];
  const credit = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11];
  let newSub = [];
  let newCredit = [];
  sub.filter(Boolean).forEach(s => {
    newSub.push(s);
  })
  credit.filter(Boolean).forEach(c => {
    newCredit.push(c);
  })
  let gpa = 0;
  for(var i=0;i<newSub.length;i++){
    gpa+= newSub[i]*newCredit[i];
  }
  let totalCredit = 0;
  for(var i=0;i<newCredit.length;i++){
    totalCredit+=newCredit[i];
  }

  let totalGpa = gpa/totalCredit;
  document.getElementById("result").innerText = `Your GPA is: ${totalGpa.toFixed(2)}`;
}
