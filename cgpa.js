function calculateCGPA() {
  const s1 = parseFloat(document.getElementById("s1").value);
  const s2 = parseFloat(document.getElementById("s2").value);
  const s3 = parseFloat(document.getElementById("s3").value);
  const s4 = parseFloat(document.getElementById("s4").value);
  const s5 = parseFloat(document.getElementById("s5").value);
  const s6 = parseFloat(document.getElementById("s6").value);
  const s7 = parseFloat(document.getElementById("s7").value);
  const s8 = parseFloat(document.getElementById("s8").value);

  const arr = [s1, s2, s3, s4, s5, s6, s7, s8];
  console.log(arr);
  let totalSem = 0;
  let totalGpa = 0;
  arr.filter(Boolean).forEach((gpa) => {
    totalGpa += gpa;
    totalSem += 1;
  });
  const cgpa = totalGpa / totalSem;
  document.getElementById("result").innerText = `Your CGPA is: ${cgpa.toFixed(
    2
  )}`;
}
