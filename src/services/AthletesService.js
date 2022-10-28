import axios from "axios";

function formatResponse(response) {
    return {
        data: response,
        success: true
    }
}

function formatError(error) {
    return {
        message: error.message,
        success: false
    }
}

export async function getAthletes() {
    const response = await axios.get(process.env.VUE_APP_API_BASE_URI + 'users').then(response => formatResponse(response.data)).catch(error => formatError(error));
    console.log(response)
    return response;
}