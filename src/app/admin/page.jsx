'use client'

import AdminHomeView from "@/src/components/admin-view/home"
import AdminContactView from "@/src/components/admin-view/contact"
import AdminEducationView from "@/src/components/admin-view/education"
import AdminExperienceView from "@/src/components/admin-view/experience"
import AdminLoginView from "@/src/components/admin-view/login"
import AdminProjectView from "@/src/components/admin-view/project"
import AdminAboutView from "@/src/components/admin-view/about"

export default function AdminView() {

    const menuItem = [
        {
            id: 'home',
            label: 'Home',
            component: <AdminHomeView />
        },
        {
            id: 'about',
            label: 'About',
            component: <AdminAboutView />
        },
        {
            id: 'contact',
            label: 'Contact',
            component: <AdminContactView />
        },
        {
            id: 'education',
            label: 'Education',
            component: <AdminEducationView />
        },
        {
            id: 'experience',
            label: 'Experience',
            component: <AdminExperienceView />
        },
        {
            id: 'login',
            label: 'Login',
            component: <AdminLoginView />
        },
        {
            id: 'project',
            label: 'Project',
            component: <AdminProjectView />
        }
    ]

    return (
        <div>
            
        </div>
    )
}