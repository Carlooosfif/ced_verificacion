const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());

app.get('/api/age/verify/:age', (req, res) => {
  const birthDate = new Date(req.params.age);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();  // Cambiado a 'let' para permitir reasignación
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  res.json({
    overAge: age >= 18,
    currentAge: age
  });
});

app.listen(port, () => {
  console.log(`Age Verification API running on port ${port}`);
});
