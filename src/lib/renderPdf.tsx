import DocumentTemplate from "@/components/DocumentTemplate"

interface VehicleInspectionData {
  reportNumber: string
  inspectionDate: string
  make: string
  model: string
  color: string
  year: string
  licensePlate: string
  vin: string
  odometer: string
  accessories: string
  conditionChecks: {
    [key: string]: "ok" | "issue" | "na"
  }
  detailFields?: {
    [key: string]: {
      [key: string]: string | { [key: string]: string }
    }
  }
  images: {
    [key: string]: string // Assuming we'll receive image URLs
  }
}

interface RenderPdfProps {
  formData: VehicleInspectionData
}

export default async function RenderPdf({ formData }: RenderPdfProps) {
  const { renderToString } = await import("react-dom/server");
  const document = renderToString(<DocumentTemplate formData={formData} />)

  return { document }
}

