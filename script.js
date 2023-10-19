function gcd(a, b) {
  if (b === 0) {
      return a;
  }
  return gcd(b, a % b);
}

function modInverse(a, m) {
  let m0 = m;
  let t;
  let q;
  let x0 = 0;
  let x1 = 1;

  if (m === 1) {
      return 1;
  }

  while (a > 1) {
      q = Math.floor(a / m);
      t = m;
      m = a % m;
      a = t;
      t = x0;
      x0 = x1 - q * x0;
      x1 = t;
  }

  if (x1 < 0) {
      x1 += m0;
  }

  return x1;
}

function calculate() {
  const a1 = parseInt(document.getElementById('a1').value);
  const b1 = parseInt(document.getElementById('b1').value);
  const p1 = parseInt(document.getElementById('p1').value);
  const a2 = parseInt(document.getElementById('a2').value);
  const b2 = parseInt(document.getElementById('b2').value);
  const p2 = parseInt(document.getElementById('p2').value);
  const a3 = parseInt(document.getElementById('a3').value);
  const b3 = parseInt(document.getElementById('b3').value);
  const p3 = parseInt(document.getElementById('p3').value);

  if (gcd(a1, p1) !== 1 || gcd(a2, p2) !== 1 || gcd(a3, p3) !== 1) {
      alert("a и p должны быть взаимнопростыми.");
      return;
  }

  const M = p1 * p2 * p3;

  const M1 = M / p1;
  const M2 = M / p2;
  const M3 = M / p3;

  const y1 = modInverse(M1, p1);
  const y2 = modInverse(M2, p2);
  const y3 = modInverse(M3, p3);

  let result = (a1 * M1 * y1 * b1 + a2 * M2 * y2 * b2 + a3 * M3 * y3 * b3) % M;

  if (result < 0) {
      result += M;
  }

  alert(`Результат: ${result}`);
}
