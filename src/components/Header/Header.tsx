import './header.module.css'

interface HeaderProps {
    children?: React.ReactNode
}

export function Header({ children }: HeaderProps) {
    return (
        <header className=""> {children} </header>
    )
}