import { Router } from 'express';
const router = Router();

router.post('/', (req, res) => {
  const { appointmentId, patientId, medication, pharmacy, message } = req.body;
  console.log(`Pharmacy notified:\n\tAppointment = ${appointmentId}\n\tPatientID = ${patientId}\n\tMedication = ${medication}\n\tPharmacy = ${pharmacy}\n\tPatient Message = "${message}"\n`);
  res.json({ status: 'success', appointmentId, patientId, medication, pharmacy, message });
});

export default router;
