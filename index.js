import axios from 'axios';

export const handler = async (event) => {
    try {
        const response = await axios.get('https://tools.applefee.com/image-converter');
        console.log('HTTP Request Status Code:', response.status);
        return {
            statusCode: 200,
            body: "ok"
        };
    } catch (error) {
        console.error('Error making HTTP request:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

