import Head from "next/head"
import { UserProvider } from "../contexts/authContext"
import Nav from "./Nav"
import { motion } from 'framer-motion'

const variants = {
    hidden: { opacity: 0, y: 100 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
}

const Layout = ({ user, loading = false, children }:any) => {
    return (
        <UserProvider value={{user, loading}}>
            <Head>
                <title>Erwin's site</title>
            </Head>
            <Nav/>
            <motion.main
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5, type: "easeInOut" }}
            >
                {children}
            </motion.main>
        </UserProvider>
    )
}

export default Layout