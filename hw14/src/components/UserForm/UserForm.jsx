import { useId } from "react";
import { useForm } from "react-hook-form";
import styles from "./UseForm.module.css"
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/actionCreator";

const UserForm = () => {
    const nameId = useId();
    const statusId = useId();

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        dispatch(setUser(data));
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Edit User Information</h3>
                <div>
                    <label htmlFor={nameId}>Name: </label>
                    <input {...register("username", { required: "Введите ваше имя" })} id={nameId} type="text" />
                    {errors.username && <p className={styles.errors}>{errors.username.message}</p>}
                </div>
                <div>
                    <label htmlFor={statusId}>Status: </label>
                    <input {...register("status", { required: "Введите ваш Статус" })} type={statusId} />
                    {errors.status && <p className={styles.errors}>{errors.status.message}</p>}
                </div>
                <button>Save</button>

            </form>
        </>
    )
}
export default UserForm;