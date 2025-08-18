import { Configuration } from '../client';
import axios from 'axios';
import type { Notification } from '../client';
import * as client from '../client';

async function run() {
  const basePath = 'http://localhost:5001';
  const cfg = new Configuration({ basePath });
  const api = new client.DefaultApi(cfg);

  const patients = await axios.get(`${basePath}/patients`).then(r => r.data);
  console.log('Patients:', patients);

  const appts = await axios.get(`${basePath}/appointments`).then(r => r.data);
  console.log('Appointments:', appts);

  const payload: Notification = { appointmentId: appts[0].id, patientId: appts[0].patientId, medication: appts[0].medication, pharmacy: appts[0].pharmacy, message: 'Notify ' + appts[0].pharmacy + ' for appointment #' + appts[0].id + '. Patient #' + appts[0].patientId + ' requires ' + appts[0].medication + '.' };
  const res = await axios.post(`${basePath}/notify-pharmacy`, payload).then(r => r.data);
  console.log('Notify response:', res);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
