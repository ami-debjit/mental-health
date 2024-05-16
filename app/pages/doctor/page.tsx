// pages/doctors.tsx
"use client"
import Head from 'next/head';
import Doctor from '@/app/types/doctor';
import DoctorList from '@/app/component/DoctorList';
import dummyDoctors from '@/app/data/doctor';
import { Button } from '@/app/component/Button';

const DoctorsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>List of Doctors</title>
        <meta name="description" content="List of doctors and their details" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <div className="grid h-16 place-items-center"> List of doctors</div>

      <main className="max-w-4xl mx-auto py-8">
        <DoctorList doctors={dummyDoctors} />
        {/* <Button onClick={async () => {
      window.location.href ="https://www.apollohospitals.com/" || "";
      }}>Satrt Session</Button> */}
      </main>
    </div>
  );
};

export default DoctorsPage;
