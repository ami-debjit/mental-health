// components/DoctorList.tsx
"use client"
import Doctor from "../types/doctor";
import { Button } from "./Button";

interface Props {
  doctors: Doctor[];
}

const DoctorList: React.FC<Props> = ({ doctors }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {doctors.map((doctor) => (
        <div key={doctor.id} className="border p-4 rounded-md">
            <img src={doctor.photourl} alt={doctor.name} className="w-full h-60 mb-2 rounded-md" />
          <h3 className="text-lg font-semibold">{doctor.name}</h3>
          <p className="text-gray-600">{doctor.specialty}</p>
          <p>{doctor.description}</p>
          <Button onClick={async () => {
      window.location.href ="/pages/book" || "";
      }}>Satrt Session</Button>
          <div>  
               
          </div>
          
        </div>
        
       
      ))}


    </div>
  );
};

export default DoctorList;
