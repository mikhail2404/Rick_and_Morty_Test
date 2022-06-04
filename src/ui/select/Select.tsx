import React, {ChangeEvent, FC, SelectHTMLAttributes} from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: string[],
    selectedOption: string,
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void,
    name: string,
    className?: string
}

const Select: FC<SelectProps> = ({
    className,
     name,
     options,
     selectedOption,
     onChange,
     ...props
}) => {

    return (
        <div className={className ? `${className} select` : 'select'}>
            <label className='select__label' htmlFor={name}>{name}:</label>
            <select {...props} value={selectedOption} className='select__selection' onChange={onChange} name={name} id={name}>
                {
                    options.map((option) => (
                        <option key={option} >{option}</option>
                    ))
                }
            </select>
        </div>
    );
};

export default Select;