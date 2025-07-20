/**
 * © 2025 Suela Hoxhaj. All rights reserved.
 * Developed by Suela Hoxhaj as part of a public health innovation project.
 */
import { useState } from "react";

export default function RadiationCalculator() {
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState("female");
  const [ctChest, setCtChest] = useState(0);
  const [ctBrain, setCtBrain] = useState(0);
  const [xray, setXray] = useState(0);
  const [petCt, setPetCt] = useState(0);
  const [fluoroscopy, setFluoroscopy] = useState(0);
  const [totalDose, setTotalDose] = useState(0);
  const [risk, setRisk] = useState(0);

  const calculateDoseAndRisk = () => {
    const dose = ctChest * 7 + ctBrain * 2 + xray * 0.1 + petCt * 25 + fluoroscopy * 5;
    setTotalDose(dose);
    let baseRisk = gender === "female" ? dose * 0.013 : dose * 0.01;
    setRisk(baseRisk.toFixed(2));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem', fontFamily: 'Arial' }}>
      <h1>Radiologu Im – © 2025 Suela Hoxhaj</h1>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} /><br />
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select><br />
        <label>CT Chest: </label>
        <input type="number" value={ctChest} onChange={(e) => setCtChest(+e.target.value)} /><br />
        <label>CT Brain: </label>
        <input type="number" value={ctBrain} onChange={(e) => setCtBrain(+e.target.value)} /><br />
        <label>X-ray: </label>
        <input type="number" value={xray} onChange={(e) => setXray(+e.target.value)} /><br />
        <label>PET-CT: </label>
        <input type="number" value={petCt} onChange={(e) => setPetCt(+e.target.value)} /><br />
        <label>Fluoroscopy: </label>
        <input type="number" value={fluoroscopy} onChange={(e) => setFluoroscopy(+e.target.value)} /><br />
        <button onClick={calculateDoseAndRisk}>Calculate</button>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Total Dose:</strong> {totalDose} mSv</p>
        <p><strong>Risk:</strong> {risk}%</p>
      </div>
      <footer style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#555' }}>
        © 2025 Suela Hoxhaj – Të gjitha të drejtat e rezervuara
      </footer>
    </div>
  );
}