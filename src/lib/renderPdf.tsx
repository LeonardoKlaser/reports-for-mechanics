import DocumentTemplate from "@/components/DocumentTemplate"

import type { VehicleInspectionData } from "@/components/vehicle-inspection-form"

  interface RenderPdfProps {
    formData: VehicleInspectionData
  }

export default async function RenderPdf({ formData }: RenderPdfProps) {
  const { renderToString } = await import("react-dom/server");
  const document = renderToString(<DocumentTemplate formData={formData} />)

  return { document }
}

