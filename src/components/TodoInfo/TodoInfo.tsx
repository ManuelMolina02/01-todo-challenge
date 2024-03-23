interface TodoInfoProps {
    title: string;
    value: number | string;
    color: string;
}

export function TodoInfo({ title, value, color }: TodoInfoProps) {
    return (
        <div className='todoInfo'>
            <h4 style={{ color }}>{title}</h4>
            <span>{value}</span>
        </div>
    )
}