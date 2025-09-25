
export default function Footer(){
    return(
        <footer className="h-40 flex items-center justify-evenly border-t-1 border-gray-900">
            <div className="text-center">
                <p>Derechos</p>
                <p>@Mateo Gimenez 2025</p>
            </div>

            <div className="text-center">
                <p>Redes</p>
                <nav className="flex gap-4">
                    <a href="">Instragram</a>
                    <a href="">Whatsapp</a>
                    <a href="">Gmail</a>
                </nav>
            </div>
        </footer>
    )
}