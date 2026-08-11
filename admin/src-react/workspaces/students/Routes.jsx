import Dashboard from "./dashboard/pages/Dashboard";

import SearchOptions from "./search/pages/Options";

import Setup from "./admissions/setup/pages/Setup";

import DraftList from "./admissions/drafts/pages/DraftList";

import PersonalDetails from "./admissions/form/pages/PersonalDetails";
import FamilyContact from "./admissions/form/pages/FamilyContact";
import AddressAcademic from "./admissions/form/pages/AddressAcademic";
import Documents from "./admissions/form/pages/Documents";

import Pending from "./applications/pages/Pending";
import Approved from "./applications/pages/Approved";
import Hold from "./applications/pages/Hold";
import Rejected from "./applications/pages/Rejected";
import Details from "./applications/pages/Details";

import BillingList from "./billing/pages/BillingList";
import BillingCheckout from "./billing/pages/BillingCheckout";
import BillingSelect from "./billing/pages/BillingSelect";

import FormLayout from "./admissions/form/components/Layout";
import ApplicationsLayout from "./applications/components/Layout";

const studentRoutes = [
    {
        path: "/students",
        children: [
            {
                index: true,
                element: <Dashboard />,
            },

            {
                path: "search",
                element: <SearchOptions />,
            },

            {
                path: "admission",
                element: <Setup />,
            },

            {
                path: "admission/draftlist",
                element: <DraftList />,
            },

            {
                path: "admission/:id/form",
                element: <FormLayout />,
                children: [
                    {
                        index: true,
                        element: <PersonalDetails />,
                    },
                    {
                        path: "family-contact",
                        element: <FamilyContact />,
                    },
                    {
                        path: "address-academic",
                        element: <AddressAcademic />,
                    },
                    {
                        path: "upload-documents",
                        element: <Documents />,
                    },
                ],
            },

            {
                path: "applications",
                element: <ApplicationsLayout />,
                children: [
                    {
                        index: true,
                        element: <Pending />,
                    },
                    {
                        path: "approved",
                        element: <Approved />,
                    },
                    {
                        path: "hold",
                        element: <Hold />,
                    },
                    {
                        path: "rejected",
                        element: <Rejected />,
                    },
                ],
            },

            {
                path: "applications/:id",
                element: <Details />,
            },

            {
                path: "billing",
                element: <BillingSelect />,
            },

            {
                path: "billing/checkout",
                element: <BillingCheckout />,
            },

            {
                path: "billing/list",
                element: <BillingList />,
            },
        ],
    },
];

export default studentRoutes;
