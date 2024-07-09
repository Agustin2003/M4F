import { LoginErrorProps, ILoginUser, RegisterErrorProps, RegisterPropsResponse } from "@/types";

export function validatedateLoginForm (values: ILoginUser) {
    let errors: LoginErrorProps = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!values.email) {
        errors.email = "Email is required"
    } else if(!values.password) {
        errors.password = "Password is required"
    } 

    return errors;
}

export function validatedateRegisterForm (values: RegisterPropsResponse) {
    let errors: RegisterErrorProps = {}

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;  // Asumiendo que el número de teléfono es de 10 dígitos
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!values.name.trim()) {
        errors.name = "El nombre es obligatorio";
    }

    if (!phoneRegex.test(values.phone)) {
        errors.phone = "El número de teléfono no es válido";
    }

    if (!values.address.trim()) {
        errors.address = "La dirección es obligatoria";
    }

    if (!passwordRegex.test(values.password)) {
        errors.password = "La contraseña debe tener al menos 8 caracteres, incluyendo una letra y un número";
    }

    return errors;
}