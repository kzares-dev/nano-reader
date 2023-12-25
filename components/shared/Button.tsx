
export interface ButtonProps {
    color: "primary" | "default";
    label?: string;
    icon?: string;
}

export const Button = ({ color, label, icon }: ButtonProps) => {

    return (
        <button className={`${color === "primary" ? "button-primary text-xs" : "button-default" }`}>
            {icon ? <i className={'uil ' + icon}></i> : null}
            <p className="text-[15px]">{label}</p>
        </button>
    );
}
