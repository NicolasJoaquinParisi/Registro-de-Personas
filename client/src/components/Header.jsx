import Nav from "./Nav";

const Header = () => {

    return (
        <header className="mb-4">
            <div className="p-4 bg-primary">
                <div className="container">
                    <h1 className="text-white">Registro de Personas</h1>
                </div>
            </div>
            <Nav />
        </header>
    );
}
 
export default Header;