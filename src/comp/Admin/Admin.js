import React, { useState } from 'react';
import './Admin.css';
// import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import AdminSidebar from './AdminSideBar/AdminSideBar';

// Placeholder components for the new options
const PersonalPreferences = () => <h1>Personal Preferences Content</h1>;
const PasswordAndLogin = () => <h1>Password and Login Content</h1>;
const EmailSync = () => <h1>Email Sync Content</h1>;
const ContactSync = () => <h1>Contact Sync Content</h1>;
const CalendarSync = () => <h1>Calendar Sync Content</h1>;
const GoogleDrive = () => <h1>Google Drive Content</h1>;
const YourDevices = () => <h1>Your Devices Content</h1>;
const Notifications = () => <h1>Notifications Content</h1>;
const InterfacePreferences = () => <h1>Interface Preferences Content</h1>;

const CompanySettings = () => <h1>Company Settings Content</h1>;
const ManageUsers = () => <h1>Manage Users Content</h1>;
const UserOverview = () => <h1>User Overview Content</h1>;
const DataFields = () => <h1>Data Fields Content</h1>;
const Usage = () => <h1>Usage Content</h1>;
const Billing = () => <h1>Billing Content</h1>;

// const Dashboard = () => <h1>Dashboard Content</h1>;
// const Alerts = () => <h1>Alerts Content</h1>;
// const Rules = () => <h1>Rules Content</h1>;
// const SingleSignOn = () => <h1>Single Sign-On Content</h1>;

const adminItems = [
    {
        category: 'MY ACCOUNT',
        items: [
            { name: 'Personal preferences', Component: <PersonalPreferences /> },
            { name: 'Password and login', Component: <PasswordAndLogin /> },
            { name: 'Email sync', Component: <EmailSync /> },
            { name: 'Contact sync', Component: <ContactSync /> },
            { name: 'Calendar sync', Component: <CalendarSync /> },
            { name: 'Google Drive', Component: <GoogleDrive /> },
            { name: 'Your devices', Component: <YourDevices /> },
            { name: 'Notifications', Component: <Notifications /> },
            { name: 'Interface preferences', Component: <InterfacePreferences /> },
        ],
    },
    {
        category: 'COMPANY OVERVIEW',
        items: [
            { name: 'Company settings', Component: <CompanySettings /> },
            { name: 'Manage users', Component: <ManageUsers /> },
            { name: 'User overview', Component: <UserOverview /> },
            { name: 'Data fields', Component: <DataFields /> },
            { name: 'Usage', Component: <Usage /> },
            { name: 'Billing', Component: <Billing /> },
        ],
    },
    // {
    //     category: 'SECURITY CENTER',
    //     items: [
    //         { name: 'Dashboard', Component: <Dashboard /> },
    //         { name: 'Alerts', Component: <Alerts /> },
    //         { name: 'Rules', Component: <Rules /> },
    //         { name: 'Single sign-on', Component: <SingleSignOn /> },
    //     ],
    // },
];

const Admin = () => {

    const [selectedAdminItem, setSelectedAdminItem] = useState(adminItems[0].items[0].name);

    const handleSelectAdminItem = (item) => {
        setSelectedAdminItem(item);
    };

    const renderComponent = () => {
        const selectedItem = adminItems.flatMap(f => f.items).find(item => item.name === selectedAdminItem);
        if (selectedItem && selectedItem.Component) {
            return selectedItem.Component;
        }
    };

    console.log(adminItems);

    return (
        <div className="admin-panel">
            <AdminSidebar
                categories={adminItems}
                onSelect={handleSelectAdminItem}
                selectedItem={selectedAdminItem}
            />
            <div className="admin-content">
                {renderComponent()}
            </div>
        </div>
    );
};

export default Admin;