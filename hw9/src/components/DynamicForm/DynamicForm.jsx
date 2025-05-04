import styles from './DynamicForm.module.css'
import { useForm } from 'react-hook-form';

const DynamicForm = () => {

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (values) => {
        console.log(values);
        reset();
    }
    const name = watch('name');

    return (
        <>
            {name && name.length >= 5 && !errors.name ? (
                <form className={styles.main} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2>Введите логин</h2>
                        <input
                            {...register('name', { required: 'Ввод поля обязателен', minLength: { value: 5, message: 'Минимум 5 символов' } })}
                            type="text"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <div>
                        <h3>Введите E-mail</h3>
                        <input
                            {...register('email', {
                                required: 'Ввод поля обязателен',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                    message: 'Неправильный формат e-mail'
                                }
                            })}
                            type="text"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <button>Submit</button>
                </form>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2>Введите логин</h2>
                        <input
                            {...register('name', { required: 'Ввод поля обязателен', minLength: { value: 5, message: 'Минимум 5 символов' } })}
                            type="text"
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                    <button>Submit</button>
                </form>
            )}
        </>
    );
};


export default DynamicForm;