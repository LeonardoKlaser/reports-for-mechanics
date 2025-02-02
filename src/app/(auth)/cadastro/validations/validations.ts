import { useState } from "react"

const [errors, setErrors] = useState<{ [key: string]: string }>({})

export const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {}
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long"
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!password || password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long"
    }

    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
        return { success: true, errors: {} }
    } else {
        return { success: false, errors: newErrors }
    }
}