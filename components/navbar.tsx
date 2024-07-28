import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";

export const revalidate = 0;

export default async function Navbar() {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative flex items-center h-16 px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
                        <p className="text-xl font-bold">VendX Store</p>
                    </Link>
                    <MainNav data={categories || []} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    )
}