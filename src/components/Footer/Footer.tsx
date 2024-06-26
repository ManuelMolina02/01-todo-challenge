import './footer.module.css'

interface FooterProps {
    children?: React.ReactNode
}

export function Footer({ children }: FooterProps) {
    return (
        <footer>
            {children}
        </footer>
    )
}