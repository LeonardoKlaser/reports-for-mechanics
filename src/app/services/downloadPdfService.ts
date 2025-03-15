/* eslint-disable */
import axios from "axios";
import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

interface RenderPdfProps {
    formData: VehicleInspectionData
  }

export const downloadPdfServices = {
    downloadPdf: async ({formData} : RenderPdfProps) =>{
       try{
        debugger;
        const res = await axios.post(
            `https://reports-for-mechanics.vercel.app/api/generate-pdf/12`, 
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