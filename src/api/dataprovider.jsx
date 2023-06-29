import { fetchUtils } from "react-admin";


const apiUrl = 'http://localhost:9000';
const httpClient = fetchUtils.fetchJson;

export const dataProvider= {
    getList: (resource, params) => {
        const url = `${apiUrl}/${resource}/`;

        return httpClient(url).then(({ json }) => ({
            data: json,
            total: json.length,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const url = `${apiUrl}/${resource}/`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    upload : (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}/upload`;
        return httpClient(url, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: { ...params.data, id: json.id },
        })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

};