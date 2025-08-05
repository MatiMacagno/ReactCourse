import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import { schema, type FormValues } from "../../models"

const CustomForm = () => {
    const {control, handleSubmit, formState: { errors }} = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CustomInput name="name" control={control} label="Name" type="text" error={errors.name}/>
            <CustomInput name="email" control={control} label="Email" type="email" error={errors.email}/>
            <CustomInput name="password" control={control} label="Password" type="password" error={errors.password}/>
            <CustomInput name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CustomForm