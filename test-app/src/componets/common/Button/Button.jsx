const sizes = {
    /*For future use*/
    /*sm: 'px-4 py-2 rounded text-base',
    md: 'px-4 py-2 rounded text-base',*/
    lg: 'px-5 py-1 rounded text-[20px] leading-[20px] min-h-[54px]',
}

const types = {
    /*For future use*/
    default: 'bg-cyan-700 hover:bg-cyan-900 text-white',
    primary: 'bg-accent hover:bg-cyan-700 text-white',
}

const stretches = {
    auto: '',
    stretch: 'w-full',
}

const Button = ({ text, type, size, width, children }) => {
    let typeClasses = types[type];
    let sizeClasses = sizes[size];
    let widthClasses = stretches[width];

    return (
        <button type="button" className={`flex justify-center items-center font-bold uppercase 
            ${sizeClasses} ${typeClasses} ${widthClasses}`}>
            {children}
            {text}
        </button>
    )
}

export default Button;
