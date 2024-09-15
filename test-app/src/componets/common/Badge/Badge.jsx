const types = {
    /*For future use*/
    default: 'rounded border-2 border-cyan-700 bg-white text-cyan-700',
    popular: 'rounded border-2 border-accent bg-white text-accent',
}

const Badge = ({ text, type, children }) => {
    let typesClasses = types[type];

    return (
        text && (
            <>
                <span className={`flex justify-center items-center font-bold uppercase text-sm leading-[19px]
                        absolute top-[-15px] left-[15px] py-0.5 px-1 ${typesClasses}`}>
                        {children}
                        {text}
                </span>
            </>
        )


    )
}

export default Badge;
