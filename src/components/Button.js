const STYLES = ["btn--primary--solid", "btn--primary--outline", "btn--secondery--solid"];

const SIZES = ["btn--small", "btn--medium", "btn--large", "btn--full"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonColor,
    buttonSize,
    className,
    disabled
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${className}`}
        onClick={onClick}
        type={type}
        disabled={disabled}
        >
        {children}
        </button>
    );
};
