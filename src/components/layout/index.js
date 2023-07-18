import Header from "../navbar";
import Footer from "../footer";

export default function Layout({children}) {
    console.info(children)
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}