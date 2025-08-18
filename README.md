# Mock Healthcare System
![TypeScript](https://img.shields.io/badge/TypeScript-deepskyblue)
![Node.js](https://img.shields.io/badge/Node.js-green)
![Express.js](https://img.shields.io/badge/Express-yellow)
![OpenAPI](https://img.shields.io/badge/OpenAPI-olive)
![React](https://img.shields.io/badge/C++-dodgerblue)
![HTML](https://img.shields.io/badge/HTML-orange)
![CSS](https://img.shields.io/badge/CSS-blue)

A demo **TypeScript + Express + OpenAPI** application showcasing **API-first integration design**. Built to simulate how healthcare systems (EHRs, infusion clinics, pharmacies) can be integrated quickly using an OpenAPI spec and auto-generated clients.  

This project is designed as a portfolio/interview-ready example for integration engineering roles.  

---  

## Features 
- **Express API** with mock data for patients and appointments. 
- **Pharmacy notification endpoint** to simulate downstream integration. 
- **OpenAPI 3.0 Spec** served with Swagger UI at `/docs`. 
- **Generated TypeScript client** from the spec. 
- **Stylized React client** Designed to visualized appointments, notify pharmacies, and visualized API docs link.
- **API-first approach** → spec-driven development ensures type safety and faster integration. 

---

## Setup & Run

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run
- **Clone repo** 
	git clone <https://github.com/cjr03/Mock-Healthcare-System.git>
	cd mock-healthcare-system
- **Install dependencies**
	npm install
- **Run dev server**
	npm run dev
- **Server URL** http://localhost:5001/
- **Docs URL** http://localhost:5001/

### Example API Calls
- **Get all patients**
	curl http://localhost:5001/patients
- **Get all appointments**
	curl http://localhost:5001/appointments
- **Notify pharmacy**
	curl -X POST http://localhost:5001/notify-pharmacy \
	  -H 'Content-Type: application/json' \
	  -d '{"appointmentId":"1","patientId":"1","medication":"Cisplatin","pharmacy":"CVS","message":"Prepare infusion meds"}'

---

## Using Generated Client
- **Run Generated Client** Runs an integration script that calls API.
	npm run demo:client

---

## Using React Frontend
- **Run React Frontend** Runs a simple frontend to list appointments, notify pharmacy, and visualize API docs link.
	cd dashboard
	npm run dev
