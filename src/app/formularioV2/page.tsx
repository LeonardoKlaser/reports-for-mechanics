import VehicleInspectionForm from "@/components/vehicle-inspection-form";

export default async function FormularioV2(){
    return(
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">Relatório Inspeção Veícular</h1>
            <VehicleInspectionForm />
        </div>
    )
}