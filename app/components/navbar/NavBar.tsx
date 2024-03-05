import Link from "next/link";
import Container from "../container";

const NavBar = () => {
    return ( 
        <div className="sticky top-0 w-full bg-blue-400 z-30 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/">
                            Metammerce
                        </Link>
                        <div>Search</div>
                        
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;