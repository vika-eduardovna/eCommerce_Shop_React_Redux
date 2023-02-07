import React from 'react'
import s from './style.module.sass'
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css'

export default function DiscountSection() {

    const {
        handleSubmit,
        formState: { errors },
        control
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data);
      };
    return (
        <section className={['wrapper', s.container].join(' ')}>
            <div className={s.descr_block}>
               <div className={s.discount_title}>Discount 5%</div>
               <div className={s.p}>for the first order</div>
        
             <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                <div className={s.input_number}>
                    
                    <Controller
                            className={s.flag}
                            name="phone-input"
                            control={control}
                            rules={{
                            validate: (value) => isValidPhoneNumber(value)
                        }}
                        render={({ field: { onChange, value } }) => (
                            <PhoneInput
                                
                                value={value}
                                onChange={onChange}
                                defaultCountry="DE"
                                id="phone-input"
                            />
                        )}
                    />
                    {errors["phone-input"] && (
                        <div className={s.error_message}>Invalid Phone Number</div>
                    )}
                </div>
                <button>Get your discount</button>
            </form>
            </div>
        </section>
    )
}
