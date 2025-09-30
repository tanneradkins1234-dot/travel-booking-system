import { Topnav } from './Topnav'
import { Outlet } from 'react-router-dom'

export function Layout() {
    return (
        <>
            <Topnav/>
                <main>
                    <Outlet/>
                </main>
        </>
    );
}