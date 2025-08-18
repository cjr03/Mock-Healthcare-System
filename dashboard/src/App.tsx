import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Appointment {
  id: number;
  patientId?: number | null;
  date?: string | null;
  medication?: string | null;
  pharmacy?: string | null;
  status?: string | null;
}

export default function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5001/appointments")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, []);

  const notifyPharmacy = async (appt: Appointment) => {
  try {
    const payload = {
      appointmentId: appt.id ?? -1,
      patientId: appt.patientId ?? "Unknown",
      medication: appt.medication ?? "Unknown",
      pharmacy: appt.pharmacy ?? "Unknown",
      message: `Notify ${appt.pharmacy} for appointment #${appt.id ?? "—"}. Patient #${appt.patientId} requires ${appt.medication}.`
    };

    await axios.post("http://localhost:5001/notify-pharmacy", payload);

    setAppointments((prev) =>
      prev.map((a) =>
        a.id === appt.id ? { ...a, status: "Notified" } : a
      )
    );
  } catch {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === appt.id ? { ...a, status: "Failed" } : a
      )
    );
  }
};


  return (
    <div className="app-container">
      <h1>Mock Healthcare System</h1>
      <div className="cards-grid">
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <div className="card" key={appt.id}>
              <div className={`status ${appt.status?.toLowerCase() || "default"}`}>
                {appt.status || "Not Notified"}
              </div>
              <p><strong>Appointment #{appt.id ?? "—"}</strong></p>
              <p>Patient: {appt.patientId ?? "N/A"}</p>
              <p>Date: {appt.date ?? "Not scheduled"}</p>
              <p>Medication: {appt.medication ?? "Unknown"}</p>
              <p>Pharmacy: {appt.pharmacy ?? "Not assigned"}</p>
              <button className="notify" onClick={() => notifyPharmacy(appt)}>
                Notify Pharmacy
              </button>
            </div>
          ))
        ) : (
          <p>No appointments available.</p>
        )}
      </div>
    </div>
  );
}
