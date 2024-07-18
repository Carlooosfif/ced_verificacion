const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(cors());

function validateEcuadorianID(id) {
  if (id.length !== 10) return false;
  const digits = id.split('').map(Number);
  const provinceCode = digits[0] * 10 + digits[1];

  if (provinceCode < 1 || provinceCode > 24) return false;

  const thirdDigit = digits[2];
  if (thirdDigit >= 6) return false;

  const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
  let sum = 0;

  for (let i = 0; i < coefficients.length; i++) {
    let product = digits[i] * coefficients[i];
    if (product >= 10) product -= 9;
    sum += product;
  }

  const checkDigit = 10 - (sum % 10);
  return checkDigit === digits[9];
}

app.get('/api/id/verify/:id', (req, res) => {
  const id = req.params.id;
  const isValid = validateEcuadorianID(id);

  res.json({
    id: id,
    real: isValid
  });
});

app.listen(port, () => {
  console.log(`ID Verification API running on port ${port}`);
});
