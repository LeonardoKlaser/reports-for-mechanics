/* eslint-disable */
import axios from "axios";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

interface RenderPdfProps {
    formData: VehicleInspectionData
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const downloadPdfServices = {
    downloadPdf: async ({formData} : RenderPdfProps) =>{
       try{
        const res = await axios.post(
            `${API_URL}/api/generate-pdf/12`, 
            {formData}, 
            {responseType: "arraybuffer"} //manipular dados binários para o PDF
        );

        return res.data;
       }catch(error: any){
            console.log(error);
            throw new Error();
       }
    }
}