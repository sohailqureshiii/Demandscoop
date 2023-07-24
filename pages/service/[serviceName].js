import { useRouter } from 'next/router';



const serviceDetails = [
    { url: 'account-based-marketing', name: 'Service A', description: 'Details of Service A' },
    { url: 'b', name: 'Service B', description: 'Details of Service B' },

];

const ServicePage = ({ service }) => {
    if (!service) {
        return (
            <>
                Service Not Found
            </>
        );
    }

    return (
        <div>
            <h1>{service.name}</h1>
            <p>{service.description}</p>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { serviceName } = context.query;

    const selectedService = serviceDetails.find(
        (item) => item.url === serviceName
    );

    return {
        props: {
            service: selectedService || null,
        },
    };
}

export default ServicePage;